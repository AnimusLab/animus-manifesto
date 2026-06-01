'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const links = [
    { name: 'Research', href: '/research' },
    { name: 'Programs', href: '/programs' },
    { name: 'Constitution', href: '/constitution' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-900/50 bg-[#050505]/80 backdrop-blur-md px-6 md:px-12 py-5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Link href="/" className="text-white font-bold tracking-widest uppercase hover:opacity-80 transition-opacity">
          [ ANIMUS_LAB ]
        </Link>
      </div>

      <nav className="flex items-center gap-6 md:gap-8">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs md:text-sm tracking-wider transition-colors ${
                isActive ? 'text-white font-bold' : 'text-neutral-500 hover:text-neutral-300'
              }`}
            >
              {link.name}
            </Link>
          );
        })}
        <a
          href="https://github.com/AnimusLab"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs md:text-sm text-neutral-500 hover:text-neutral-300 tracking-wider transition-colors"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}
