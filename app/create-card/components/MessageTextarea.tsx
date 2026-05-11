// app/components/MessageTextarea.tsx
'use client';

import { useState } from 'react';

const MAX_CHARS = 500;

export default function MessageTextarea({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const charCount = value.length;
  const isOverLimit = charCount > MAX_CHARS;

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
          YOUR MESSAGE
        </label>
        <span className={`text-xs font-medium ${isOverLimit ? 'text-red-500' : 'text-gray-500'}`}>
          (max {MAX_CHARS} characters)
        </span>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value.slice(0, MAX_CHARS))} // Limita automaticamente
        rows={5}
        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none transition-all ${
          isOverLimit ? 'border-red-500' : 'border-gray-300'
        }`}
        placeholder="Write your heartfelt message here..."
      />
      <div className="flex justify-end mt-1">
        <span className={`text-xs font-medium ${isOverLimit ? 'text-red-500' : 'text-gray-400'}`}>
          {charCount}/{MAX_CHARS}
        </span>
      </div>
    </div>
  );
}