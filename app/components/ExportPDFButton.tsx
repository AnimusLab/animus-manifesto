'use client';

import React from 'react';

export default function ExportPDFButton() {
  return (
    <button
      onClick={() => window.print()}
      className="block w-full text-center bg-white/5 border border-neutral-850 hover:bg-white/10 hover:border-neutral-700 text-white px-4 py-2.5 text-xs font-mono font-bold transition-all rounded-sm cursor-pointer"
    >
      EXPORT DOSSIER PDF
    </button>
  );
}
