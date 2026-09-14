import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show gentle tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const defaultWhatsappMessage = encodeURIComponent(
    'Assalamualaikum Lakar Impian Legacy. Saya ingin bertanya mengenai sebut harga kabinet / khidmat pemasangan.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 pointer-events-auto">
      {/* Speech Bubble Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#FFFDF8] text-[#004C4C] px-4 py-2.5 rounded-2xl shadow-2xl border-2 border-[#C99A2E] animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="text-xs sm:text-sm font-bold leading-tight">
            <span className="block text-[#075E54]">Perlukan sebut harga segera?</span>
            <span className="text-[#C99A2E]">WhatsApp Pqah Rosli sekarang!</span>
          </div>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="p-1 text-gray-400 hover:text-gray-600 rounded-full"
            aria-label="Tutup tip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={`https://wa.me/601126722982?text=${defaultWhatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] transition-all duration-300 transform hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Hubungi Lakar Impian Legacy melalui WhatsApp"
      >
        <MessageCircle className="w-9 h-9 sm:w-10 sm:h-10 fill-current group-hover:scale-105 transition-transform" />

        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
      </a>
    </div>
  );
};
