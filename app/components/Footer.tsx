'use client';

import React, { useEffect, useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [visitorCount, setVisitorCount] = useState<string | null>(null);

  useEffect(() => {
    // Check if the current user is the administrator/owner to exclude them
    const isLocalhost = typeof window !== 'undefined' && 
      (window.location.hostname === 'localhost' || 
       window.location.hostname === '127.0.0.1' ||
       window.location.hostname.includes('local'));
    
    // Check url search params for admin key
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === 'true') {
      localStorage.setItem('animus_admin', 'true');
    }
    
    const isAdmin = isLocalhost || localStorage.getItem('animus_admin') === 'true';

    // We use a free, secure, and reliable visitor counter API
    const project = 'animuslab';
    const counter = 'homepage_visits';
    
    // If admin, we only fetch the current count (no increment). Otherwise, we increment the count.
    const url = isAdmin 
      ? `https://api.counterapi.dev/v1/projects/${project}/counters/${counter}`
      : `https://api.counterapi.dev/v1/projects/${project}/counters/${counter}/increment`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.value === 'number') {
          // Format count to be zero-padded, e.g., 000412
          const formatted = String(data.value).padStart(6, '0');
          setVisitorCount(formatted);
        }
      })
      .catch((err) => {
        console.error('Error fetching visitor counter:', err);
        // Fallback to null (hide) when the API is blocked or unreachable, respecting "Truth Over Optics"
        setVisitorCount(null);
      });
  }, []);

  return (
    <>
      <footer className="w-full border-t border-neutral-900/50 bg-[#050505] px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-600 font-mono">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <span>© {currentYear} AnimusLab. All rights reserved.</span>
          <span className="hidden md:inline text-neutral-800">|</span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>STATUS: SECURE_WSS_ACTIVE</span>
          </span>
          {visitorCount !== null && (
            <>
              <span className="hidden md:inline text-neutral-800">|</span>
              <span className="text-indigo-400 font-bold">SYS_VISITS: {visitorCount}</span>
            </>
          )}
        </div>

        <div className="flex items-center gap-4">
          <span>ZENODO_DOI: 10.5281/zenodo.anchor-preprint</span>
          <span className="hidden md:inline text-neutral-800">|</span>
          <span>REPOS // v5.0.4</span>
        </div>
      </footer>

      {visitorCount !== null && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#050505]/80 backdrop-blur-md border border-neutral-800/40 px-3 py-1.5 rounded-sm shadow-xl shadow-black/80 text-[10px] text-neutral-500 font-mono select-none hover:border-neutral-700/80 hover:text-neutral-300 transition-all duration-300 group">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400/50 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
          </span>
          <span className="font-bold tracking-wider text-neutral-500 group-hover:text-indigo-400 transition-colors">
            SYS_VISITS: {visitorCount}
          </span>
        </div>
      )}
    </>
  );
}
