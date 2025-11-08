import React, { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Tentang Kami', href: '#tentang' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-content-center font-bold">P</div>
            <span className="font-semibold text-slate-800 text-lg">Prima Pompa Air</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/6281212345678?text=Halo%20Prima%20Pompa%20Air%2C%20saya%20butuh%20bantuan%20servis%20pompa."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md bg-orange-500 px-4 py-2 text-white font-medium shadow hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
            >
              Hubungi Kami
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-md text-slate-700 hover:bg-slate-100"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://wa.me/6281212345678?text=Halo%20Prima%20Pompa%20Air%2C%20saya%20butuh%20bantuan%20servis%20pompa."
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center rounded-md bg-orange-500 px-4 py-2 text-white font-medium shadow hover:bg-orange-600"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
