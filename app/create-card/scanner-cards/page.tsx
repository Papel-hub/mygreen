'use client';

import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, Upload, Ticket } from 'lucide-react';

interface Step2ReceiptProps {
  onNext: (data: { code: string; file: File | null }) => void;
  onBack: () => void;
}

export default function ScannerStep2Receipt({ onNext, onBack }: Step2ReceiptProps) {
  const [purchaseCode, setPurchaseCode] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleContinue = () => {
    if (purchaseCode.trim() || selectedFile) {
      onNext({ code: purchaseCode, file: selectedFile });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a2e1d] text-white flex flex-col items-center p-4 sm:p-6 relative overflow-hidden font-sans">
      {/* Background Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M30 30c-2-4-6-6-10-6s-8 3-8 7c0 7 11 13 18 21 7-8 18-14 18-21 0-4-4-7-8-7s-8 2-10 6z'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="w-full max-w-xl z-10">
        {/* Header Navigation */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={onBack}
            className="p-2 rounded-lg bg-[#14472d] text-emerald-300 hover:bg-[#1a5a3a] transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <h1 className="text-lg font-semibold tracking-wide text-white">
            Scanner Greeting Cards
          </h1>
          
          <span className="text-xs font-medium text-emerald-200/70">
            Step <span className="text-amber-400 font-bold">2</span> of 9
          </span>
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-amber-400 mb-2">
              Verify your purchase.
            </h2>
            <p className="text-sm text-emerald-100/80 leading-relaxed">
              Enter the receipt/code or upload a photo of your purchase receipt to validate your physical card.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-[#123e27]/80 backdrop-blur-sm border border-emerald-800/40 rounded-xl p-5 space-y-5 shadow-xl">
            {/* Input Code */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-200/80 mb-2">
                Receipt Code / Serial Number
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={purchaseCode}
                  onChange={(e) => setPurchaseCode(e.target.value)}
                  placeholder="e.g. REC-84920-IMGD"
                  className="w-full bg-[#0a2718] border border-emerald-700/50 rounded-lg px-4 py-3 pl-10 text-sm text-white placeholder-emerald-600/60 focus:outline-none focus:border-amber-400 transition-colors"
                />
                <Ticket className="w-4 h-4 text-emerald-500 absolute left-3 top-3.5" />
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 text-xs text-emerald-300/50 my-2">
              <span className="h-px bg-emerald-800/60 flex-1"></span>
              <span>OR</span>
              <span className="h-px bg-emerald-800/60 flex-1"></span>
            </div>

            {/* File Upload Box */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-200/80 mb-2">
                Upload Receipt Image
              </label>
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-emerald-700/60 rounded-lg cursor-pointer bg-[#0a2718]/60 hover:bg-[#0a2718] hover:border-amber-400/60 transition-all">
                <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
                  {selectedFile ? (
                    <>
                      <CheckCircle2 className="w-8 h-8 text-amber-400 mb-2" />
                      <p className="text-xs text-emerald-100 font-medium truncate max-w-[200px]">
                        {selectedFile.name}
                      </p>
                      <p className="text-[10px] text-emerald-400/70 mt-1">
                        Click to change file
                      </p>
                    </>
                  ) : (
                    <>
                      <Upload className="w-7 h-7 text-emerald-400 mb-2" />
                      <p className="text-xs text-emerald-200 font-medium">
                        Click or drag receipt photo here
                      </p>
                      <p className="text-[10px] text-emerald-400/60 mt-1">
                        PNG, JPG, or PDF (Max 5MB)
                      </p>
                    </>
                  )}
                </div>
                <input 
                  type="file" 
                  accept="image/*,application/pdf" 
                  onChange={handleFileChange} 
                  className="hidden" 
                />
              </label>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={handleContinue}
            disabled={!purchaseCode.trim() && !selectedFile}
            className="w-full bg-[#c29331] hover:bg-[#d6a438] disabled:opacity-50 disabled:cursor-not-allowed text-emerald-950 font-bold py-3.5 px-6 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-500/10 active:scale-[0.99]"
          >
            Continue &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}