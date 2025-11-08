import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 pt-14 pb-20">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Solusi Cepat & Profesional untuk Masalah Pompa Air Anda.
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Teknisi berpengalaman siap melayani 24 jam. Servis bergaransi.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/6281212345678?text=Halo%20Prima%20Pompa%20Air%2C%20saya%20butuh%20bantuan%20servis%20pompa."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-orange-500 px-6 py-3 text-white text-base font-semibold shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
            >
              Hubungi Kami Sekarang
            </a>
            <a href="#layanan" className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-blue-600 text-base font-semibold border border-blue-200 hover:bg-blue-50">
              Lihat Layanan
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            <div>
              <dt className="text-sm text-slate-500">Pengalaman</dt>
              <dd className="text-lg font-semibold text-slate-900">10+ Tahun</dd>
            </div>
            <div>
              <dt className="text-sm text-slate-500">Respons</dt>
              <dd className="text-lg font-semibold text-slate-900">Cepat 24/7</dd>
            </div>
            <div>
              <dt className="text-sm text-slate-500">Garansi</dt>
              <dd className="text-lg font-semibold text-slate-900">Servis</dd>
            </div>
          </dl>
        </div>
        <div className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-[480px]">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600 to-blue-400 opacity-90"></div>
          <div className="absolute inset-4 rounded-xl bg-white/20 backdrop-blur-sm"></div>
          <div className="absolute inset-0 grid place-items-center text-white">
            <div className="text-center px-6">
              <p className="text-xl font-semibold">Prima Pompa Air</p>
              <p className="mt-2 text-white/90">Layanan perbaikan, instalasi, dan pengeboran sumur profesional.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
