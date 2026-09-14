import React from 'react';
import { ShieldCheck, Wrench, Sparkles, Award } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      title: 'Kemas & Selamat',
      desc: 'Pemasangan rapi, berhati-hati dan tapak kerja dibersihkan',
      icon: ShieldCheck,
    },
    {
      title: 'Peralatan Lengkap',
      desc: 'Mesin drill moden, mata drill jubin khas & alat ukur tepat',
      icon: Wrench,
    },
    {
      title: 'Kerja Berkualiti',
      desc: 'Material bermutu, kukuh, tahan lasak & jimat kos',
      icon: Sparkles,
    },
    {
      title: 'Profesional',
      desc: 'Syarikat berdaftar rasmi MA0307747-A berpengalaman',
      icon: Award,
    },
  ];

  return (
    <section id="trust-strip" className="relative -mt-6 sm:-mt-8 z-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#FFFDF8] rounded-2xl shadow-xl border border-[#C99A2E]/30 p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {trustItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                id={`trust-item-${index}`}
                className="flex items-start gap-4 p-3 rounded-xl hover:bg-[#FAF7EF] transition-colors"
              >
                <div className="p-3 rounded-xl bg-[#004C4C]/10 text-[#004C4C] shrink-0 border border-[#004C4C]/20">
                  <IconComponent className="w-7 h-7 text-[#004C4C]" />
                </div>
                <div>
                  <h3 className="text-[19px] sm:text-[20px] font-bold text-[#004C4C] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[15px] sm:text-[16px] text-[#202020]/80 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
