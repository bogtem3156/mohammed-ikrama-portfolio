"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { 
  GraduationCap, 
  BookOpenCheck, 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  Sparkles, 
  ArrowUpRight 
} from "lucide-react";

interface TeachingGovernanceProps {
  onSelectCertificate?: (certId: string) => void;
}

export function TeachingGovernance({ onSelectCertificate }: TeachingGovernanceProps) {
  const { teaching, personalInfo } = portfolioData;

  return (
    <section id="teaching" className="py-20 md:py-28">
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
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Pedagogy & Institutional Stewardship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Teaching Pedagogy & Institutional Governance
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Fostering conceptual clarity in foundational physiological & pharmacological principles, coupled with statutory exam administration and state research mentorship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Subjects Taught (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
              <BookOpenCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Undergraduate Curricular Courses Taught
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {teaching.subjects.map((sub, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-200 shadow-2xs hover:shadow-md"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
                      {sub.level}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">Core Course</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {sub.name}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {sub.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Teaching Philosophy Snippet */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-[#111827]/70 border border-slate-200/70 dark:border-slate-800">
              <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                <Sparkles className="w-4 h-4" />
                <span>Pedagogical Philosophy</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
                &ldquo;{personalInfo.teachingPhilosophy}&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Right: Institutional Governance & Exam In-charge Roles (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Administrative & Governance Portfolios
              </h3>
            </div>

            <div className="space-y-4">
              {teaching.administrativeRoles.map((role, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-200 shadow-2xs hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                        {role.role}
                      </h4>
                      <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                        {role.organization}
                      </p>
                    </div>
                    <span className="shrink-0 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {role.duration}
                    </span>
                  </div>

                  <ul className="mt-3 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {role.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* If there's an associated certificate (e.g. DBATU Avishkar) */}
                  {role.certificateId && (
                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                      <button
                        onClick={() => {
                          if (onSelectCertificate && role.certificateId) {
                            onSelectCertificate(role.certificateId);
                          } else {
                            const el = document.getElementById("credentials");
                            if (el) el.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                        type="button"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors"
                      >
                        <Award className="w-3.5 h-3.5" />
                        <span>View DBATU Coordinator Certificate</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
