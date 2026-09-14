import React from 'react';
import { CheckCircle, ArrowRight, Shield, Award, Sparkles, Users, Wrench } from 'lucide-react';
import { BUSINESS_INFO, TIMELINE_STEPS, IMAGES } from '../data';
import { BrandLogo } from './BrandLogo';

export const AboutSection: React.FC = () => {
  return (
    <section id="tentang-kami" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF7EF]">
      <div className="max-w-7xl mx-auto">
        {/* Top Header Card */}
        <div className="bg-[#FFFDF8] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#004C4C]/10 shadow-lg relative overflow-hidden">
          {/* Subtle watermark background decorative accent */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 opacity-5 pointer-events-none">
            <BrandLogo variant="dark" size="xl" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Col: Brand Presentation */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#004C4C]/10 border border-[#004C4C]/20 text-[#004C4C] font-semibold text-sm sm:text-base">
                  <Shield className="w-4 h-4 text-[#C99A2E]" />
                  <span>Perniagaan Berdaftar: <strong>{BUSINESS_INFO.registrationNo}</strong></span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C99A2E]/15 border border-[#C99A2E]/30 text-[#004C4C] font-bold text-xs sm:text-sm">
                  <span>Negeri Sembilan & Selangor</span>
                </div>
              </div>

              {/* Full Official Brand Graphic Showcase */}
              <div className="p-4 sm:p-5 bg-white rounded-2xl border-2 border-[#C99A2E]/30 shadow-sm max-w-md">
                <BrandLogo variant="full-graphic" size="lg" />
              </div>

              <h2 className="text-[34px] sm:text-[42px] lg:text-[48px] font-black text-[#004C4C] tracking-tight leading-tight">
                Kenali Lakar Impian Legacy
              </h2>

              <p className="text-[18px] sm:text-[20px] text-[#202020]/90 leading-[1.75]">
                Lakar Impian Legacy menyediakan reka bentuk, pembuatan dan pemasangan kabinet custom serta pelbagai perabot mengikut keperluan pelanggan. Setiap projek diberi perhatian daripada ukuran ruang, pemilihan material, reka bentuk dan kemasan hingga pemasangan.
              </p>

              {/* Mottos Pill Display */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <div className="flex items-center gap-2.5 bg-[#004C4C] text-white px-5 py-3 rounded-xl border border-[#C99A2E]/40 shadow-sm">
                  <Sparkles className="w-5 h-5 text-[#E0B64B] shrink-0" />
                  <div>
                    <p className="text-xs text-[#E0B64B] uppercase tracking-wider font-semibold">Moto Kami</p>
                    <p className="text-[17px] sm:text-[18px] font-bold">"{BUSINESS_INFO.motto}"</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 bg-[#FFFDF8] text-[#004C4C] px-5 py-3 rounded-xl border-2 border-[#C99A2E] shadow-sm">
                  <Award className="w-5 h-5 text-[#C99A2E] shrink-0" />
                  <div>
                    <p className="text-xs text-[#C99A2E] uppercase tracking-wider font-semibold">Prinsip Kerja</p>
                    <p className="text-[17px] sm:text-[18px] font-bold text-[#004C4C]">
                      "{BUSINESS_INFO.secondaryMotto}"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Quick Service Summary Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#004C4C] to-[#0A5C50] text-white rounded-2xl p-7 sm:p-9 shadow-xl border border-[#C99A2E]/30 space-y-5">
              <h3 className="text-[22px] sm:text-[24px] font-extrabold text-[#E0B64B]">
                Komitmen Pertukangan Kami
              </h3>

              <ul className="space-y-3.5 text-[17px] sm:text-[18px]">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#E0B64B] shrink-0 mt-1" />
                  <span>Ukuran tepat & rekaan sesuai mengikut luas dinding.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#E0B64B] shrink-0 mt-1" />
                  <span>Kombinasi kabinet dapur, feature wall, dan divider.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#E0B64B] shrink-0 mt-1" />
                  <span>Peralatan tebuk lubang jubin bilik air selamat & kemas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#E0B64B] shrink-0 mt-1" />
                  <span>Liputan aktif di <strong>Negeri Sembilan & Selangor</strong>.</span>
                </li>
              </ul>

              <div className="pt-3 border-t border-white/20">
                <a
                  href="#sebut-harga"
                  className="inline-flex items-center gap-2 text-[#E0B64B] hover:text-white font-bold text-[18px] group transition-colors"
                >
                  <span>Bincang projek dengan Pqah Rosli</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Real Team & Workshop Visual Gallery Row */}
          <div className="mt-10 pt-8 border-t border-[#004C4C]/10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-md border-2 border-[#C99A2E]/30 group bg-[#004C4C]">
              <img
                src={IMAGES.workerWorkshop}
                alt="Tukang Lakar Impian Legacy di bengkel pertukangan"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-3 left-3 bg-[#004C4C]/90 text-[#E0B64B] text-xs font-bold px-3 py-1 rounded-full border border-[#E0B64B]/40 flex items-center gap-1.5 shadow">
                <Wrench className="w-3.5 h-3.5" />
                <span>Bengkel Fabrikasi Sendiri</span>
              </div>
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <p className="text-xs text-[#E0B64B] font-semibold uppercase tracking-wider">Pemotongan & Kemasan Tepi</p>
                <p className="text-base font-bold leading-snug">Kawalan Kualiti Rapi Sebelum Pemasangan</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-md border-2 border-[#C99A2E]/30 group bg-[#004C4C]">
              <img
                src={IMAGES.workerTeam}
                alt="Pasukan pemasang tempatan Lakar Impian Legacy di lokasi kerja"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-3 left-3 bg-[#004C4C]/90 text-[#E0B64B] text-xs font-bold px-3 py-1 rounded-full border border-[#E0B64B]/40 flex items-center gap-1.5 shadow">
                <Users className="w-3.5 h-3.5" />
                <span>Pasukan Pemasangan Tempatan</span>
              </div>
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <p className="text-xs text-[#E0B64B] font-semibold uppercase tracking-wider">Negeri Sembilan & Selangor</p>
                <p className="text-base font-bold leading-snug">Kerjasama Pemasangan Selamat & Kemas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Timeline (6 Steps) */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#C99A2E] font-bold text-base sm:text-lg tracking-wider uppercase">
              Aliran Kerja Teratur
            </span>
            <h3 className="text-[30px] sm:text-[36px] font-black text-[#004C4C] mt-2">
              Proses Dari A Sampai Siap Dipasang
            </h3>
            <p className="text-[17px] sm:text-[18px] text-[#202020]/80 mt-2">
              Setiap peringkat dilaksanakan secara berstruktur agar hasil kerja memuaskan hati anda.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TIMELINE_STEPS.map((item, index) => (
              <div
                key={item.step}
                id={`timeline-step-${index}`}
                className="bg-[#FFFDF8] rounded-2xl p-6 sm:p-7 border border-[#004C4C]/10 shadow-md hover:shadow-xl hover:border-[#C99A2E]/50 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold tracking-widest text-[#C99A2E] bg-[#C99A2E]/10 px-3 py-1 rounded-full">
                      LANGKAH {item.step}
                    </span>
                    <span className="text-2xl font-black text-[#004C4C]/30 group-hover:text-[#004C4C] transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h4 className="text-[20px] sm:text-[22px] font-bold text-[#004C4C] mb-2 group-hover:text-[#075E54]">
                    {item.title}
                  </h4>

                  <p className="text-[16px] sm:text-[17px] text-[#202020]/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-[#0A5C50] font-medium">
                  <span>Lakar Impian Legacy</span>
                  <span className="text-[#C99A2E] font-bold">✓ Terjamin</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
