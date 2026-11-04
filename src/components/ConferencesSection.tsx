"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { 
  Presentation, 
  MapPin, 
  Calendar, 
  Building2, 
  Award, 
  ArrowUpRight
} from "lucide-react";

interface ConferencesSectionProps {
  onSelectCertificate?: (certId: string) => void;
}

export function ConferencesSection({ onSelectCertificate }: ConferencesSectionProps) {
  const { conferences } = portfolioData;

  return (
    <section className="py-20 md:py-28 bg-slate-50/70 dark:bg-[#0B0F19]/50 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
            <Presentation className="w-3.5 h-3.5" />
            <span>Scholarly Symposia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Scientific Conferences & Oral Presentations
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Disseminating novel pharmacological findings, review frameworks, and AI integration in pharmaceutical regulatory sciences.
          </p>
        </motion.div>

        {/* Conference Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {conferences.map((conf, idx) => (
            <motion.div
              key={conf.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Scope & Type Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                        conf.scope === "International"
                          ? "bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20"
                          : "bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20"
                      }`}
                    >
                      {conf.scope} Conference
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {conf.presentationType}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{conf.date}</span>
                  </div>
                </div>

                {/* Presentation Title */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {conf.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                    {conf.conferenceName}
                  </p>
                </div>

                {/* Organizer & Location */}
                <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-start gap-2">
                    <Building2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>Organized by: <strong className="text-slate-700 dark:text-slate-200">{conf.organizer}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{conf.location}</span>
                  </div>
                </div>

                {/* Abstract summary */}
                {conf.abstractSummary && (
                  <p className="text-xs text-slate-600 dark:text-slate-300 pt-2 border-t border-slate-100 dark:border-slate-800/80 leading-relaxed">
                    {conf.abstractSummary}
                  </p>
                )}

              </div>

              {/* View Certificate Action */}
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                  {conf.presentationType === "Oral Paper Presentation" ? "Oral Presentation" : "Conference Delegate"}
                </span>
                <button
                  onClick={() => {
                    const id = conf.certificateId || "vniprc-ai-regulatory-2026";
                    if (onSelectCertificate) {
                      onSelectCertificate(id);
                    } else {
                      const el = document.getElementById("credentials");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  type="button"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25 transition-all shadow-2xs hover:shadow-xs cursor-pointer group/btn"
                >
                  <Award className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 group-hover/btn:scale-110 transition-transform" />
                  <span>View Presentation Certificate</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
