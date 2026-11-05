"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { copyToClipboard } from "@/lib/utils";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Copy, 
  Check, 
  Building2, 
  ShieldCheck, 
  Clock, 
  MessageSquare,
  Navigation,
  Sparkles 
} from "lucide-react";

export function ContactSection() {
  const { personalInfo } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedOrcid, setCopiedOrcid] = useState(false);

  const handleCopyEmail = async () => {
    const success = await copyToClipboard(personalInfo.email);
    if (success) {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    }
  };

  const handleCopyPhone = async () => {
    const success = await copyToClipboard(personalInfo.phone);
    if (success) {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    }
  };

  const handleCopyOrcid = async () => {
    const success = await copyToClipboard(personalInfo.orcid);
    if (success) {
      setCopiedOrcid(true);
      setTimeout(() => setCopiedOrcid(false), 2200);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50/60 dark:bg-[#0c1222]/80 border-t border-slate-200/60 dark:border-slate-800/60">
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
            <Mail className="w-3.5 h-3.5" />
            <span>Academic Correspondence & Directory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Contact & Institutional Directory
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Direct communication channels for pharmacological research partnerships, Avishkar innovation mentorship, guest symposiums, and university governance inquiries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Academic Directory Card (6 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 flex flex-col justify-between space-y-6"
          >
            
            {/* Primary Institutional & Directory Card */}
            <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-6 flex-1">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">
                    {personalInfo.institution}
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-400 font-medium mt-0.5">
                    {personalInfo.department}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Dr. Babasaheb Ambedkar Technological University (DBATU) Affiliated • Approved by PCI (New Delhi)
                  </p>
                </div>
              </div>

              {/* Direct Communication Channels */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3.5">
                
                {/* Official Email */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">Primary Academic Email</p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 truncate block font-mono"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-center">
                    <button
                      onClick={handleCopyEmail}
                      type="button"
                      title="Copy email address"
                      className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
                    >
                      Compose
                    </a>
                  </div>
                </div>

                {/* Telephone & WhatsApp */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">Direct Mobile & WhatsApp</p>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 font-mono"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-center">
                    <button
                      onClick={handleCopyPhone}
                      type="button"
                      title="Copy phone number"
                      className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <a
                      href="https://wa.me/919511602973"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* ORCID Researcher ID */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-[#A6CE39]/15 flex items-center justify-center text-[#A6CE39] font-bold text-xs shrink-0">
                      iD
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">ORCID Identifier</p>
                      <a
                        href={personalInfo.orcidUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 font-mono flex items-center gap-1 truncate"
                      >
                        <span>{personalInfo.orcid}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyOrcid}
                    type="button"
                    title="Copy ORCID"
                    className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors shrink-0 self-end sm:self-center cursor-pointer"
                  >
                    {copiedOrcid ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

              </div>

              {/* Campus Address & Academic Hours */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Campus Address:</strong> Department of Pharmacology, Gangamai Institute of Pharmacy, Post Box No. 16, Nagaon, Dhule - 424005, Maharashtra, India.
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>
                    <strong>Faculty Office Hours:</strong> Monday – Saturday | 09:00 AM – 05:00 PM IST
                  </span>
                </div>
              </div>

            </div>

          </motion.div>

          {/* Right Column: Full Interactive Google Map Card (6 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div className="h-full rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-xs flex flex-col">
              
              {/* Map Header */}
              <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Navigation className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      Gangamai Institute of Pharmacy Campus
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Nagaon, Dhule, Maharashtra
                    </p>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=Gangamai+Institute+of+Pharmacy+Nagaon+Dhule"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-2xs"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Map Viewport */}
              <div className="relative flex-1 min-h-[340px] w-full bg-slate-100 dark:bg-slate-900">
                <iframe
                  title="Gangamai Institute of Pharmacy Campus Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14917.411130635293!2d74.77443187141114!3d20.918239088673723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdec5034c5be70d%3A0xe54e58b14aeb1f4a!2sGangamai%20Institute%20of%20Pharmacy!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 absolute inset-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Map Footer Note */}
              <div className="p-3.5 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <span>Coordinates: 20.9182° N, 74.7744° E</span>
                <span className="font-medium text-emerald-700 dark:text-emerald-400">Dhule District, MH</span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
