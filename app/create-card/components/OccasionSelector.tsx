// app/components/OccasionSelector.tsx
'use client';

import { useState } from 'react';

type Occasion = 'Friendship' | 'Family' | 'Love' | 'Birthday' | 'Celebration' | 'Custom';

const occasions: Occasion[] = ['Friendship', 'Family', 'Love', 'Birthday', 'Celebration', 'Custom'];

export default function OccasionSelector({ selected, onChange }: { selected: Occasion[], onChange: (selected: Occasion[]) => void }) {
  const toggleOccasion = (occasion: Occasion) => {
    if (selected.includes(occasion)) {
      onChange(selected.filter(o => o !== occasion));
    } else {
      onChange([...selected, occasion]);
    }
  };

  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
        OCCASION (SELECT ONE OR MORE)
      </h3>
      <div className="flex flex-wrap gap-2">
        {occasions.map((occasion) => (
          <button
            key={occasion}
            onClick={() => toggleOccasion(occasion)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
              selected.includes(occasion)
                ? 'bg-green-600 text-white border-green-600 shadow-md'
                : 'bg-white text-gray-700 border-gray-300 hover:border-green-400 hover:text-green-600'
            }`}
          >
            {occasion}
          </button>
        ))}
      </div>
    </div>
  );
}