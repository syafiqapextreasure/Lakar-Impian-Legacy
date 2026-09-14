import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_INFO } from '../data';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Utama', href: '#utama' },
    { label: 'Servis', href: '#servis' },
    { label: 'Projek', href: '#projek' },
    { label: 'Kawasan', href: '#kawasan' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#004C4C]/92 backdrop-blur-md shadow-lg shadow-black/10 border-b border-[#C99A2E]/30 py-2.5 sm:py-3'
          : 'bg-[#004C4C]/80 backdrop-blur-sm border-b border-[#C99A2E]/20 py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#utama"
          id="nav-logo-link"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0B64B] rounded-lg"
          aria-label="Lakar Impian Legacy Laman Utama"
        >
          <BrandLogo variant="full-graphic" size="sm" showSubtitle={false} />
        </a>

        {/* Desktop Navigation: Exactly 4 links + 1 CTA button */}
        <nav
          id="desktop-nav"
          className="hidden md:flex items-center gap-8 lg:gap-10"
          aria-label="Navigasi Utama"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white hover:text-[#E0B64B] font-semibold text-[17px] lg:text-[18px] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E0B64B] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}

          {/* Direct Phone / WhatsApp quick link */}
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-whatsapp-cta"
            className="inline-flex items-center gap-2.5 bg-[#C99A2E] hover:bg-[#E0B64B] text-[#004C4C] font-bold text-[17px] lg:text-[18px] px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>WhatsApp Kami</span>
          </a>
        </nav>

        {/* Mobile Action Buttons: WhatsApp shortcut + Hamburger button */}
        <div className="flex md:hidden items-center gap-2 sm:gap-3">
          {/* Quick WhatsApp Shortcut for mobile users */}
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="mobile-whatsapp-btn"
            className="inline-flex items-center justify-center p-2.5 rounded-full bg-[#C99A2E] text-[#004C4C] font-bold shadow hover:bg-[#E0B64B]"
            aria-label="WhatsApp Pqah Rosli"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
          </a>

          {/* Quick Call Button */}
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            id="mobile-call-btn"
            className="inline-flex items-center justify-center p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/20"
            aria-label="Hubungi Telefon Lakar Impian Legacy"
          >
            <Phone className="w-5 h-5" />
          </a>

          {/* Hamburger Menu Toggle */}
          <button
            type="button"
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 border border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0B64B]"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
          >
            {isOpen ? <X className="w-6 h-6 text-[#E0B64B]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation (Glassmorphism) */}
      {isOpen && (
        <div
          id="mobile-nav"
          className="md:hidden bg-[#004C4C]/95 backdrop-blur-xl border-b border-[#C99A2E]/40 px-6 pt-5 pb-8 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="text-white hover:text-[#E0B64B] font-semibold text-xl py-2.5 border-b border-white/10 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[#C99A2E] text-sm">→</span>
              </a>
            ))}
          </div>

          <div className="pt-2 space-y-3">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="w-full flex items-center justify-center gap-3 bg-[#C99A2E] hover:bg-[#E0B64B] text-[#004C4C] font-bold text-lg py-3.5 px-6 rounded-xl shadow-md transition-colors"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>WhatsApp Kami (Pqah Rosli)</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              onClick={handleLinkClick}
              className="w-full flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-medium text-lg py-3 px-6 rounded-xl border border-white/20"
            >
              <Phone className="w-5 h-5 text-[#E0B64B]" />
              <span>Telefon: {BUSINESS_INFO.phone}</span>
            </a>
          </div>

          <div className="pt-3 text-center border-t border-white/10">
            <p className="text-white/70 text-sm">
              Servis: <span className="text-white font-semibold">Negeri Sembilan & Selangor</span>
            </p>
            <p className="text-[#E0B64B] text-xs mt-1">No. Pendaftaran: {BUSINESS_INFO.registrationNo}</p>
          </div>
        </div>
      )}
    </header>
  );
};
