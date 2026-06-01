'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Research', path: '/research' },
    { name: 'Anchor', path: '/anchor' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="border-b border-neutral-900 bg-[#050505] px-6 py-5 md:px-12 flex justify-between items-center sticky top-0 z-40 backdrop-blur-md bg-opacity-95">
      <Link href="/" className="flex items-center gap-3 group">
        <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full group-hover:scale-110 transition-transform" />
        <span className="text-white font-bold tracking-widest text-xs uppercase font-mono transition-colors group-hover:text-indigo-400">
          [ ANIMUS_LAB ]
        </span>
      </Link>
      
      <div className="flex items-center gap-6 md:gap-8 font-mono text-xs">
        <nav className="flex gap-6 md:gap-8 font-medium">
          {navItems.map(item => {
            const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                href={item.path}
                className={[
                  'transition-colors py-1 relative',
                  isActive ? 'text-white font-bold' : 'text-neutral-500 hover:text-neutral-300'
                ].join(' ')}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-indigo-500 animate-fadeIn" />
                )}
              </Link>
            );
          })}
        </nav>

        <span className="text-neutral-800 hidden sm:inline">|</span>

        {/* Visually much lighter Contact link */}
        <a
          href="#contact animate-fadeIn"
          onClick={(e) => {
            e.preventDefault();
            const footerContact = document.getElementById('contact');
            if (footerContact) {
              footerContact.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.location.href = '/about#contact';
            }
          }}
          className="text-neutral-600 hover:text-neutral-400 transition-colors font-medium hidden sm:inline"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
