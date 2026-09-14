import React from 'react';
import { MapPin, MessageCircle, CheckCircle, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const KawasanSection: React.FC = () => {
  return (
    <section id="kawasan" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFFDF8]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#004C4C]/10 text-[#004C4C] font-semibold text-sm sm:text-base mb-3 border border-[#004C4C]/20">
            <Navigation className="w-4 h-4 text-[#C99A2E]" />
            <span>Liputan Servis Rasmi</span>
          </div>

          <h2 className="text-[34px] sm:text-[44px] lg:text-[50px] font-black text-[#004C4C] tracking-tight leading-tight">
            Kawasan Servis Kami
          </h2>

          <p className="text-[18px] sm:text-[20px] text-[#202020]/90 mt-3 leading-relaxed font-medium">
            Kami menyediakan servis sekitar <strong>Negeri Sembilan</strong> dan <strong>Selangor</strong>.
          </p>
        </div>

        {/* Two Stylised State Map Silhouettes: Negeri Sembilan & Selangor */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-12">
          {/* State Card 1: Negeri Sembilan */}
          <div
            id="kawasan-negeri-sembilan"
            className="bg-[#004C4C] text-white rounded-3xl p-8 sm:p-10 border-2 border-[#C99A2E]/50 shadow-xl relative overflow-hidden group hover:border-[#E0B64B] transition-all"
          >
            {/* Soft glass & glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C99A2E]/15 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#E0B64B]">
                  LIPUTAN UTAMA 01
                </span>
                <h3 className="text-[28px] sm:text-[34px] font-black text-white mt-1">
                  Negeri Sembilan
                </h3>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-white/10 text-white border border-white/20 text-sm font-bold">
                Aktif Setiap Hari
              </span>
            </div>

            {/* Stylised Map Silhouette Graphic: Negeri Sembilan */}
            <div className="relative h-56 sm:h-64 rounded-2xl bg-black/20 border border-white/15 p-4 flex items-center justify-center overflow-hidden my-6">
              {/* SVG silhouette for Negeri Sembilan with animated pulse pin */}
              <svg
                viewBox="0 0 400 300"
                className="w-full h-full max-h-56 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Stylized contour of Negeri Sembilan (Seremban, Port Dickson, Nilai, Senawang, etc.) */}
                <path
                  d="M 120 70 C 180 50 250 65 300 100 C 330 130 350 170 340 210 C 320 250 260 270 200 260 C 140 250 100 220 80 180 C 60 140 80 90 120 70 Z"
                  fill="#075E54"
                  stroke="#E0B64B"
                  strokeWidth="3"
                />
                <path
                  d="M 140 90 C 190 75 240 85 280 115 C 305 140 315 170 305 200 C 290 230 240 245 190 235 C 145 225 115 200 105 170 C 95 135 110 105 140 90 Z"
                  fill="#004C4C"
                  stroke="#C99A2E"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />

                {/* Animated Pulsing Location Markers */}
                <g className="animate-pulse">
                  <circle cx="210" cy="150" r="16" fill="#E0B64B" opacity="0.3" />
                  <circle cx="210" cy="150" r="8" fill="#E0B64B" />
                  <circle cx="210" cy="150" r="3" fill="#004C4C" />
                </g>

                <g className="animate-pulse" style={{ animationDelay: '500ms' }}>
                  <circle cx="150" cy="180" r="12" fill="#E0B64B" opacity="0.25" />
                  <circle cx="150" cy="180" r="6" fill="#E0B64B" />
                </g>

                <g className="animate-pulse" style={{ animationDelay: '1000ms' }}>
                  <circle cx="260" cy="180" r="12" fill="#E0B64B" opacity="0.25" />
                  <circle cx="260" cy="180" r="6" fill="#E0B64B" />
                </g>

                <text x="210" y="195" fill="#FAF7EF" fontSize="16" fontWeight="bold" textAnchor="middle">
                  Negeri Sembilan
                </text>
              </svg>

              {/* Pin indicator badge */}
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 text-xs font-semibold text-[#E0B64B] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E0B64B]" />
                <span>Pemasangan & Lawatan Tapak</span>
              </div>
            </div>

            <p className="text-[17px] sm:text-[18px] text-white/90 leading-relaxed">
              Khidmat pemasangan kabinet, rak dinding, cermin, dan drill untuk kawasan perumahan dan komersial di Negeri Sembilan.
            </p>
          </div>

          {/* State Card 2: Selangor */}
          <div
            id="kawasan-selangor"
            className="bg-[#004C4C] text-white rounded-3xl p-8 sm:p-10 border-2 border-[#C99A2E]/50 shadow-xl relative overflow-hidden group hover:border-[#E0B64B] transition-all"
          >
            {/* Soft glass & glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C99A2E]/15 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#E0B64B]">
                  LIPUTAN UTAMA 02
                </span>
                <h3 className="text-[28px] sm:text-[34px] font-black text-white mt-1">
                  Selangor
                </h3>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-white/10 text-white border border-white/20 text-sm font-bold">
                Aktif Setiap Hari
              </span>
            </div>

            {/* Stylised Map Silhouette Graphic: Selangor */}
            <div className="relative h-56 sm:h-64 rounded-2xl bg-black/20 border border-white/15 p-4 flex items-center justify-center overflow-hidden my-6">
              <svg
                viewBox="0 0 400 300"
                className="w-full h-full max-h-56 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Stylized contour of Selangor */}
                <path
                  d="M 130 50 C 190 40 250 70 290 110 C 330 150 320 210 280 250 C 230 280 160 260 110 220 C 70 180 80 110 130 50 Z"
                  fill="#075E54"
                  stroke="#E0B64B"
                  strokeWidth="3"
                />
                <path
                  d="M 150 75 C 200 65 245 90 275 125 C 300 160 290 200 255 230 C 215 250 160 235 125 200 C 100 165 110 110 150 75 Z"
                  fill="#004C4C"
                  stroke="#C99A2E"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />

                {/* Animated Pulsing Location Markers */}
                <g className="animate-pulse">
                  <circle cx="210" cy="140" r="16" fill="#E0B64B" opacity="0.3" />
                  <circle cx="210" cy="140" r="8" fill="#E0B64B" />
                  <circle cx="210" cy="140" r="3" fill="#004C4C" />
                </g>

                <g className="animate-pulse" style={{ animationDelay: '600ms' }}>
                  <circle cx="160" cy="170" r="12" fill="#E0B64B" opacity="0.25" />
                  <circle cx="160" cy="170" r="6" fill="#E0B64B" />
                </g>

                <g className="animate-pulse" style={{ animationDelay: '1200ms' }}>
                  <circle cx="250" cy="190" r="12" fill="#E0B64B" opacity="0.25" />
                  <circle cx="250" cy="190" r="6" fill="#E0B64B" />
                </g>

                <text x="210" y="195" fill="#FAF7EF" fontSize="16" fontWeight="bold" textAnchor="middle">
                  Selangor
                </text>
              </svg>

              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 text-xs font-semibold text-[#E0B64B] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E0B64B]" />
                <span>Pemasangan & Lawatan Tapak</span>
              </div>
            </div>

            <p className="text-[17px] sm:text-[18px] text-white/90 leading-relaxed">
              Liputan kerja pemasangan di seluruh Selangor untuk rumah teres, kondominium, apartmen dan premis pejabat.
            </p>
          </div>
        </div>

        {/* Interactive CTA to WhatsApp: Semak Kawasan Anda */}
        <div className="bg-[#FAF7EF] rounded-3xl p-8 sm:p-10 border border-[#004C4C]/15 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="text-left">
            <h4 className="text-[22px] sm:text-[24px] font-black text-[#004C4C]">
              Ingin tahu sama ada kawasan anda termasuk?
            </h4>
            <p className="text-[16px] sm:text-[17px] text-[#202020]/80 mt-1">
              Nyatakan lokasi rumah anda kepada Pqah Rosli untuk semakan segera.
            </p>
          </div>

          <a
            href={`https://wa.me/601126722982?text=${encodeURIComponent(
              'Assalamualaikum Lakar Impian Legacy. Saya ingin semak servis untuk kawasan rumah saya di [Negeri Sembilan / Selangor]. Lokasi saya di:'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            id="semak-kawasan-btn"
            className="inline-flex items-center gap-2.5 bg-[#C99A2E] hover:bg-[#E0B64B] text-[#004C4C] font-extrabold text-[18px] px-8 py-4 rounded-xl shadow-lg transition-transform active:scale-95 shrink-0"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Semak Kawasan Anda</span>
          </a>
        </div>
      </div>
    </section>
  );
};
