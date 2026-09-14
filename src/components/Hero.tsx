import React from 'react';
import { ArrowRight, MessageCircle, MapPin, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, IMAGES } from '../data';
import { BrandLogo } from './BrandLogo';

export const Hero: React.FC = () => {
  const chips = [
    'Kabinet Custom',
    'Pemasangan',
    'Drill & Hanging',
    'Rumah & Pejabat',
  ];

  return (
    <section
      id="utama"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#004C4C] via-[#075E54] to-[#0A5C50] text-white"
    >
      {/* Decorative background grid and soft glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E0B64B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#C99A2E]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-[#004C4C]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-7">
            {/* Trust badge & Service Area */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#E0B64B]/40 w-fit">
              <MapPin className="w-4 h-4 text-[#E0B64B]" />
              <span className="text-[15px] sm:text-[16px] font-medium text-white/90">
                Servis Rasmi: <strong className="text-[#E0B64B] font-bold">Negeri Sembilan & Selangor</strong>
              </span>
            </div>

            {/* Brand Logo Highlight on Hero */}
            <div className="p-3 sm:p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 w-fit">
              <BrandLogo variant="light" size="md" showSubtitle={true} />
            </div>

            {/* Main Headlines - strictly matching requirements & accessibility font sizes */}
            <div className="space-y-3">
              <h1
                id="hero-main-title"
                className="text-[36px] sm:text-[44px] md:text-[54px] lg:text-[62px] xl:text-[66px] font-black leading-[1.12] tracking-tight text-white"
              >
                Impian Anda,{' '}
                <span className="text-[#E0B64B] underline decoration-[#C99A2E]/60 decoration-wavy decoration-2">
                  Misi Kami.
                </span>
              </h1>
              <h2 className="text-[22px] sm:text-[26px] md:text-[30px] font-bold text-[#FAF7EF]/95 leading-snug">
                Kabinet Custom & Khidmat Pemasangan Untuk Rumah dan Pejabat
              </h2>
            </div>

            {/* Description */}
            <p className="text-[18px] sm:text-[20px] text-white/90 leading-[1.65] max-w-2xl font-normal">
              Dari reka bentuk kabinet hingga kerja pemasangan, kami membantu menjadikan ruang anda lebih kemas, praktikal dan selesa.
            </p>

            {/* Optional Small Chips */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-black/20 text-[#FAF7EF] text-[15px] sm:text-[16px] font-medium border border-white/15"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#E0B64B]" />
                  {chip}
                </span>
              ))}
            </div>

            {/* CTAs: Large accessible targets for older & mobile users */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              {/* Primary button: Dapatkan Sebut Harga */}
              <a
                href="#sebut-harga"
                id="hero-primary-cta"
                className="inline-flex items-center justify-center gap-3 bg-[#C99A2E] hover:bg-[#E0B64B] text-[#004C4C] font-extrabold text-[18px] sm:text-[19px] px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>Dapatkan Sebut Harga</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              {/* Secondary button: Lihat Hasil Kerja */}
              <a
                href="#projek"
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-[18px] sm:text-[19px] px-7 py-4 rounded-xl border-2 border-white/30 hover:border-white/50 backdrop-blur-sm transition-all text-center"
              >
                <span>Lihat Hasil Kerja</span>
              </a>
            </div>

            {/* Small Trust Line */}
            <div className="flex items-center gap-3 pt-2 text-white/80 text-[15px] sm:text-[16px]">
              <ShieldCheck className="w-5 h-5 text-[#E0B64B] shrink-0" />
              <span>
                Pemasangan kemas & peralatan lengkap. Hubungi <strong>{BUSINESS_INFO.contactPerson}</strong> di{' '}
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E0B64B] underline font-bold hover:text-white"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </span>
            </div>
          </div>

          {/* Right Column: Hero Showcase Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gold border ring */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#C99A2E] to-[#E0B64B] opacity-60 blur-sm transform rotate-1" />

              {/* Card Container with glassmorphic edge */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#E0B64B]/60 bg-[#004C4C]">
                {/* Luxury Kitchen Showcase Image */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden group">
                  <img
                    src={IMAGES.hero}
                    alt="Rekaan kabinet dapur moden mewah, island bar terrazzo dan kemasan kayu Lakar Impian Legacy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Floating Overlay Badge: Rekaan Eksklusif Lakar Design */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004C4C]/90 backdrop-blur-md text-[#E0B64B] border border-[#E0B64B]/40 text-xs sm:text-sm font-bold shadow-md">
                    <Sparkles className="w-4 h-4 text-[#E0B64B]" />
                    <span>Rekaan Eksklusif Lakar Design</span>
                  </div>

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs sm:text-sm text-[#E0B64B] font-semibold uppercase tracking-wider">
                      Kabinet Dapur & Island Bar Mewah
                    </p>
                    <p className="text-base sm:text-lg font-bold leading-snug">
                      Kemasan Kayu Premium, Lampu LED Suam & Island Terrazzo
                    </p>
                  </div>
                </div>

                {/* Floating Glass Stats Bar */}
                <div className="p-4 sm:p-5 bg-[#004C4C]/90 backdrop-blur-md border-t border-[#E0B64B]/30 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/70">Ingin Rekaan Seperti Ini?</p>
                    <p className="text-base sm:text-lg font-extrabold text-[#E0B64B]">Dapatkan Sebut Harga</p>
                  </div>
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#C99A2E] hover:bg-[#E0B64B] text-[#004C4C] font-bold text-sm sm:text-base px-4 py-2 rounded-lg transition-transform active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>{BUSINESS_INFO.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
