import React, { useState } from 'react';
import { MessageCircle, Send, Copy, Check, Sparkles, MapPin, User, Phone, Layers, DollarSign } from 'lucide-react';
import { BUSINESS_INFO, SERVICE_OPTIONS } from '../data';

export const WhatsAppEnquiry: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('Negeri Sembilan');
  const [service, setService] = useState('Kitchen Cabinet');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  // Construct official prefilled message matching prompt requirement
  const generatedMessage = `Assalamualaikum Lakar Impian Legacy.

Saya ingin bertanya mengenai servis.

Nama: ${name.trim() || '[Nama Pelanggan]'}
No. Telefon: ${phone.trim() || '[No. Telefon]'}
Kawasan: ${area}
Jenis Servis: ${service}
Anggaran Bajet: ${budget.trim() || 'Mengikut cadangan/sebut harga'}
Mesej: ${message.trim() || 'Berminat untuk dapatkan sebut harga dan cadangan rekaan.'}

Saya boleh hantar gambar ruang / item untuk rujukan.`;

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedText = encodeURIComponent(generatedMessage);
    const url = `https://wa.me/601126722982?text=${encodedText}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="sebut-harga" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF7EF] relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#004C4C]/10 text-[#004C4C] font-semibold text-sm sm:text-base mb-3 border border-[#004C4C]/20">
            <Sparkles className="w-4 h-4 text-[#C99A2E]" />
            <span>Sebut Harga Segera Melalui WhatsApp</span>
          </div>

          <h2 className="text-[34px] sm:text-[44px] lg:text-[48px] font-black text-[#004C4C] tracking-tight leading-tight">
            Ada Kerja Yang Nak Dipasang?
          </h2>

          <h3 className="text-[20px] sm:text-[24px] font-bold text-[#075E54] mt-1">
            Nak Buat Kabinet Untuk Rumah Anda?
          </h3>

          <p className="text-[18px] sm:text-[19px] text-[#202020]/85 mt-3 leading-relaxed">
            Hantar gambar ruang atau barang melalui WhatsApp. Beritahu lokasi dan jenis kerja yang diperlukan.
          </p>
        </div>

        {/* Translucent Glassmorphism WhatsApp Enquiry Panel */}
        <div className="bg-[#FFFDF8] rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-[#C99A2E]/40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C99A2E]/10 rounded-full blur-3xl pointer-events-none" />

          <form onSubmit={handleSendToWhatsApp} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Nama Field */}
              <div>
                <label
                  htmlFor="enquiry-name"
                  className="block text-[17px] sm:text-[18px] font-bold text-[#004C4C] mb-2"
                >
                  Nama Anda <span className="text-[#C99A2E]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#004C4C]/60">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    id="enquiry-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Encik Ahmad / Puan Siti"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#004C4C] focus:ring-2 focus:ring-[#004C4C]/20 bg-white text-[17px] sm:text-[18px] text-[#202020] transition-colors"
                  />
                </div>
              </div>

              {/* No Telefon Field */}
              <div>
                <label
                  htmlFor="enquiry-phone"
                  className="block text-[17px] sm:text-[18px] font-bold text-[#004C4C] mb-2"
                >
                  No. Telefon / WhatsApp
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#004C4C]/60">
                    <Phone className="w-5 h-5" />
                  </div>
                  <input
                    type="tel"
                    id="enquiry-phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Contoh: 012-345 6789"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#004C4C] focus:ring-2 focus:ring-[#004C4C]/20 bg-white text-[17px] sm:text-[18px] text-[#202020] transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Kawasan Field (Dropdown: Negeri Sembilan, Selangor) */}
              <div>
                <label
                  htmlFor="enquiry-area"
                  className="block text-[17px] sm:text-[18px] font-bold text-[#004C4C] mb-2"
                >
                  Kawasan Rumah / Pejabat <span className="text-[#C99A2E]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#004C4C]/60">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <select
                    id="enquiry-area"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full pl-12 pr-10 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#004C4C] focus:ring-2 focus:ring-[#004C4C]/20 bg-white text-[17px] sm:text-[18px] text-[#202020] transition-colors cursor-pointer appearance-none"
                  >
                    <option value="Negeri Sembilan">Negeri Sembilan</option>
                    <option value="Selangor">Selangor</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-500">
                    ▼
                  </div>
                </div>
              </div>

              {/* Jenis Servis Field (Dropdown with all options) */}
              <div>
                <label
                  htmlFor="enquiry-service"
                  className="block text-[17px] sm:text-[18px] font-bold text-[#004C4C] mb-2"
                >
                  Jenis Servis Yang Diperlukan <span className="text-[#C99A2E]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#004C4C]/60">
                    <Layers className="w-5 h-5" />
                  </div>
                  <select
                    id="enquiry-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full pl-12 pr-10 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#004C4C] focus:ring-2 focus:ring-[#004C4C]/20 bg-white text-[17px] sm:text-[18px] text-[#202020] transition-colors cursor-pointer appearance-none"
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-500">
                    ▼
                  </div>
                </div>
              </div>
            </div>

            {/* Optional: Anggaran Bajet */}
            <div>
              <label
                htmlFor="enquiry-budget"
                className="block text-[17px] sm:text-[18px] font-bold text-[#004C4C] mb-2"
              >
                Anggaran Bajet <span className="text-xs text-gray-500 font-normal">(Pilihan / Boleh tinggal kosong)</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#004C4C]/60">
                  <DollarSign className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  id="enquiry-budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="Contoh: RM1,000 – RM3,000 / Mengikut sebut harga"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#004C4C] focus:ring-2 focus:ring-[#004C4C]/20 bg-white text-[17px] sm:text-[18px] text-[#202020] transition-colors"
                />
              </div>
            </div>

            {/* Mesej Field */}
            <div>
              <label
                htmlFor="enquiry-message"
                className="block text-[17px] sm:text-[18px] font-bold text-[#004C4C] mb-2"
              >
                Mesej / Maklumat Tambahan
              </label>
              <textarea
                id="enquiry-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Contoh: Saya ingin pasang cermin bilik air dan buat kabinet kasut 4 tingkat. Ada gambar ruang untuk ditunjukkan."
                className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-[#004C4C] focus:ring-2 focus:ring-[#004C4C]/20 bg-white text-[17px] sm:text-[18px] text-[#202020] transition-colors"
              />
            </div>

            {/* Live Message Preview Box */}
            <div className="p-4 rounded-2xl bg-[#004C4C]/5 border border-[#004C4C]/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#004C4C] uppercase tracking-wider">
                  Pratonton Mesej WhatsApp Yang Dihantar:
                </span>
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C99A2E] hover:text-[#004C4C] bg-white px-2.5 py-1 rounded-md border border-gray-200"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Tersalin!' : 'Salin Teks'}</span>
                </button>
              </div>
              <pre className="text-xs sm:text-sm text-[#202020]/90 whitespace-pre-wrap font-sans bg-white p-3 rounded-lg border border-gray-100 max-h-36 overflow-y-auto">
                {generatedMessage}
              </pre>
            </div>

            {/* Main Submit CTA: Hantar ke WhatsApp */}
            <div className="pt-2">
              <button
                type="submit"
                id="whatsapp-enquiry-submit-btn"
                className="w-full flex items-center justify-center gap-3 bg-[#004C4C] hover:bg-[#075E54] text-[#E0B64B] hover:text-white font-extrabold text-[19px] sm:text-[21px] py-4 sm:py-5 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-98 cursor-pointer"
              >
                <MessageCircle className="w-7 h-7 fill-current" />
                <span>Hantar ke WhatsApp Pqah Rosli</span>
                <Send className="w-5 h-5" />
              </button>

              <p className="text-center text-sm text-[#202020]/75 mt-3">
                Nombor WhatsApp Rasmi: <strong>{BUSINESS_INFO.phone}</strong> (Pqah Rosli) • Servis Negeri Sembilan & Selangor
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
