"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioData, CertificateItem } from "@/data/portfolioData";
import { 
  ShieldCheck, 
  Eye, 
  Calendar, 
  Layers 
} from "lucide-react";

interface CertificateGalleryProps {
  onOpenLightbox: (cert: CertificateItem) => void;
}

export function CertificateGallery({ onOpenLightbox }: CertificateGalleryProps) {
  const { certificates } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Licensure & Statutory Registration",
    "Institutional Leadership & Research Mentorship",
    "Conferences & Scientific Presentations",
    "Workshops & Faculty Development",
    "Awards & Professional Recognition"
  ];

  const filtered = certificates.filter((cert) => {
    if (selectedCategory === "All") return true;
    return cert.category === selectedCategory;
  });

  return (
    <section id="credentials" className="py-20 md:py-28 bg-slate-50/70 dark:bg-[#0B0F19]/50 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-3 mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Credentials Repository</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Academic Certifications & Council Licensures
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            High-resolution scanned documents confirming statutory pharmacist licensure (MSPC), university coordination honours (DBATU), and national conference paper awards.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              type="button"
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "bg-white dark:bg-[#111827] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800"
              }`}
            >
              {cat === "All" ? "All Credentials (09)" : cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              onClick={() => onOpenLightbox(cert)}
              className="group cursor-pointer rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-2xs hover:shadow-xl hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[4/3] w-full bg-slate-100 dark:bg-slate-900 overflow-hidden border-b border-slate-100 dark:border-slate-800">
                <Image
                  src={cert.thumb || cert.image}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay with zoom action */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                  <span className="px-3.5 py-2 rounded-xl bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white text-xs font-semibold shadow-lg flex items-center gap-1.5 backdrop-blur-xs">
                    <Eye className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>Inspect Document</span>
                  </span>
                </div>

                {/* Badges on Thumbnail */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                  {cert.isFeatured ? (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-600 text-white shadow-xs">
                      Verified
                    </span>
                  ) : (
                    <span />
                  )}

                  {cert.hasBack && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-900/85 text-emerald-400 backdrop-blur-xs flex items-center gap-1">
                      <Layers className="w-3 h-3" />
                      <span>Dual-Sided</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 block truncate">
                      {cert.category}
                    </span>
                    {cert.regNo && (
                      <span className="shrink-0 font-mono text-[10px] font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                        #{cert.regNo}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal line-clamp-2">
                    {cert.subtitle}
                  </p>
                </div>

                {/* Footer metadata & Action Button */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-[11px]">{cert.date}</span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenLightbox(cert);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25 transition-all shadow-2xs hover:shadow-xs cursor-pointer group/btn"
                  >
                    <Eye className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 group-hover/btn:scale-110 transition-transform" />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
