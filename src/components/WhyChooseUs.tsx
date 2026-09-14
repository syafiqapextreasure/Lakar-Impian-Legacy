import React from 'react';
import { ShieldCheck, Wrench, Ruler, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_US_CARDS } from '../data';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return ShieldCheck;
      case 'Wrench': return Wrench;
      case 'Ruler': return Ruler;
      default: return Sparkles;
    }
  };

  return (
    <section id="kenapa-pilih-kami" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#004C4C] text-white relative overflow-hidden">
      {/* Decorative gradient elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#075E54]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#E0B64B] font-bold text-base sm:text-lg tracking-wider uppercase">
            Kelebihan Perkhidmatan
          </span>
          <h2 className="text-[34px] sm:text-[44px] lg:text-[50px] font-black text-white tracking-tight leading-tight mt-2">
            Kenapa Pilih Kami?
          </h2>
          <p className="text-[18px] sm:text-[20px] text-white/90 mt-3 leading-relaxed">
            Keutamaan kami adalah kepuasan pemilik rumah dan pejabat melalui mutu pertukangan yang selamat, kemas, dan telus.
          </p>
        </div>

        {/* 4 Large Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {WHY_CHOOSE_US_CARDS.map((card, index) => {
            const Icon = getIcon(card.icon);
            return (
              <div
                key={card.title}
                id={`why-us-card-${index}`}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-[#E0B64B]/30 hover:border-[#E0B64B] shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-[#C99A2E] text-[#004C4C] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 font-black" />
                  </div>

                  <h3 className="text-[22px] sm:text-[24px] font-extrabold text-[#FAF7EF] group-hover:text-[#E0B64B] transition-colors leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-[17px] sm:text-[18px] text-white/85 mt-3 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/15 flex items-center justify-between text-xs text-[#E0B64B] font-semibold">
                  <span>Lakar Impian Legacy</span>
                  <span>Jaminan Kualiti</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
