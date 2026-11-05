"use client";

import { motion } from "framer-motion";
import { portfolioData, TimelineMilestone } from "@/data/portfolioData";
import { 
  Milestone, 
  GraduationCap, 
  ShieldCheck, 
  Briefcase, 
  Microscope, 
  CheckCircle2, 
  Calendar 
} from "lucide-react";

export function AcademicTimeline() {
  const { timeline } = portfolioData;

  const getIcon = (type: TimelineMilestone["type"]) => {
    switch (type) {
      case "education":
        return <GraduationCap className="w-4 h-4 text-white" />;
      case "licensure":
        return <ShieldCheck className="w-4 h-4 text-white" />;
      case "appointment":
        return <Briefcase className="w-4 h-4 text-white" />;
      case "research":
        return <Microscope className="w-4 h-4 text-white" />;
      default:
        return <Milestone className="w-4 h-4 text-white" />;
    }
  };

  const getBadgeColor = (type: TimelineMilestone["type"]) => {
    switch (type) {
      case "education":
        return "bg-blue-600";
      case "licensure":
        return "bg-emerald-600";
      case "appointment":
        return "bg-emerald-700";
      case "research":
        return "bg-purple-600";
      default:
        return "bg-slate-700";
    }
  };

  return (
    <section id="timeline" className="py-20 md:py-28">
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
            <Milestone className="w-3.5 h-3.5" />
            <span>Academic Chronology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Academic Progression & Milestones
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Traced from undergraduate pharmacy foundation and state statutory licensure to postgraduate pharmacology, doctoral research, and university governance.
          </p>
        </motion.div>

        {/* Vertical Timeline Tree */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical central spine line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-slate-200 dark:bg-slate-800" />

          <div className="space-y-12">
            {timeline.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Central Icon Node */}
                  <div
                    className={`absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full ${getBadgeColor(
                      item.type
                    )} flex items-center justify-center shadow-md ring-4 ring-white dark:ring-[#0B0F19] z-10`}
                  >
                    {getIcon(item.type)}
                  </div>

                  {/* Empty side for layout symmetry on sm+ */}
                  <div className="hidden sm:block w-1/2" />

                  {/* Card side */}
                  <div
                    className={`w-full sm:w-1/2 pl-10 sm:pl-0 ${
                      isEven ? "sm:pr-10" : "sm:pl-10"
                    }`}
                  >
                    <div className="p-4 sm:p-6 md:p-7 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-lg hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-300">
                      
                      {/* Year & Badge Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.year}</span>
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          {item.badge}
                        </span>
                      </div>

                      {/* Title & Role */}
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
                        {item.roleOrDegree}
                      </p>
                      <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                        {item.institution}
                      </p>

                      {/* Description */}
                      <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Key Highlights */}
                      {item.highlights && item.highlights.length > 0 && (
                        <ul className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                          {item.highlights.map((h, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
