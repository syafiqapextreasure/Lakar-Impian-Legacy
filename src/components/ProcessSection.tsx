import React from 'react';
import { MessageCircle, MapPin, MessageSquare, Calculator, CalendarCheck, ArrowRight } from 'lucide-react';
import { ORDER_STEPS, BUSINESS_INFO } from '../data';

export const ProcessSection: React.FC = () => {
  const getStepIcon = (step: string) => {
    switch (step) {
      case '1': return MessageCircle;
      case '2': return MapPin;
      case '3': return MessageSquare;
      case '4': return Calculator;
      default: return CalendarCheck;
    }
  };

  return (
    <section id="cara-tempahan" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF7EF]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#004C4C]/10 text-[#004C4C] font-semibold text-sm sm:text-base mb-3 border border-[#004C4C]/20">
            <span>Mudah, Cepat & Telus</span>
          </div>
          <h2 className="text-[34px] sm:text-[44px] lg:text-[50px] font-black text-[#004C4C] tracking-tight leading-tight">
            Cara Tempahan
          </h2>
          <p className="text-[18px] sm:text-[20px] text-[#202020]/80 mt-3 leading-relaxed">
            Hanya 5 langkah ringkas untuk memulakan projek kabinet atau khidmat pemasangan anda.
          </p>
        </div>

        {/* 5 Steps Linear / Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
          {ORDER_STEPS.map((item, index) => {
            const Icon = getStepIcon(item.step);
            return (
              <div
                key={item.step}
                id={`order-step-${index}`}
                className="bg-[#FFFDF8] rounded-3xl p-6 sm:p-7 border border-[#004C4C]/12 shadow-md hover:shadow-xl hover:border-[#C99A2E] transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-10 h-10 rounded-full bg-[#004C4C] text-[#E0B64B] font-black text-lg flex items-center justify-center shadow">
                      {item.step}
                    </span>
                    <div className="p-2 rounded-xl bg-[#FAF7EF] text-[#004C4C] group-hover:text-[#C99A2E] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-[20px] sm:text-[21px] font-extrabold text-[#004C4C] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-[15px] sm:text-[16px] text-[#202020]/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-gray-100 flex items-center text-xs font-bold text-[#C99A2E]">
                  <span>Langkah {item.step}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout action banner */}
        <div className="mt-12 text-center">
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#004C4C] hover:bg-[#075E54] text-[#E0B64B] font-extrabold text-[18px] sm:text-[19px] px-8 py-4 rounded-2xl shadow-xl transition-transform active:scale-95"
          >
            <MessageCircle className="w-6 h-6 fill-current text-[#E0B64B]" />
            <span>Mula Langkah 1: WhatsApp Pqah Rosli</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};
