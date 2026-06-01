'use client';

export default function Footer() {
  return (
    <footer id="contact" className="space-y-6 pt-16 pb-12 border-t border-neutral-900 text-center w-full bg-[#050505] scroll-mt-24">
      <div className="text-[10px] text-neutral-600 font-mono tracking-widest">// END OF TRANSMISSION</div>
      <p className="text-xs text-neutral-500 font-light max-w-sm mx-auto leading-relaxed">
        AnimusLab is an independent research platform. Contact us for security integrations, peer review, or general inquiries.
      </p>
      
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs font-mono font-bold pt-4 text-neutral-400">
        <a href="mailto:contact@animuslab.dev" className="hover:text-white transition-colors">[ EMAIL ]</a>
        <a href="https://github.com/AnimusLab" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">[ GITHUB ]</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">[ LINKEDIN ]</a>
      </div>

      <div className="text-[10px] text-neutral-700 font-mono mt-12">
        STATUS: ACTIVE // v5.0.4 // © 2026 ANIMUSLAB
      </div>
    </footer>
  );
}
