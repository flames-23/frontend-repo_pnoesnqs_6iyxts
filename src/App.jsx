import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  useEffect(() => {
    const handler = (e) => {
      const href = e.target.closest('a')?.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className="min-h-screen font-sans text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Prima Pompa Air. Semua hak dilindungi.</p>
          <p className="text-sm text-slate-500">Dibuat dengan ❤️ untuk layanan terbaik.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
