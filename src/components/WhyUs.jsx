import React from 'react';
import { Clock, BadgeCheck, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    title: 'Respon Cepat 24/7',
    icon: Clock,
    desc: 'Tim kami siap datang kapan saja untuk menangani darurat pompa air Anda.',
  },
  {
    title: 'Teknisi Ahli & Berpengalaman',
    icon: BadgeCheck,
    desc: 'Dikerjakan oleh teknisi tersertifikasi dengan pengalaman lebih dari 10 tahun.',
  },
  {
    title: 'Garansi Servis & Suku Cadang Asli',
    icon: ShieldCheck,
    desc: 'Kami memberikan garansi dan hanya menggunakan sparepart berkualitas.',
  },
];

const WhyUs = () => {
  return (
    <section id="kenapa" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Kenapa Memilih Prima Pompa Air?
          </h2>
          <p className="mt-3 text-slate-600">
            Keunggulan kami yang membuat Anda merasa tenang dan yakin.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map(({ title, icon: Icon, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="h-12 w-12 rounded-lg bg-blue-600/10 text-blue-600 grid place-content-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
