"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { copyToClipboard } from "@/lib/utils";
import { 
  ShieldCheck, 
  GraduationCap, 
  Award,
  FileText, 
  BookOpen, 
  ArrowRight, 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  ExternalLink,
  Sparkles,
  MapPin,
  FlaskConical,
  Atom,
  CheckCircle2
} from "lucide-react";

export function Hero() {
  const { personalInfo, metrics } = portfolioData;
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
    <section id="about" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-slate-50 dark:bg-[#0c1222] transition-colors duration-300">
      
      {/* Ambient Scientific Lattice Background Canvas */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Soft glowing ambient orbs */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/10 dark:bg-emerald-600/12 rounded-full blur-[130px]" />
        <div className="absolute top-1/3 right-1/4 w-[480px] h-[480px] bg-teal-500/10 dark:bg-teal-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-blue-500/8 dark:bg-blue-600/10 rounded-full blur-[110px]" />

        {/* Subtle Molecular Lattice Grid Overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.25] dark:opacity-[0.16]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="molecular-grid"
              width="64"
              height="64"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="32" cy="32" r="1.5" className="fill-slate-400 dark:fill-emerald-400/40" />
              <path
                d="M 32,0 L 32,64 M 0,32 L 64,32"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeDasharray="4 8"
                className="text-slate-300 dark:text-slate-700/60"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#molecular-grid)" />
        </svg>

        {/* Floating Geometric Chemical Nodes */}
        <div className="absolute top-20 right-[15%] hidden lg:block opacity-40 dark:opacity-30 animate-pulse">
          <svg width="120" height="120" viewBox="0 0 100 100" className="text-emerald-500">
            <polygon points="50,10 90,32 90,78 50,100 10,78 10,32" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="50" cy="10" r="3.5" fill="currentColor" />
            <circle cx="90" cy="32" r="3.5" fill="currentColor" />
            <circle cx="90" cy="78" r="3.5" fill="currentColor" />
            <circle cx="50" cy="100" r="3.5" fill="currentColor" />
            <circle cx="10" cy="78" r="3.5" fill="currentColor" />
            <circle cx="10" cy="32" r="3.5" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Balanced Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Academic Credentials & Presentation (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-7 text-center lg:text-left"
          >
            
            {/* Scientific Badges Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                MSPC Registered Pharmacist (#375736)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-700 dark:text-teal-400 border border-teal-500/20 shadow-2xs">
                <GraduationCap className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                Ph.D. Researcher (Winter 2024)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20 shadow-2xs">
                <Award className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                Avishkar Institute Coordinator (DBATU)
              </span>
            </div>

            {/* Academic Name & Title Hierarchy */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.14]">
                {personalInfo.fullName}
              </h1>
              
              <div className="space-y-1">
                <p className="text-lg sm:text-xl font-bold text-emerald-700 dark:text-emerald-400 tracking-tight">
                  {personalInfo.role}
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium">
                  <span className="font-semibold text-slate-800 dark:text-slate-100">{personalInfo.institution}</span>
                  <span className="text-slate-400">•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>{personalInfo.location}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Academic Summary Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalInfo.shortBio}
            </p>

            {/* Research Focus Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-0.5">
              {[
                "Phytopharmacology",
                "Depression & Stress Animal Models",
                "Niosomes & PLGA Nanocarriers",
                "Molecular Docking & In-Silico Modeling"
              ].map((topic) => (
                <span
                  key={topic}
                  className="px-3 py-1 text-xs font-medium rounded-lg bg-white dark:bg-[#111827] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-2xs"
                >
                  {topic}
                </span>
              ))}
            </div>

            {/* Action Buttons: View CV, Explore Research, Verified Scans */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-1">
              <Link
                href="/cv"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md shadow-emerald-700/20 hover:shadow-lg hover:shadow-emerald-600/30 transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>View Academic CV</span>
              </Link>

              <a
                href="#publications"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-[#131c31] text-slate-800 dark:text-slate-100 font-semibold text-sm border border-slate-300 dark:border-slate-700/80 hover:bg-emerald-50/80 hover:border-emerald-500 hover:text-emerald-700 dark:hover:bg-emerald-950/40 dark:hover:border-emerald-500/60 dark:hover:text-emerald-300 transition-all hover:-translate-y-0.5 active:scale-95 shadow-2xs hover:shadow-md cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Explore Research</span>
              </a>

              <a
                href="#credentials"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 text-sm font-semibold hover:translate-x-0.5 transition-all cursor-pointer"
              >
                <span>Verified Scans</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Clean Contact Chips Row */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs text-slate-600 dark:text-slate-400">
              
              {/* Email Chip */}
              <div className="flex items-center gap-1.5 bg-white dark:bg-[#111827] px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-2xs">
                <Mail className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 font-mono text-xs transition-colors"
                >
                  {personalInfo.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  title="Copy email address"
                  className="ml-1 p-0.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone Chip */}
              <div className="flex items-center gap-1.5 bg-white dark:bg-[#111827] px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-2xs">
                <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 font-mono text-xs transition-colors"
                >
                  {personalInfo.phone}
                </a>
                <button
                  onClick={handleCopyPhone}
                  type="button"
                  title="Copy phone number"
                  className="ml-1 p-0.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* ORCID Chip */}
              <div className="flex items-center gap-1.5 bg-white dark:bg-[#111827] px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-2xs">
                <span className="w-3.5 h-3.5 rounded-full bg-[#A6CE39] text-[9px] text-white font-bold flex items-center justify-center leading-none">
                  iD
                </span>
                <a
                  href={personalInfo.orcidUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 font-mono text-xs inline-flex items-center gap-1 transition-colors"
                >
                  {personalInfo.orcid}
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
                <button
                  onClick={handleCopyOrcid}
                  type="button"
                  title="Copy ORCID ID"
                  className="ml-1 p-0.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                >
                  {copiedOrcid ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

            </div>

          </motion.div>

          {/* Right Column: Center-Aligned Sleek Scientific Portrait Card (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[340px] group">
              
              {/* Outer Animated Glowing Gradient Frame */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-slate-800 opacity-60 dark:opacity-75 blur-md group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-2xl">
                
                {/* Portrait Photo Container */}
                <div className="relative aspect-[3/3.8] w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <Image
                    src={personalInfo.photo.webp}
                    alt={personalInfo.fullName}
                    fill
                    priority
                    sizes="(max-width: 768px) 320px, 340px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />

                  {/* Floating verification badge anchored at bottom of portrait */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 dark:bg-[#111827]/95 backdrop-blur-md border border-white/20 dark:border-slate-700/70 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                          <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                            Reg. Pharmacist
                          </p>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono leading-tight">
                            MSPC #{personalInfo.registration.regNumber}
                          </p>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                        Active 2053
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sub-card details */}
                <div className="p-4 bg-white dark:bg-[#111827] text-left space-y-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">Designation</span>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">Assistant Professor</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">Department</span>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">Pharmacology</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">Council PPP No.</span>
                    <span className="font-mono font-semibold text-emerald-700 dark:text-emerald-400">{personalInfo.registration.pppNumber}</span>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>

        {/* Highlight Metrics Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {metrics.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                {stat.label}
              </p>
              <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                {stat.description}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
