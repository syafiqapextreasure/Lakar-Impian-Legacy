import React, { useState } from 'react';
import {
  Utensils,
  Layers,
  Tv,
  Wine,
  Maximize,
  Compass,
  DoorClosed,
  Check,
  Hammer,
  Image as ImageIcon,
  Clock,
  Bath,
  Wrench,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { CABINETRY_SERVICES, INSTALLATION_SERVICES, BUSINESS_INFO } from '../data';

export const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'cabinet' | 'installation'>('all');

  const getCabinetIcon = (id: string) => {
    switch (id) {
      case 'kitchen-cabinet': return Utensils;
      case 'shoe-rack': return Layers;
      case 'display-cabinet': return Sparkles;
      case 'tv-cabinet': return Tv;
      case 'bar-counter': return Wine;
      case 'fluted-panel': return Maximize;
      case 'mirror': return Compass;
      case 'sliding-door': return DoorClosed;
      case 'tabletop': return Layers;
      default: return Utensils;
    }
  };

  const getInstallIcon = (id: string) => {
    switch (id) {
      case 'frame-mirror': return ImageIcon;
      case 'clock-decor': return Clock;
      case 'bathroom-accessories': return Bath;
      case 'tv-wall-bracket': return Tv;
      case 'drill-hanging': return Hammer;
      default: return Wrench;
    }
  };

  return (
    <section id="servis" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFFDF8]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title & Lead */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#004C4C]/10 text-[#004C4C] font-semibold text-sm sm:text-base mb-3 border border-[#004C4C]/20">
            <span>Kepakaran Pertukangan & Pemasangan</span>
          </div>
          <h2 className="text-[34px] sm:text-[44px] lg:text-[50px] font-black text-[#004C4C] tracking-tight leading-tight">
            Servis Kami
          </h2>
          <p className="text-[18px] sm:text-[20px] text-[#202020]/80 mt-3 leading-relaxed">
            Dua kategori perkhidmatan utama untuk menyelesaikan keperluan perabot kustom dan pemasangan barangan di kediaman serta pejabat anda.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`text-[17px] sm:text-[18px] font-bold px-6 py-3 rounded-xl transition-all ${
                activeTab === 'all'
                  ? 'bg-[#004C4C] text-white shadow-md'
                  : 'bg-[#FAF7EF] text-[#004C4C] hover:bg-[#FAF7EF]/80 border border-gray-200'
              }`}
            >
              Semua Servis
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('cabinet')}
              className={`text-[17px] sm:text-[18px] font-bold px-6 py-3 rounded-xl transition-all ${
                activeTab === 'cabinet'
                  ? 'bg-[#004C4C] text-white shadow-md'
                  : 'bg-[#FAF7EF] text-[#004C4C] hover:bg-[#FAF7EF]/80 border border-gray-200'
              }`}
            >
              1. Kabinet & Reka Bentuk
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('installation')}
              className={`text-[17px] sm:text-[18px] font-bold px-6 py-3 rounded-xl transition-all ${
                activeTab === 'installation'
                  ? 'bg-[#004C4C] text-white shadow-md'
                  : 'bg-[#FAF7EF] text-[#004C4C] hover:bg-[#FAF7EF]/80 border border-gray-200'
              }`}
            >
              2. Khidmat Pemasangan (Drill)
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* KATEGORI 1: KABINET & REKA BENTUK */}
        {/* ============================================================ */}
        {(activeTab === 'all' || activeTab === 'cabinet') && (
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-8 border-b-2 border-[#C99A2E]/30 gap-4">
              <div>
                <span className="text-sm font-extrabold uppercase tracking-widest text-[#C99A2E]">
                  KATEGORI 1
                </span>
                <h3 className="text-[26px] sm:text-[32px] font-extrabold text-[#004C4C]">
                  Kabinet & Reka Bentuk Custom
                </h3>
              </div>
              <span className="text-[16px] sm:text-[17px] text-[#0A5C50] font-medium bg-[#004C4C]/10 px-4 py-2 rounded-xl self-start sm:self-auto">
                Ukuran Tepat • Material Berkualiti
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {CABINETRY_SERVICES.map((service) => {
                const Icon = getCabinetIcon(service.id);
                return (
                  <div
                    key={service.id}
                    id={`service-card-${service.id}`}
                    className="bg-[#FAF7EF] rounded-2xl p-7 border border-[#004C4C]/12 hover:border-[#C99A2E] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3.5 rounded-xl bg-[#004C4C] text-[#E0B64B] group-hover:bg-[#075E54] transition-colors shadow-sm">
                          <Icon className="w-6 h-6" />
                        </div>
                        {service.badge && (
                          <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#C99A2E]/20 text-[#004C4C] border border-[#C99A2E]/30">
                            {service.badge}
                          </span>
                        )}
                      </div>

                      <h4 className="text-[21px] sm:text-[22px] font-bold text-[#004C4C] mb-2 group-hover:text-[#075E54]">
                        {service.title}
                      </h4>

                      <p className="text-[16px] sm:text-[17px] text-[#202020]/80 leading-relaxed mb-5">
                        {service.description}
                      </p>

                      {service.features && (
                        <div className="space-y-2 pt-2 border-t border-black/5">
                          {service.features.map((feat) => (
                            <div key={feat} className="flex items-start gap-2 text-[14px] sm:text-[15px] text-[#0A5C50]">
                              <Check className="w-4 h-4 text-[#C99A2E] shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <a
                        href="#sebut-harga"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#004C4C] hover:text-[#C99A2E] group-hover:translate-x-1 transition-all"
                      >
                        <span>Tanya Pqah Rosli</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* KATEGORI 2: KHIDMAT PEMASANGAN (DRILL & HANGING) */}
        {/* ============================================================ */}
        {(activeTab === 'all' || activeTab === 'installation') && (
          <div>
            <div className="bg-gradient-to-r from-[#004C4C] to-[#0A5C50] text-white rounded-3xl p-8 sm:p-10 mb-10 shadow-lg border border-[#C99A2E]/40">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#E0B64B]">
                    KATEGORI 2 • POSTER PEMASANGAN RASMI
                  </span>
                  <h3 className="text-[28px] sm:text-[36px] font-black text-white mt-1">
                    Khidmat Pemasangan Rumah & Pejabat
                  </h3>
                  <p className="text-[18px] sm:text-[20px] text-white/90 mt-2 max-w-2xl font-semibold">
                    “Kami bantu pasang & drill untuk rumah dan pejabat anda.”
                  </p>
                </div>

                <a
                  href="#harga-pemasangan"
                  className="inline-flex items-center gap-2 bg-[#C99A2E] hover:bg-[#E0B64B] text-[#004C4C] font-extrabold text-[17px] sm:text-[18px] px-6 py-3.5 rounded-xl shadow transition-all shrink-0"
                >
                  <Hammer className="w-5 h-5" />
                  <span>Lihat Maklumat Upah</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {INSTALLATION_SERVICES.map((service) => {
                const Icon = getInstallIcon(service.id);
                return (
                  <div
                    key={service.id}
                    id={`install-service-${service.id}`}
                    className="bg-[#FAF7EF] rounded-2xl p-7 border border-[#004C4C]/12 hover:border-[#C99A2E] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3.5 rounded-xl bg-[#C99A2E] text-[#004C4C] group-hover:bg-[#E0B64B] transition-colors shadow-sm">
                          <Icon className="w-6 h-6" />
                        </div>
                        {service.badge && (
                          <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#004C4C]/10 text-[#004C4C] border border-[#004C4C]/20">
                            {service.badge}
                          </span>
                        )}
                      </div>

                      <h4 className="text-[21px] sm:text-[22px] font-bold text-[#004C4C] mb-2 group-hover:text-[#075E54]">
                        {service.title}
                      </h4>

                      <p className="text-[16px] sm:text-[17px] text-[#202020]/80 leading-relaxed mb-4">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                      <span className="text-xs text-[#0A5C50] font-semibold">
                        Peralatan drill disediakan
                      </span>
                      <a
                        href="#sebut-harga"
                        className="text-sm font-bold text-[#004C4C] hover:text-[#C99A2E] flex items-center gap-1"
                      >
                        <span>Tempah</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
