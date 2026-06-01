import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-neutral-900/50 bg-[#050505] px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-600 font-mono">
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
        <span>© {currentYear} AnimusLab. All rights reserved.</span>
        <span className="hidden md:inline text-neutral-800">|</span>
        <span>STATUS: SECURE_WSS_ACTIVE</span>
      </div>

      <div className="flex items-center gap-4">
        <span>ZENODO_DOI: 10.5281/zenodo.anchor-preprint</span>
        <span className="hidden md:inline text-neutral-800">|</span>
        <span>REPOS // v5.0.4</span>
      </div>
    </footer>
  );
}
