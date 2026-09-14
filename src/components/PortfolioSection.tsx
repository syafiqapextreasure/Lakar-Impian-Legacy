import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Eye, MessageCircle } from 'lucide-react';
import { PORTFOLIO_PROJECTS, BUSINESS_INFO } from '../data';
import { PortfolioItem } from '../types';

export const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    'Semua',
    'Kitchen',
    'Cabinet',
    'TV / Feature Wall',
    'Installation',
    'Drill & Hanging',
    'Interior',
  ];

  const filteredProjects = selectedCategory === 'Semua'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase() ||
               (selectedCategory === 'Interior' && (p.category === 'Kitchen' || p.category === 'Cabinet'))
      );

  const activeProject: PortfolioItem | null =
    lightboxIndex !== null ? filteredProjects[lightboxIndex] || null : null;

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < filteredProjects.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredProjects.length - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredProjects.length]);

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev < filteredProjects.length - 1 ? prev + 1 : 0));
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredProjects.length - 1));
    }
  };

  return (
    <section id="projek" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF7EF]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#004C4C]/10 text-[#004C4C] font-semibold text-sm sm:text-base mb-3 border border-[#004C4C]/20">
            <span>Galeri Projek & Pemasangan Sebenar</span>
          </div>

          <h2 className="text-[34px] sm:text-[44px] lg:text-[50px] font-black text-[#004C4C] tracking-tight leading-tight">
            Portfolio Hasil Kerja
          </h2>

          <p className="text-[18px] sm:text-[20px] text-[#202020]/80 mt-3 leading-relaxed">
            Lihat sebahagian projek, pemasangan dan hasil kerja kami di rumah dan pejabat pelanggan.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setLightboxIndex(null);
                }}
                className={`text-[16px] sm:text-[17px] font-bold px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#004C4C] text-white shadow-md scale-105'
                    : 'bg-[#FFFDF8] text-[#004C4C] hover:bg-white border border-[#004C4C]/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry/Grid Portfolio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              id={`portfolio-item-${project.id}`}
              onClick={() => setLightboxIndex(idx)}
              className="bg-[#FFFDF8] rounded-3xl overflow-hidden border border-[#004C4C]/15 shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              {/* Image with zoom on hover */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle glass overlay on hover */}
                <div className="absolute inset-0 bg-[#004C4C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-[#E0B64B] text-[#004C4C] shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3 bg-[#004C4C]/90 backdrop-blur-md text-[#E0B64B] text-xs font-bold px-3 py-1 rounded-full border border-[#E0B64B]/30 shadow">
                  {project.category}
                </div>
              </div>

              {/* Caption Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[20px] sm:text-[21px] font-extrabold text-[#004C4C] group-hover:text-[#075E54] leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-[15px] sm:text-[16px] text-[#202020]/80 mt-2 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#C99A2E]">
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>Klik untuk lihat saiz penuh</span>
                  </span>
                  <span className="text-[#004C4C]">Lakar Design</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeProject && lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
            onClick={() => setLightboxIndex(null)}
          >
            <div
              className="relative max-w-5xl w-full bg-[#004C4C] rounded-3xl overflow-hidden shadow-2xl border border-[#C99A2E]/40"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Header Bar */}
              <div className="p-4 sm:p-5 bg-black/40 backdrop-blur-sm border-b border-white/10 flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#C99A2E] text-[#004C4C]">
                    {activeProject.category}
                  </span>
                  <span className="text-sm sm:text-base text-white/80">
                    Foto {lightboxIndex + 1} daripada {filteredProjects.length}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setLightboxIndex(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Tutup lightbox"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Main Image Frame */}
              <div className="relative max-h-[68vh] overflow-hidden flex items-center justify-center bg-black/50 p-2">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[65vh] w-auto object-contain rounded-xl"
                />

                {/* Prev Button */}
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#C99A2E] text-white hover:text-[#004C4C] transition-all shadow-lg cursor-pointer"
                  aria-label="Foto sebelum"
                >
                  <ChevronLeft className="w-7 h-7" />
                </button>

                {/* Next Button */}
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#C99A2E] text-white hover:text-[#004C4C] transition-all shadow-lg cursor-pointer"
                  aria-label="Foto seterusnya"
                >
                  <ChevronRight className="w-7 h-7" />
                </button>
              </div>

              {/* Bottom Info Bar & WhatsApp Inquire button */}
              <div className="p-6 bg-[#FFFDF8] text-[#202020] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="max-w-2xl">
                  <h4 className="text-[20px] sm:text-[22px] font-black text-[#004C4C]">
                    {activeProject.title}
                  </h4>
                  <p className="text-[15px] sm:text-[16px] text-[#202020]/80 mt-1">
                    {activeProject.description}
                  </p>
                </div>

                <a
                  href={`https://wa.me/601126722982?text=${encodeURIComponent(
                    `Assalamualaikum Lakar Impian Legacy. Saya berminat dengan reka bentuk "${activeProject.title}". Boleh beri sebut harga?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#C99A2E] hover:bg-[#E0B64B] text-[#004C4C] font-extrabold text-[17px] sm:text-[18px] px-6 py-3 rounded-xl shadow transition-transform active:scale-95 shrink-0"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Tanya Projek Ini</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
