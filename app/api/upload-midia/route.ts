import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import crypto from 'crypto';

// Configurações de diretório de Produção
const UPLOAD_DIR = '/var/www/uploads'; 
const PUBLIC_BASE_URL = 'https://irelandmygreendiamond.ie/uploads';

// Limite máximo de tamanho aceitável para o payload completo (100MB)
const MAX_FILE_SIZE = 100 * 1024 * 1024; 

// Lista de MimeTypes permitidos por segurança
const ALLOWED_MIME_TYPES = [
  'audio/webm',
  'audio/mp4',
  'audio/mpeg',
  'audio/ogg',
  'audio/wav',
  'video/webm',
  'video/mp4',
  'video/quicktime',
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/heic'
];

// Mapeamento de MimeType para extensão exata
const MIME_TO_EXT: Record<string, string> = {
  'audio/webm': 'webm',
  'audio/mp4': 'm4a',
  'audio/mpeg': 'mp3',
  'audio/ogg': 'ogg',
  'audio/wav': 'wav',
  'video/webm': 'webm',
  'video/mp4': 'mp4',
  'video/quicktime': 'mov',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/heic': 'heic'
};

export async function POST(request: NextRequest) {
  console.log('--- INICIANDO UPLOAD SEGURO ---');
  
  try {
    // 1. Validar tamanho do Header Content-Length para evitar estouro de banda
    const contentLength = Number(request.headers.get('content-length') || 0);
    if (contentLength > MAX_FILE_SIZE) {
      return NextResponse.json(
        { success: false, error: 'Payload too large. Maximum limit is 100MB.' },
        { status: 413 }
      );
    }

    const formData = await request.formData();
    const results: Record<string, string> = {};

    // 2. Garantir que a pasta de destino existe assincronamente
    if (!existsSync(UPLOAD_DIR)) {
      console.log('Diretório de uploads não existe. Criando pasta...');
      await mkdir(UPLOAD_DIR, { recursive: true });
    }

    // 3. Processar cada campo do FormData
    for (const [key, value] of formData.entries()) {
      
      if (value instanceof Blob) {
        
        // Ignora arquivos vazios
        if (value.size === 0) {
          console.log(`⚠️ Campo "${key}" ignorado por estar vazio.`);
          continue; 
        }

        // Validar se o MimeType é seguro
        const mimeType = value.type;
        if (!ALLOWED_MIME_TYPES.includes(mimeType)) {
          console.log(`❌ Arquivo rejeitado. Tipo "${mimeType}" não permitido.`);
          return NextResponse.json(
            { success: false, error: `File type "${mimeType}" is not allowed for security reasons.` },
            { status: 400 }
          );
        }

        // Converter para buffer para salvar no disco
        const buffer = Buffer.from(await value.arrayBuffer());
        
        if (buffer.length === 0) {
          console.log(`⚠️ Buffer do campo "${key}" está vazio. Pulando...`);
          continue;
        }

        // Definir extensão segura
        const extension = MIME_TO_EXT[mimeType] || 'bin';
        const fileName = `mimo-${Date.now()}-${crypto.randomUUID().slice(0, 8)}.${extension}`;
        const filePath = path.resolve(UPLOAD_DIR, fileName);

        console.log(`💾 Salvando ${key}: ${fileName} (${value.size} bytes)`);

        // Escrever o arquivo no disco de forma assíncrona
        await writeFile(filePath, buffer);
        
        // Validação pós-escrita imediata no File System
        if (existsSync(filePath)) {
          results[key] = `${PUBLIC_BASE_URL}/${fileName}`;
          console.log(`✅ ${key} salvo fisicamente.`);
        }
      }
    }

    // Retorno estruturado da API
    return NextResponse.json({
      success: true,
      audioPath: results['audio'] || null,
      videoPath: results['video'] || null,
      photoPath: results['photo'] || null,
    });

  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown Server Error';
    console.error('--- FALHA CRÍTICA NO UPLOAD ---');
    console.error('Erro:', error);
    
    return NextResponse.json(
      { success: false, error: msg }, 
      { status: 500 }
    );
  }
}