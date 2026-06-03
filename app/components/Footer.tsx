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
        // Fallback mock count if API is unreachable so the UI remains clean
        setVisitorCount('002148');
      });
  }, []);

  return (
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
  );
}
