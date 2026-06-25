"use client";

import { useState } from "react";
import { 
  ChevronLeft, 
  Wifi, 
  ArrowLeftRight, 
  Columns, 
  Snowflake, 
  XCircle, 
  RotateCw,
  Mail,
  Gift,
  Layers,
  ChevronDown
} from "lucide-react";

export default function GiftCardFlow() {
  // Controle de telas: 1 = Add Gift Card, 2 = Choose Delivery Type
  const [step, setStep] = useState<1 | 2>(1);
  
  // Estados da Tela 1
  const [amount, setAmount] = useState("50.00");
  const [selectedPreset, setSelectedPreset] = useState("€50");
  
  // Estados da Tela 2
  const [deliveryType, setDeliveryType] = useState("digital");

  const presets = ["€25", "€50", "€100", "€150", "Other"];

  return (
    <div className="mx-auto max-w-md h-[844px] bg-[#FAF9F6] shadow-2xl rounded-[40px] overflow-hidden border-8 border-black flex flex-col font-sans select-none relative">
      
      {/* --- STATUS BAR DO TELEFONE --- */}
      <div className="bg-[#042414] text-white px-6 pt-3 pb-2 flex justify-between items-center text-xs font-semibold tracking-wider">
        <span>9:41</span>
        <div className="flex items-center gap-1.5">
          {/* Ícone de Sinal de Rede */}
          <div className="flex items-end gap-0.5 h-2.5">
            <div className="w-[2px] h-1 bg-white rounded-xs"></div>
            <div className="w-[2px] h-1.5 bg-white rounded-xs"></div>
            <div className="w-[2px] h-2 bg-white rounded-xs"></div>
            <div className="w-[2px] h-2.5 bg-white rounded-xs"></div>
          </div>
          {/* Ícone de Bateria */}
          <div className="w-5 h-2.5 border border-white rounded-xs p-px flex items-center">
            <div className="h-full w-4 bg-white rounded-2xs"></div>
          </div>
        </div>
      </div>

      {/* =============================================
          TELA 1: ADD GIFT CARD (OPTIONAL)
         ============================================= */}
      {step === 1 && (
        <>
          <header className="bg-[#042414] text-white px-4 py-4 flex items-center relative">
            <button className="p-1 hover:bg-emerald-900 rounded-full transition-colors">
              <ChevronLeft className="w-6 h-6 text-emerald-500" />
            </button>
            <h1 className="flex-grow text-center text-base font-semibold tracking-wide pr-7">
              Add Gift Card (Optional)
            </h1>
          </header>

          <div className="flex-1 p-5 flex flex-col justify-between overflow-y-auto">
            <div className="flex flex-col gap-5">
              
              {/* CARTÃO DE MEMBRO REALISTA */}
              <div className="w-full aspect-[1.58/1] bg-[#042414] rounded-2xl shadow-lg relative overflow-hidden text-white flex border border-emerald-800/30">
                {/* Lado Esquerdo Metálico (Dourado) */}
                <div className="w-[22%] bg-gradient-to-b from-[#E5A93C] via-[#C98A20] to-[#A06914] p-3 flex flex-col justify-between items-center border-r border-amber-600/20">
                  {/* Chip EMV */}
                  <div className="w-8 h-6 bg-gradient-to-br from-amber-200 via-yellow-400 to-amber-600 rounded-xs shadow-inner border border-amber-300/40 mt-3"></div>
                  {/* Ícone Contactless */}
                  <Wifi className="w-4 h-4 rotate-90 text-amber-100/70 mb-2" />
                </div>

                {/* Lado Direito (Verde com Textura de Trevos) */}
                <div className="flex-1 p-4 flex flex-col justify-between relative bg-[radial-gradient(#053a20_1px,transparent_1px)] [background-size:12px_12px]">
                  {/* Emblema Circular da Árvore/Diamante */}
                  <div className="absolute top-3 right-3 bg-white w-14 h-14 rounded-full flex items-center justify-center border border-amber-400/60 shadow-sm p-1">
                    <div className="w-full h-full rounded-full border border-dashed border-emerald-800 flex flex-col items-center justify-center bg-emerald-50">
                      <span className="text-xs">💎</span>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h2 className="text-[11px] font-bold tracking-[0.2em] text-emerald-300/90">MEMBERSHIP</h2>
                    <h2 className="text-3xl font-black tracking-tight text-white leading-none">CARD</h2>
                  </div>

                  <div className="mt-auto">
                    <p className="text-[7px] font-mono tracking-wider text-emerald-200/60 leading-none">
                      *1488C99931 922872 44 12 73 11 41 24 24 45 1254 90
                    </p>
                    <p className="text-[9px] font-bold tracking-widest text-white uppercase mt-1">
                      FOR ALL OCCASIONS
                    </p>
                  </div>
                </div>
              </div>

              {/* SELEÇÃO DE VALOR */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                  Choose Amount
                </label>
                <div className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3 bg-white shadow-xs focus-within:border-emerald-700 transition-all">
                  <div className="flex items-center">
                    <span className="text-base font-semibold text-gray-800 mr-2">€</span>
                    <input 
                      type="text" 
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="bg-transparent text-base font-bold outline-none text-gray-900 w-28"
                    />
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>

                {/* Grid de Presets (Valores Rápidos) */}
                <div className="flex gap-1.5 mt-1.5">
                  {presets.map((preset) => (
                    <button
                      key={preset}
                      onClick={() => {
                        setSelectedPreset(preset);
                        if (preset !== "Other") setAmount(preset.replace("€", "") + ".00");
                      }}
                      className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all border ${
                        selectedPreset === preset 
                          ? "bg-[#042414] text-white border-[#042414] shadow-xs" 
                          : "bg-white text-gray-800 border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>

              {/* BARRA DE AÇÕES INFERIORES */}
              <div className="grid grid-cols-5 gap-1 pt-3 border-t border-gray-100">
                <QuickAction icon={ArrowLeftRight} label="Transfer" />
                <QuickAction icon={Columns} label="Split" />
                <QuickAction icon={Snowflake} label="Freeze" />
                <QuickAction icon={XCircle} label="Cancel" />
                <QuickAction icon={RotateCw} label="Reissue" />
              </div>

            </div>

            {/* BOTÕES DE COMANDO DA TELA 1 */}
            <div className="flex flex-col gap-3 mt-6">
              <button 
                onClick={() => setStep(2)}
                className="w-full py-3.5 bg-[#042414] hover:bg-emerald-900 text-white font-bold rounded-xl shadow-md transition-all active:scale-[0.99] tracking-wider text-xs uppercase"
              >
                Add Gift Card
              </button>
              <button className="w-full py-1 text-gray-500 font-bold text-xs tracking-wider uppercase hover:text-gray-800 transition-colors">
                Skip this step
              </button>
            </div>
          </div>
        </>
      )}

      {/* =============================================
          TELA 2: CHOOSE DELIVERY TYPE
         ============================================= */}
      {step === 2 && (
        <>
          <header className="bg-[#042414] text-white px-4 py-4 flex items-center relative">
            <button 
              onClick={() => setStep(1)} 
              className="p-1 hover:bg-emerald-900 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <h1 className="flex-grow text-center text-base font-semibold tracking-wide pr-7">
              Choose Delivery Type
            </h1>
          </header>

          <div className="flex-1 p-5 flex flex-col justify-between bg-[#FAF9F6]">
            
            {/* OPÇÕES DISPONÍVEIS */}
            <div className="flex flex-col gap-4 mt-2">
              
              <DeliveryOption 
                id="digital"
                activeId={deliveryType}
                onClick={setDeliveryType}
                icon={Mail}
                title="DIGITAL DELIVERY"
                description="Send via link, email or phone"
              />

              <DeliveryOption 
                id="physical"
                activeId={deliveryType}
                onClick={setDeliveryType}
                icon={Gift}
                title="PHYSICAL DELIVERY"
                description="We deliver a physical card and/or bouquet"
              />

              <DeliveryOption 
                id="both"
                activeId={deliveryType}
                onClick={setDeliveryType}
                icon={Layers}
                title="DIGITAL + PHYSICAL"
                description="Both digital and physical delivery"
              />

            </div>

            {/* BOTÃO CONTINUAR */}
            <button 
              onClick={() => alert(`Sucesso! Valor: €${amount} | Tipo: ${deliveryType.toUpperCase()}`)}
              className="w-full py-3.5 bg-[#042414] hover:bg-emerald-900 text-white font-bold rounded-xl shadow-md transition-all active:scale-[0.99] tracking-wider text-xs uppercase"
            >
              Continue
            </button>
          </div>
        </>
      )}

    </div>
  );
}

// Sub-componente: Ícones de Funções Rápidas (Tela 1)
function QuickAction({ icon: Icon, label }: { icon: any, label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 cursor-pointer group py-0.5">
      <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:bg-emerald-50 transition-all">
        <Icon className="w-4 h-4 text-gray-500 group-hover:text-emerald-800 stroke-[1.8]" />
      </div>
      <span className="text-[10px] font-medium text-gray-400 group-hover:text-emerald-900 transition-colors">
        {label}
      </span>
    </div>
  );
}

// Sub-componente: Bloco de Opção de Entrega (Tela 2)
interface DeliveryProps {
  id: string;
  activeId: string;
  onClick: (id: string) => void;
  icon: any;
  title: string;
  description: string;
}

function DeliveryOption({ id, activeId, onClick, icon: Icon, title, description }: DeliveryProps) {
  const isSelected = id === activeId;
  return (
    <div 
      onClick={() => onClick(id)}
      className={`flex items-center gap-4 p-4 rounded-2xl border cursor-pointer bg-white transition-all ${
        isSelected 
          ? "border-emerald-800 shadow-xs ring-1 ring-emerald-800" 
          : "border-gray-200/70 hover:border-gray-300"
      }`}
    >
      {/* Box do Ícone com traço refinado verde */}
      <div className="w-14 h-14 rounded-xl border border-emerald-800/20 flex items-center justify-center text-[#042414] shrink-0 bg-[#FAF9F6]">
        <Icon className="w-7 h-7 stroke-[1.2]" />
      </div>
      
      <div>
        <h3 className="font-bold text-xs text-[#042414] tracking-wide">{title}</h3>
        <p className="text-[11px] text-gray-500 font-medium mt-0.5 leading-snug">{description}</p>
      </div>
    </div>
  );
}