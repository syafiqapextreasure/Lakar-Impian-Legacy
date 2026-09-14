import React from 'react';
import { Hammer, CheckCircle2, Shield, Wrench } from 'lucide-react';
import { WORKER_HIGHLIGHTS, BUSINESS_INFO } from '../data';

export const WorkerSection: React.FC = () => {
  return (
    <section id="pemasangan-kemas" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#004C4C] text-white relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#C99A2E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#075E54] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#E0B64B] font-bold text-sm sm:text-base mb-3 border border-[#E0B64B]/30">
            <Hammer className="w-4 h-4" />
            <span>Tenaga Kerja Tempatan Berpengalaman</span>
          </div>

          <h2 className="text-[34px] sm:text-[44px] lg:text-[52px] font-black text-white tracking-tight leading-tight">
            Kerja Pemasangan Yang Kemas & Teliti
          </h2>

          <p className="text-[18px] sm:text-[20px] text-white/90 mt-3 leading-relaxed">
            Pasukan kami memakai seragam rasmi Lakar Impian Legacy, dilengkapi alatan drill moden untuk memastikan setiap pemasangan selamat, kukuh dan tidak mengotorkan kediaman anda.
          </p>
        </div>

        {/* Dynamic Editorial Layout with Real Working-Person Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WORKER_HIGHLIGHTS.map((item, index) => (
            <div
              key={item.id}
              id={`worker-highlight-${index}`}
              className="bg-[#FFFDF8] text-[#202020] rounded-3xl overflow-hidden shadow-xl border-2 border-[#C99A2E]/40 flex flex-col group hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Image Container with tag */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black/10">
                <img
                  src={item.image}
                  alt={`Tukang Lakar Impian Legacy: ${item.caption}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#004C4C]/90 backdrop-blur-md text-[#E0B64B] text-xs font-extrabold px-3 py-1 rounded-full border border-[#E0B64B]/30 shadow">
                  {item.tag}
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[22px] sm:text-[24px] font-black text-[#004C4C] mb-2 group-hover:text-[#075E54]">
                    {item.caption}
                  </h3>
                  <p className="text-[15px] sm:text-[16px] text-[#202020]/80 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-[#0A5C50]">
                  <CheckCircle2 className="w-4 h-4 text-[#C99A2E]" />
                  <span>Kemas & Mematuhi SOP</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-[#C99A2E] text-[#004C4C] shrink-0">
              <Shield className="w-8 h-8 font-bold" />
            </div>
            <div>
              <h4 className="text-[20px] sm:text-[22px] font-extrabold text-[#E0B64B]">
                Tiada Masalah Dinding Pecah Atau Senget
              </h4>
              <p className="text-[16px] sm:text-[17px] text-white/90">
                Kami menggunakan waterpass digital/manual dan wall plug gred industri untuk keselamatan maksima anak dan keluarga.
              </p>
            </div>
          </div>

          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#C99A2E] hover:bg-[#E0B64B] text-[#004C4C] font-extrabold text-[17px] sm:text-[18px] px-7 py-3.5 rounded-xl shadow-lg transition-transform active:scale-95 shrink-0"
          >
            <Wrench className="w-5 h-5" />
            <span>Tempah Khidmat Pemasangan</span>
          </a>
        </div>
      </div>
    </section>
  );
};
