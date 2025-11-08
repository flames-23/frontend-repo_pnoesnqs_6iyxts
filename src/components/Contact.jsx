import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="kontak" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">Hubungi Kami</h2>
          <p className="mt-3 text-slate-600">
            Siap melayani kebutuhan Anda kapan saja. Klik WhatsApp untuk konsultasi langsung.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="https://wa.me/6281212345678?text=Halo%20Prima%20Pompa%20Air%2C%20saya%20butuh%20bantuan%20servis%20pompa."
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-green-500/10 text-green-600 grid place-content-center">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Nomor WhatsApp</p>
                <p className="text-lg font-semibold text-slate-900">0812-1234-5678</p>
                <p className="text-sm text-green-600 font-medium mt-1">Klik untuk chat</p>
              </div>
            </div>
          </a>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-blue-600/10 text-blue-600 grid place-content-center">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Area Layanan</p>
                <p className="text-lg font-semibold text-slate-900">Jakarta, Bogor, Depok, Tangerang, Bekasi</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-blue-600/10 text-blue-600 grid place-content-center">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Jam Operasional</p>
                <p className="text-lg font-semibold text-slate-900">Senin - Minggu: 24 Jam</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://wa.me/6281212345678?text=Halo%20Prima%20Pompa%20Air%2C%20saya%20butuh%20bantuan%20servis%20pompa."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-orange-500 px-8 py-3 text-white text-base font-semibold shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
          >
            Chat WhatsApp Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
