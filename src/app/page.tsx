"use client";

import { useState } from "react";
import { portfolioData, CertificateItem } from "@/data/portfolioData";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ResearchInterests } from "@/components/ResearchInterests";
import { PublicationsSection } from "@/components/PublicationsSection";
import { ConferencesSection } from "@/components/ConferencesSection";
import { TeachingGovernance } from "@/components/TeachingGovernance";
import { CertificateGallery } from "@/components/CertificateGallery";
import { CertificateLightbox } from "@/components/CertificateLightbox";
import { AcademicTimeline } from "@/components/AcademicTimeline";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [activeCert, setActiveCert] = useState<CertificateItem | null>(null);

  const handleSelectCertById = (certId: string) => {
    const cert = portfolioData.certificates.find((c) => c.id === certId);
    if (cert) {
      setActiveCert(cert);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0c1222] text-slate-900 dark:text-slate-100 antialiased selection:bg-emerald-500 selection:text-white overflow-x-hidden max-w-full">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="overflow-x-hidden max-w-full">
        <Hero />
        <ResearchInterests />
        <PublicationsSection />
        <ConferencesSection onSelectCertificate={handleSelectCertById} />
        <TeachingGovernance onSelectCertificate={handleSelectCertById} />
        <CertificateGallery onOpenLightbox={(cert) => setActiveCert(cert)} />
        <AcademicTimeline />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lightbox Modal */}
      {activeCert && (
        <CertificateLightbox
          certificate={activeCert}
          allCertificates={portfolioData.certificates}
          onClose={() => setActiveCert(null)}
          onNavigate={(nextCert) => setActiveCert(nextCert)}
        />
      )}
    </div>
  );
}
