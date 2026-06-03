'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const links = [
    {
      name: 'Research',
      href: '/research',
      active:
        pathname.startsWith('/research') ||
        pathname.startsWith('/papers'),
    },

    {
      name: 'Programs',
      href: '/programs',
      active: pathname.startsWith('/programs'),
    },

    {
      name: 'Constitution',
      href: '/constitution',
      active: pathname.startsWith('/constitution'),
    },

    {
      name: 'Institutions',
      href: '/institutions',
      active: pathname.startsWith('/institutions'),
    },

    {
      name: 'About',
      href: '/about',
      active: pathname.startsWith('/about'),
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#050505]/95 backdrop-blur-md border-b border-neutral-900">

      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">

        <div className="h-20 flex items-center justify-between">

          {/* LEFT */}

          <div className="flex items-center gap-6">

            <Link
              href="/"
              className="text-white font-semibold tracking-[0.18em] uppercase text-sm"
            >
              AnimusLab
            </Link>

            <div className="hidden xl:block h-4 w-px bg-neutral-800" />

            <span className="hidden xl:block text-[11px] tracking-[0.2em] uppercase text-neutral-600">
              Research Institute
            </span>

          </div>

          {/* RIGHT */}

          <nav className="flex items-center gap-8">

            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm tracking-wide transition-colors ${
                  link.active
                    ? 'text-white'
                    : 'text-neutral-500 hover:text-neutral-300'
                }`}
              >
                {link.name}

                {link.active && (
                  <span className="absolute left-0 -bottom-7 h-px w-full bg-white" />
                )}
              </Link>
            ))}

            <div className="h-5 w-px bg-neutral-800" />

            <a
              href="https://github.com/AnimusLab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-wide text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              GitHub
            </a>

            <div className="hidden md:block h-5 w-px bg-neutral-800" />

            <a
              href="mailto:tan@animuslab.dev?subject=AnimusLab%20-%20Request%20Technical%20Deep-Dive"
              className="hidden md:inline-flex items-center justify-center bg-white text-black hover:bg-neutral-200 px-4 py-2 text-xs font-bold transition-all rounded-sm shadow-md"
            >
              Request Deep-Dive
            </a>

          </nav>

        </div>

      </div>

    </header>
  );
}