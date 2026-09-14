import React from 'react';
import { Check, MessageCircle, Truck, Info, HelpCircle } from 'lucide-react';
import { PACKAGES, BUSINESS_INFO } from '../data';

export const PackagesSection: React.FC = () => {
  return (
    <section id="pakej" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF7EF]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#C99A2E] font-bold text-base sm:text-lg tracking-wider uppercase">
            Pilihan Solusi Tersusun
          </span>
          <h2 className="text-[34px] sm:text-[44px] lg:text-[50px] font-black text-[#004C4C] tracking-tight leading-tight mt-2">
            Pakej Mengikut Keperluan Anda
          </h2>
          <p className="text-[18px] sm:text-[20px] text-[#202020]/80 mt-3">
            Penyelesaian mengikut saiz ruang dan bajet keluarga. Tanpa caj tersembunyi.
          </p>
        </div>

        {/* 4 Solution-based Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 mb-16">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              id={`package-card-${pkg.id}`}
              className="bg-[#FFFDF8] rounded-3xl p-7 border-2 border-[#004C4C]/10 hover:border-[#C99A2E] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-[#004C4C]/10 text-[#004C4C] font-extrabold text-xs tracking-wider uppercase mb-3">
                  Pakej Solusi
                </div>

                <h3 className="text-[22px] sm:text-[24px] font-black text-[#004C4C] group-hover:text-[#075E54]">
                  {pkg.name}
                </h3>

                <p className="text-[15px] sm:text-[16px] text-[#202020]/75 mt-2 min-h-[44px]">
                  {pkg.tagline}
                </p>

                <div className="mt-6 pt-5 border-t border-gray-100 space-y-3">
                  <p className="text-xs font-bold text-[#C99A2E] uppercase tracking-wider">
                    Termasuk Dalam Pakej:
                  </p>
                  {pkg.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-[15px] sm:text-[16px] text-[#202020]/90">
                      <Check className="w-4 h-4 text-[#0A5C50] shrink-0 mt-1 font-bold" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-3 rounded-xl bg-[#FAF7EF] border border-[#004C4C]/10 text-xs text-[#004C4C]">
                  <strong>Sesuai untuk:</strong> {pkg.recommendedFor}
                </div>
              </div>

              {/* Action Button: Hubungi Untuk Sebut Harga */}
              <div className="mt-8 pt-4">
                <a
                  href={`https://wa.me/601126722982?text=${encodeURIComponent(
                    `Assalamualaikum Lakar Impian Legacy. Saya berminat dengan ${pkg.name} untuk rumah saya.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 bg-[#004C4C] group-hover:bg-[#C99A2E] text-white group-hover:text-[#004C4C] font-bold text-[17px] sm:text-[18px] py-3.5 px-4 rounded-xl shadow transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Hubungi Untuk Sebut Harga</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ============================================================ */}
        {/* INSTALLATION PRICING INFO PANEL (From Official Poster) */}
        {/* ============================================================ */}
        <div
          id="harga-pemasangan"
          className="bg-[#004C4C] text-white rounded-3xl p-8 sm:p-10 lg:p-12 border-2 border-[#C99A2E]/50 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle gold decorative glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C99A2E]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Col: Poster Details */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C99A2E]/20 text-[#E0B64B] font-bold text-xs sm:text-sm border border-[#C99A2E]/40">
                <Info className="w-4 h-4" />
                <span>Maklumat Rasmi Upah Pemasangan</span>
              </div>

              <h3 className="text-[28px] sm:text-[36px] font-black text-white leading-snug">
                Panduan Caj & Upah Pemasangan Lakar Design
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                {/* Upah Pemasangan */}
                <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                  <p className="text-xs sm:text-sm text-[#E0B64B] uppercase tracking-wider font-semibold">
                    Kadar Upah
                  </p>
                  <h4 className="text-[22px] sm:text-[24px] font-bold text-white mt-1">
                    Upah Pemasangan
                  </h4>
                  <p className="text-[16px] text-white/90 mt-1">
                    Mengikut jenis item yang hendak dipasang.
                  </p>
                  <p className="text-sm text-[#E0B64B] font-medium mt-2">
                    → Hubungi kami untuk sebut harga segera.
                  </p>
                </div>

                {/* Caj Pengangkutan */}
                <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                  <p className="text-xs sm:text-sm text-[#E0B64B] uppercase tracking-wider font-semibold">
                    Kos Pengangkutan
                  </p>
                  <h4 className="text-[22px] sm:text-[24px] font-bold text-[#E0B64B] mt-1">
                    {BUSINESS_INFO.transportFee}
                  </h4>
                  <p className="text-[16px] text-white/90 mt-1">
                    Caj pengangkutan sekitar kawasan servis.
                  </p>
                  <p className="text-sm text-white/70 italic mt-2">
                    * {BUSINESS_INFO.transportNote}.
                  </p>
                </div>
              </div>

              {/* Important Note (Exact from poster) */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-black/25 border border-white/10">
                <HelpCircle className="w-5 h-5 text-[#E0B64B] shrink-0 mt-0.5" />
                <p className="text-[16px] sm:text-[17px] text-white/90 leading-relaxed font-medium">
                  <strong>Nota Penting:</strong> {BUSINESS_INFO.installationNote}
                </p>
              </div>
            </div>

            {/* Right Col: Quick WhatsApp Action for Pricing */}
            <div className="lg:col-span-4 bg-[#FFFDF8] text-[#004C4C] rounded-2xl p-6 sm:p-8 shadow-xl text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#004C4C]/10 text-[#004C4C] flex items-center justify-center mx-auto">
                <Truck className="w-7 h-7 text-[#004C4C]" />
              </div>

              <h4 className="text-[20px] sm:text-[22px] font-extrabold text-[#004C4C]">
                Semak Upah Pasang Sekarang
              </h4>

              <p className="text-[15px] text-[#202020]/80">
                Hantar gambar item & lokasi rumah anda di Negeri Sembilan atau Selangor. Pqah Rosli akan beri sebut harga terus.
              </p>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#C99A2E] hover:bg-[#E0B64B] text-[#004C4C] font-extrabold text-[17px] sm:text-[18px] py-3.5 px-6 rounded-xl shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>WhatsApp Pqah Rosli</span>
              </a>

              <p className="text-xs text-gray-500">
                Talian WhatsApp: {BUSINESS_INFO.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
