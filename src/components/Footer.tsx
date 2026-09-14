import React from 'react';
import { Phone, MessageCircle, MapPin, Shield, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-[#003838] text-white pt-16 pb-12 border-t-2 border-[#C99A2E]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo variant="light" size="md" showSubtitle={true} />

            <p className="text-[16px] sm:text-[17px] text-white/80 leading-relaxed max-w-sm pt-2">
              Pakar reka bentuk kabinet custom, perabot berkualiti dan khidmat pemasangan kemas untuk kediaman serta ruang pejabat anda.
            </p>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-md bg-white/10 text-xs font-semibold text-[#E0B64B] border border-white/15">
                Perniagaan Berdaftar: {BUSINESS_INFO.registrationNo}
              </span>
            </div>
          </div>

          {/* Service Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[18px] sm:text-[19px] font-bold text-[#E0B64B] uppercase tracking-wider">
              Khidmat Utama
            </h4>
            <ul className="space-y-2 text-[15px] sm:text-[16px] text-white/80">
              <li>Kabinet Dapur & Tabletop</li>
              <li>TV Cabinet & Feature Wall</li>
              <li>Kabinet Kasut & Display</li>
              <li>Island Table & Bar Counter</li>
              <li>Sliding Door Aluminium</li>
              <li>Pemasangan & Drill Dinding</li>
            </ul>
          </div>

          {/* Contact & Coverage Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-[18px] sm:text-[19px] font-bold text-[#E0B64B] uppercase tracking-wider">
              Maklumat Perhubungan
            </h4>

            <div className="space-y-2.5 text-[15px] sm:text-[16px] text-white/90">
              <div className="flex items-center gap-2.5">
                <span className="text-white/60">Pegawai:</span>
                <strong className="text-white">{BUSINESS_INFO.contactPerson}</strong>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E0B64B] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="hover:text-[#E0B64B] transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#E0B64B] shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E0B64B] transition-colors underline"
                >
                  WhatsApp: {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#E0B64B] shrink-0" />
                <span>Liputan: <strong>Negeri Sembilan & Selangor</strong></span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C99A2E] hover:bg-[#E0B64B] text-[#004C4C] font-bold text-sm px-5 py-2.5 rounded-lg shadow transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Pqah Rosli</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white/60 text-center sm:text-left">
          <p>
            © {currentYear} <strong>LAKAR IMPIAN LEGACY</strong> (MA0307747-A). Hak cipta terpelihara.
          </p>
          <div className="flex items-center gap-1 text-white/70">
            <span>Impian Anda Misi Kami</span>
            <span>•</span>
            <span>Lakar Design</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
