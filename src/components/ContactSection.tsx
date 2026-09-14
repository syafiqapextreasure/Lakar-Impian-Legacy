import React from 'react';
import { Phone, MessageCircle, Shield, MapPin, User } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { BrandLogo } from './BrandLogo';

export const ContactSection: React.FC = () => {
  return (
    <section id="hubungi" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFFDF8]">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-[#004C4C] via-[#075E54] to-[#0A5C50] text-white rounded-3xl p-8 sm:p-12 lg:p-16 border-2 border-[#C99A2E]/50 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C99A2E]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Col: Brand Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#E0B64B] font-bold text-xs sm:text-sm border border-[#E0B64B]/30">
                <Shield className="w-4 h-4" />
                <span>Saluran Rasmi Lakar Impian Legacy</span>
              </div>

              <h2 className="text-[34px] sm:text-[44px] lg:text-[48px] font-black text-white tracking-tight leading-tight">
                Hubungi Kami
              </h2>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 w-fit">
                <BrandLogo variant="light" size="md" showSubtitle={true} />
              </div>

              <div className="space-y-3 pt-2 text-[17px] sm:text-[18px]">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-[#E0B64B] shrink-0" />
                  <span>
                    Pegawai Dihubungi: <strong className="text-[#E0B64B]">{BUSINESS_INFO.contactPerson}</strong>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#E0B64B] shrink-0" />
                  <span>
                    WhatsApp / Telefon: <strong>{BUSINESS_INFO.phone}</strong>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#E0B64B] shrink-0" />
                  <span>
                    Kawasan Servis: <strong>Negeri Sembilan & Selangor</strong>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-[#E0B64B] shrink-0" />
                  <span>
                    No. Pendaftaran Perniagaan: <strong>{BUSINESS_INFO.registrationNo}</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Col: Two Direct Big Action Buttons */}
            <div className="lg:col-span-5 bg-[#FFFDF8] text-[#202020] rounded-2xl p-7 sm:p-9 shadow-2xl border border-[#C99A2E]/40 space-y-5 text-center">
              <h3 className="text-[22px] sm:text-[24px] font-black text-[#004C4C]">
                Pantas & Mesra Pelanggan
              </h3>

              <p className="text-[16px] text-[#202020]/80">
                Tekan mana-mana butang di bawah untuk berhubung terus dengan Pqah Rosli sekarang.
              </p>

              <div className="space-y-3.5 pt-2">
                {/* Button 1: WhatsApp Pqah */}
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-whatsapp-btn"
                  className="w-full flex items-center justify-center gap-3 bg-[#C99A2E] hover:bg-[#E0B64B] text-[#004C4C] font-extrabold text-[18px] sm:text-[19px] py-4 px-6 rounded-xl shadow-lg transition-transform active:scale-95"
                >
                  <MessageCircle className="w-6 h-6 fill-current" />
                  <span>WhatsApp Pqah</span>
                </a>

                {/* Button 2: Call Sekarang */}
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  id="contact-call-btn"
                  className="w-full flex items-center justify-center gap-3 bg-[#004C4C] hover:bg-[#075E54] text-white font-extrabold text-[18px] sm:text-[19px] py-4 px-6 rounded-xl shadow-md transition-transform active:scale-95 border border-[#004C4C]"
                >
                  <Phone className="w-5 h-5 text-[#E0B64B]" />
                  <span>Call Sekarang</span>
                </a>
              </div>

              <p className="text-xs text-gray-500 pt-2">
                Waktu Respons Pantas • Khidmat Rumah & Pejabat
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
