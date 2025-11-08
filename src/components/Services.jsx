import React from 'react';
import { Wrench, Settings, Drill, Filter } from 'lucide-react';

const services = [
  {
    title: 'Instalasi Pompa Baru',
    icon: Settings,
    description:
      'Pemasangan pompa air baru untuk rumah, kos, dan usaha. Rapi, aman, dan sesuai standar.',
  },
  {
    title: 'Perbaikan & Servis Rutin',
    icon: Wrench,
    description:
      'Perbaikan kebocoran, penggantian sparepart, dan perawatan berkala agar pompa awet.',
  },
  {
    title: 'Pengeboran Sumur & Jet Pump',
    icon: Drill,
    description:
      'Layanan pengeboran sumur dangkal/ dalam, instalasi jet pump, dan pengukuran debit air.',
  },
  {
    title: 'Pemasangan Filter Air',
    icon: Filter,
    description:
      'Solusi filtrasi air rumah tangga untuk air lebih jernih dan sehat dikonsumsi.',
  },
];

const Services = () => {
  return (
    <section id="layanan" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Layanan Profesional Kami
          </h2>
          <p className="mt-3 text-slate-600">
            Kami menyediakan solusi menyeluruh untuk semua kebutuhan sistem air Anda.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ title, icon: Icon, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-lg bg-blue-600/10 text-blue-600 grid place-content-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
