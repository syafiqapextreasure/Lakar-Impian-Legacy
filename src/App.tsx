/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PackagesSection } from './components/PackagesSection';
import { WorkerSection } from './components/WorkerSection';
import { PortfolioSection } from './components/PortfolioSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSection } from './components/ProcessSection';
import { KawasanSection } from './components/KawasanSection';
import { WhatsAppEnquiry } from './components/WhatsAppEnquiry';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFFDF8] text-[#202020] font-sans antialiased selection:bg-[#C99A2E] selection:text-[#004C4C]">
      {/* 1. Sticky Navigation Header */}
      <Navbar />

      {/* Main Page Content */}
      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Trust Strip */}
        <TrustStrip />

        {/* 4. About Lakar Impian Legacy & 6-Step Visual Timeline */}
        <AboutSection />

        {/* 5. Services: Kabinet Custom & Khidmat Pemasangan */}
        <ServicesSection />

        {/* 6. Solution Packages & Installation Pricing Info */}
        <PackagesSection />

        {/* 7. Worker / Real Installer Team in Action */}
        <WorkerSection />

        {/* 8. Portfolio Gallery with Filter & Interactive Lightbox */}
        <PortfolioSection />

        {/* 9. Why Choose Us (4 Glass Cards) */}
        <WhyChooseUs />

        {/* 10. Process: 5-Step Order Flow */}
        <ProcessSection />

        {/* 11. Kawasan Servis: Negeri Sembilan & Selangor Maps */}
        <KawasanSection />

        {/* 12. Main Conversion: WhatsApp Enquiry Form */}
        <WhatsAppEnquiry />

        {/* 13. Official Contact Section */}
        <ContactSection />
      </main>

      {/* 14. Official Footer */}
      <Footer />

      {/* 15. Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}

