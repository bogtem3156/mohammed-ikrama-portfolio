"use client";

import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { 
  ShieldCheck, 
  ArrowUp, 
  FileText, 
  ExternalLink 
} from "lucide-react";

export function Footer() {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-[#0c1222] border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: Identity & Affiliation (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-600 to-slate-900 text-white flex items-center justify-center font-bold text-base shadow-sm">
                MI
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  {personalInfo.fullName}
                </h3>
                <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                  {personalInfo.role}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
              {personalInfo.department}, {personalInfo.institution}, Nagaon, Dhule, Maharashtra. Doctoral Researcher at Vikrant University.
            </p>

            <div className="flex flex-wrap gap-2 pt-1 text-[11px]">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 font-medium">
                <ShieldCheck className="w-3 h-3" />
                MSPC Reg: #{personalInfo.registration.regNumber}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-mono">
                PPP: {personalInfo.registration.pppNumber}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Academic Profile & Overview
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Research Domains & Methodology
                </a>
              </li>
              <li>
                <a href="#publications" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Peer-Reviewed Publications (Scopus / PubMed)
                </a>
              </li>
              <li>
                <a href="#teaching" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Teaching & Administrative Roles
                </a>
              </li>
              <li>
                <a href="#credentials" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Verified Scanned Credentials
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Academic Milestones Timeline
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Research & CV Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Academic Documents & Profiles
            </h4>
            
            <div className="space-y-2.5">
              <Link
                href="/cv"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    Comprehensive Academic Curriculum Vitae (Print / ATS)
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 transition-colors" />
              </Link>

              <a
                href={personalInfo.orcidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#A6CE39] text-white font-bold text-[9px] flex items-center justify-center leading-none">
                    iD
                  </span>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 font-mono">
                    ORCID: {personalInfo.orcid}
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 transition-colors" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>
            © 2026 {personalInfo.fullName}. All rights reserved. Academic portfolio & digital CV.
          </p>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
