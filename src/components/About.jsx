import React from 'react';

const About = () => {
  return (
    <section id="tentang" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">Tentang Kami</h2>
          <p className="mt-4 text-slate-600">
            Prima Pompa Air berdiri untuk memberikan layanan terbaik dalam instalasi, perbaikan,
            dan perawatan sistem air di wilayah Jabodetabek. Kami berkomitmen pada kualitas
            pekerjaan, ketepatan waktu, dan kepuasan pelanggan. Dengan tim teknisi yang
            berpengalaman, kami menangani berbagai kebutuhan mulai dari pemasangan pompa baru,
            pengeboran sumur, hingga pemasangan filter air untuk rumah maupun usaha.
          </p>
          <p className="mt-3 text-slate-600">
            Kepuasan Anda adalah prioritas kami. Setiap pekerjaan dilakukan dengan transparan dan
            disertai garansi untuk memberikan rasa aman bagi pelanggan.
          </p>
        </div>
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1581090468468-28b59a85f1b5?q=80&w=1470&auto=format&fit=crop"
            alt="Teknisi pompa air"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default About;
