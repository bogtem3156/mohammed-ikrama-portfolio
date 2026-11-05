"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { 
  Leaf, 
  Brain, 
  Atom, 
  Cpu, 
  Microscope, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Binary, 
  Activity,
  ArrowRight
} from "lucide-react";

export function ResearchInterests() {
  const { researchAreas, personalInfo } = portfolioData;

  const areaStyles = [
    {
      gradient: "from-emerald-500/[0.08] via-teal-500/[0.04] to-transparent dark:from-emerald-950/50 dark:via-teal-950/25 dark:to-slate-900/60",
      border: "border-emerald-500/30 hover:border-emerald-500/60 dark:border-emerald-500/25 dark:hover:border-emerald-400/60",
      badge: "Phytomedicine & Synergism",
      badgeClass: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/25",
      iconBox: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 ring-emerald-500/25 shadow-emerald-500/10",
      formula: "C30H48O3 • Bacopasides & Withanolides",
      domainIcon: Leaf,
      decorType: "botanical",
      glowRing: "group-hover:ring-emerald-400/30",
    },
    {
      gradient: "from-indigo-500/[0.08] via-purple-500/[0.04] to-transparent dark:from-indigo-950/50 dark:via-purple-950/25 dark:to-slate-900/60",
      border: "border-purple-500/30 hover:border-purple-500/60 dark:border-purple-500/25 dark:hover:border-purple-400/60",
      badge: "Preclinical Neurobiology",
      badgeClass: "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/25",
      iconBox: "bg-purple-500/15 text-purple-600 dark:text-purple-400 ring-purple-500/25 shadow-purple-500/10",
      formula: "5-HT • DA • NE • Corticosterone Biomarkers",
      domainIcon: Brain,
      decorType: "neural",
      glowRing: "group-hover:ring-purple-400/30",
    },
    {
      gradient: "from-cyan-500/[0.08] via-sky-500/[0.04] to-transparent dark:from-cyan-950/50 dark:via-sky-950/25 dark:to-slate-900/60",
      border: "border-cyan-500/30 hover:border-cyan-500/60 dark:border-cyan-500/25 dark:hover:border-cyan-400/60",
      badge: "Vesicular Nanocarriers",
      badgeClass: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/25",
      iconBox: "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 ring-cyan-500/25 shadow-cyan-500/10",
      formula: "Span 60 • Cholesterol • Biodegradable PLGA",
      domainIcon: Atom,
      decorType: "nano",
      glowRing: "group-hover:ring-cyan-400/30",
    },
    {
      gradient: "from-amber-500/[0.08] via-orange-500/[0.04] to-transparent dark:from-amber-950/50 dark:via-orange-950/25 dark:to-slate-900/60",
      border: "border-amber-500/30 hover:border-amber-500/60 dark:border-amber-500/25 dark:hover:border-amber-400/60",
      badge: "Structure-Based CADD",
      badgeClass: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/25",
      iconBox: "bg-amber-500/15 text-amber-600 dark:text-amber-400 ring-amber-500/25 shadow-amber-500/10",
      formula: "AutoDock Vina • Target Pocket • Binding ΔG",
      domainIcon: Cpu,
      decorType: "computational",
      glowRing: "group-hover:ring-amber-400/30",
    },
  ];

  return (
    <section id="research" className="py-20 md:py-28 bg-slate-50/70 dark:bg-[#0c1222]/80 border-y border-slate-200/60 dark:border-slate-800/60 relative overflow-hidden">
      
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/[0.04] dark:bg-emerald-500/[0.02] blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
            <Microscope className="w-3.5 h-3.5" />
            <span>Investigative Pharmacology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Core Research Domains & Methodologies
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Targeting neurodegenerative and affective disorders through bio-rational botanical synergies, molecular docking, and advanced vesicular nanocarrier systems.
          </p>
        </motion.div>

        {/* Artistic Research Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {researchAreas.map((area, idx) => {
            const style = areaStyles[idx] || areaStyles[0];
            const IconComponent = style.domainIcon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className={`group relative p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#131c31] bg-gradient-to-br ${style.gradient} border ${style.border} transition-all duration-300 shadow-xs hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden`}
              >
                {/* Decorative Faint Watermark Icon */}
                <div className="absolute -top-6 -right-6 w-32 h-32 opacity-[0.04] dark:opacity-[0.07] pointer-events-none group-hover:scale-110 transition-transform duration-700">
                  <IconComponent className="w-full h-full text-slate-900 dark:text-white" />
                </div>

                {/* Card Top: Evocative Icon, Domain Badge, & Formula */}
                <div>
                  <div className="flex items-start justify-between gap-3 sm:gap-4 mb-5">
                    
                    {/* Artistic Glassmorphic Icon Box */}
                    <div className={`p-3.5 sm:p-4 rounded-2xl ${style.iconBox} ring-1 ring-inset backdrop-blur-xs shadow-lg transition-transform duration-300 group-hover:scale-105 shrink-0`}>
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>

                    {/* Scientific Badge & Formula Chip */}
                    <div className="text-right space-y-1.5 min-w-0">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border ${style.badgeClass} shadow-2xs max-w-full truncate`}>
                        <Sparkles className="w-3 h-3 shrink-0" />
                        <span className="truncate">{style.badge}</span>
                      </span>
                      <p className="font-mono text-[10px] text-slate-500 dark:text-slate-400 tracking-wider truncate">
                        {style.formula}
                      </p>
                    </div>

                  </div>

                  {/* Title & Detailed Scientific Narrative */}
                  <div className="space-y-2.5">
                    <h3 className="text-xl sm:text-[22px] font-extrabold text-slate-900 dark:text-white leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>

                {/* Applied Experimental Methodologies Section */}
                <div className="mt-7 pt-5 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Applied Experimental Methodologies</span>
                    </p>
                    <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                      Preclinical Protocol
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {area.techniques.map((tech, tIdx) => (
                      <div 
                        key={tIdx} 
                        className="flex items-center gap-2 p-2 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/80 backdrop-blur-2xs text-xs text-slate-700 dark:text-slate-200 group/chip hover:border-emerald-500/40 transition-colors"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 group-hover/chip:scale-110 transition-transform" />
                        <span className="truncate font-medium">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Doctoral Research Statement Callout Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/10 via-teal-950/5 to-slate-900/10 dark:from-emerald-950/60 dark:via-[#131c31] dark:to-teal-950/40 border border-emerald-500/25 dark:border-emerald-500/30 shadow-md relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2.5 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                <Activity className="w-3.5 h-3.5" />
                <span>Doctoral Research Focus • Vikrant University</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                &ldquo;Synergistic Antidepressant Activity of Bacopa monnieri and Withania somnifera Co-Loaded Niosomes in Depression Models&rdquo;
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {personalInfo.researchStatement}
              </p>
            </div>
            
            <a
              href="#publications"
              className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-emerald-700/20 hover:shadow-lg hover:shadow-emerald-600/30 hover:-translate-y-0.5 active:scale-95 cursor-pointer text-center"
            >
              <span>Explore Research Output</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}