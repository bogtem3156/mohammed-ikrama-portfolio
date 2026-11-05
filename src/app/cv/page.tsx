"use client";

import { portfolioData } from "@/data/portfolioData";
import { 
  Printer, 
  ArrowLeft, 
  ShieldCheck,
  GraduationCap,
  FlaskConical,
  Download
} from "lucide-react";

export function AcademicCVPage() {
  const { personalInfo, education, publications, conferences, teaching } = portfolioData;

  const handlePrint = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-[#0c1222] text-slate-900 dark:text-slate-100 font-sans print:bg-white print:text-black">
      
      {/* Floating Action Bar (Strictly Hidden on Print) */}
      <aside aria-label="CV Actions" className="sticky top-0 z-40 bg-white/95 dark:bg-[#111a2e]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xs no-print print:hidden">
        <div className="max-w-4xl mx-auto px-4 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer self-start sm:self-center"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </a>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
            {/* Direct Static PDF Fallback Download */}
            <a
              href="/assets/CV.pdf"
              download="Mohammed_Ikrama_CV.pdf"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all shadow-2xs cursor-pointer text-center"
              title="Download pre-generated static PDF file"
            >
              <Download className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Download PDF</span>
            </a>

            {/* Primary System Print / Save as PDF Action */}
            <button
              onClick={handlePrint}
              type="button"
              id="print-cv-btn"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-all hover:shadow-md cursor-pointer active:scale-95 text-center"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main CV Document Container (Compact Single/Two-Page Executive Format) */}
      <main className="max-w-4xl mx-auto my-4 sm:my-6 p-4 sm:p-7 md:p-8 bg-white dark:bg-[#111a2e] print:bg-white print:text-black shadow-md rounded-2xl print:shadow-none print:rounded-none print:p-0 print:m-0 border border-slate-200/80 dark:border-slate-800 print:border-none text-[11px] leading-snug">
        
        {/* CV Masthead: Strictly Visible in Print & Web */}
        <div className="cv-masthead border-b-2 border-slate-900 dark:border-slate-200 print:border-black pb-3 mb-3 break-inside-avoid print:block">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-2.5">
            <div>
              <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-slate-950 dark:text-white print:text-black leading-tight">
                {personalInfo.fullName}
              </h1>
              <p className="text-xs sm:text-sm font-bold text-emerald-700 dark:text-emerald-400 print:text-black mt-0.5">
                {personalInfo.role} • {personalInfo.department}
              </p>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 print:text-neutral-700">
                {personalInfo.institution}, Nagaon, Dhule - 424005, Maharashtra, India
              </p>
            </div>

            {/* Registration Box */}
            <div className="text-left sm:text-right text-[10.5px] leading-tight bg-slate-50 dark:bg-slate-900/80 print:bg-transparent p-2 rounded-xl border border-slate-200 dark:border-slate-800 print:border-none print:p-0">
              <p className="font-bold text-emerald-700 dark:text-emerald-400 print:text-black flex items-center gap-1 sm:justify-end">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Registered Pharmacist (MSPC)</span>
              </p>
              <p className="font-mono text-slate-600 dark:text-slate-300 print:text-neutral-800 mt-0.5">
                Reg: <strong>{personalInfo.registration.regNumber}</strong> | PPP: <strong>{personalInfo.registration.pppNumber}</strong>
              </p>
              <p className="text-[9.5px] text-slate-500 print:text-neutral-600">
                Valid until 31/12/2053 (Life Validated)
              </p>
            </div>
          </div>

          {/* Quick Contact Coordinates Bar */}
          <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 print:border-neutral-300 flex flex-wrap items-center justify-between gap-y-1 text-[10.5px] text-slate-600 dark:text-slate-400 print:text-neutral-800">
            <span>Email: <strong className="font-mono text-slate-900 dark:text-white print:text-black">{personalInfo.email}</strong></span>
            <span>Tel: <strong className="font-mono text-slate-900 dark:text-white print:text-black">{personalInfo.phone}</strong></span>
            <span>ORCID: <strong className="font-mono text-slate-900 dark:text-white print:text-black">{personalInfo.orcid}</strong></span>
            <span>Location: <strong className="text-slate-900 dark:text-white print:text-black">{personalInfo.location}</strong></span>
          </div>
        </div>

        {/* Dense 2-Column Academic Executive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 print:grid-cols-12 print:gap-3.5 items-start">
          
          {/* Left Column / Sidebar (35% on md/print): Degrees, Skills, Courses, Training */}
          <div className="md:col-span-4 print:col-span-4 space-y-3.5 border-r-0 md:border-r border-slate-200 dark:border-slate-800 print:border-neutral-200 pr-0 md:pr-3.5 print:pr-3">
            
            {/* Education */}
            <section className="break-inside-avoid">
              <h2 className="text-[10.5px] font-bold uppercase tracking-wider text-slate-900 dark:text-white print:text-black border-b border-slate-200 dark:border-slate-700 print:border-neutral-300 pb-0.5 mb-1.5 flex items-center gap-1.5">
                <GraduationCap className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                <span>Academic Degrees</span>
              </h2>
              <div className="space-y-2">
                {education.map((edu, idx) => (
                  <div key={idx} className="text-[10px] leading-tight">
                    <p className="font-bold text-slate-900 dark:text-white print:text-black">
                      {edu.degree}
                    </p>
                    <p className="text-emerald-700 dark:text-emerald-400 print:text-neutral-800 font-semibold">
                      {edu.institution}
                    </p>
                    <p className="text-[9.5px] text-slate-500 dark:text-slate-400 print:text-neutral-600 font-mono">
                      {edu.period}
                    </p>
                    {edu.thesisOrFocus && (
                      <p className="text-[9.5px] text-slate-600 dark:text-slate-400 print:text-neutral-700 italic mt-0.5 line-clamp-2">
                        {edu.thesisOrFocus}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Core Research Competencies */}
            <section className="break-inside-avoid">
              <h2 className="text-[10.5px] font-bold uppercase tracking-wider text-slate-900 dark:text-white print:text-black border-b border-slate-200 dark:border-slate-700 print:border-neutral-300 pb-0.5 mb-1.5 flex items-center gap-1.5">
                <FlaskConical className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                <span>Research Expertise</span>
              </h2>
              <ul className="space-y-1 text-[10px] text-slate-600 dark:text-slate-300 print:text-neutral-800 leading-tight">
                <li>• Phytopharmacology & Natural Synergies</li>
                <li>• Depression & Stress Models (FST/TST)</li>
                <li>• Niosomes & Biodegradable PLGA Nanocarriers</li>
                <li>• Molecular Docking (AutoDock / PyRx)</li>
                <li>• Brain Monoamines (5-HT, DA, NE) Assays</li>
              </ul>
            </section>

            {/* Courses Instructed */}
            <section className="break-inside-avoid">
              <h2 className="text-[10.5px] font-bold uppercase tracking-wider text-slate-900 dark:text-white print:text-black border-b border-slate-200 dark:border-slate-700 print:border-neutral-300 pb-0.5 mb-1.5">
                Courses Instructed
              </h2>
              <div className="space-y-0.5 text-[10px] text-slate-600 dark:text-slate-300 print:text-neutral-800 leading-tight">
                <p>• Human Anatomy & Physiology</p>
                <p>• Pathophysiology</p>
                <p>• Pharmacology (Theory & Lab)</p>
                <p>• Communication Skills & Ethics</p>
              </div>
            </section>

            {/* Faculty Development & Workshops */}
            <section className="break-inside-avoid">
              <h2 className="text-[10.5px] font-bold uppercase tracking-wider text-slate-900 dark:text-white print:text-black border-b border-slate-200 dark:border-slate-700 print:border-neutral-300 pb-0.5 mb-1.5">
                Faculty Workshops & FDPs
              </h2>
              <div className="space-y-1.5 text-[9.5px] leading-tight text-slate-600 dark:text-slate-400 print:text-neutral-700">
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 print:text-black">
                    Pharmacological Research & Data Acquisition
                  </p>
                  <p>SNJB & ADInstruments NZ (Feb 2024)</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 print:text-black">
                    Analytical QA & Biopharmaceuticals
                  </p>
                  <p>KBHSS & Anatek Services (Feb 2023)</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 print:text-black">
                    58th National Pharmacy Week (IPA Nashik, 2020)
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 print:text-black">
                    MHRD Swachhta Pakhwada Award (Sep 2017)
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* Right Column / Main Body (65% on md/print): Summary, Appointments, Publications, Conferences */}
          <div className="md:col-span-8 print:col-span-8 space-y-3.5">
            
            {/* Executive Academic Profile */}
            <section className="break-inside-avoid">
              <h2 className="text-[10.5px] font-bold uppercase tracking-wider text-slate-900 dark:text-white print:text-black border-b border-slate-200 dark:border-slate-700 print:border-neutral-300 pb-0.5 mb-1">
                Executive Academic Profile
              </h2>
              <p className="text-justify text-[10.5px] text-slate-700 dark:text-slate-300 print:text-neutral-900 leading-snug">
                {personalInfo.shortBio} Serving as DBATU Lonere Avishkar Research Convention Institute Coordinator and managing internal & university examination boards at Gangamai Institute of Pharmacy, Dhule.
              </p>
            </section>

            {/* Academic Appointment & Governance */}
            <section className="break-inside-avoid">
              <h2 className="text-[10.5px] font-bold uppercase tracking-wider text-slate-900 dark:text-white print:text-black border-b border-slate-200 dark:border-slate-700 print:border-neutral-300 pb-0.5 mb-1.5">
                Faculty Appointments & Governance
              </h2>
              <div className="space-y-1.5 text-[10.5px]">
                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-slate-900 dark:text-white print:text-black">
                      Assistant Professor of Pharmacology
                    </h3>
                    <span className="font-mono text-[9.5px] text-slate-500 print:text-neutral-600">
                      Sep 2024 – Present (2+ Yrs)
                    </span>
                  </div>
                  <p className="text-emerald-700 dark:text-emerald-400 print:text-neutral-800 font-semibold text-[10px]">
                    Department of Pharmacology, Gangamai Institute of Pharmacy, Dhule
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-0.5 text-[10px]">
                  <div className="p-1.5 rounded bg-slate-50 dark:bg-slate-900/80 print:bg-transparent print:p-0">
                    <p className="font-bold text-slate-900 dark:text-white print:text-black">
                      • DBATU Avishkar Coordinator (2025–26)
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 print:text-neutral-700">
                      Leading student research projects, ideation incubation, and state technical convention representation.
                    </p>
                  </div>
                  <div className="p-1.5 rounded bg-slate-50 dark:bg-slate-900/80 print:bg-transparent print:p-0">
                    <p className="font-bold text-slate-900 dark:text-white print:text-black">
                      • Examination In-charge (Internal & University)
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 print:text-neutral-700">
                      Execution of sessional and end-semester theory and practical exams under university oversight.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Peer-Reviewed Journal Publications */}
            <section className="break-inside-avoid">
              <h2 className="text-[10.5px] font-bold uppercase tracking-wider text-slate-900 dark:text-white print:text-black border-b border-slate-200 dark:border-slate-700 print:border-neutral-300 pb-0.5 mb-1.5 flex items-center justify-between">
                <span>Peer-Reviewed Publications (Scopus & PubMed)</span>
                <span className="text-[9.5px] font-mono text-emerald-700 dark:text-emerald-400 font-semibold print:text-black">
                  Total: 03 Papers
                </span>
              </h2>
              <ol className="space-y-2 list-decimal list-inside text-[10px] text-justify leading-snug">
                {publications.map((pub) => (
                  <li key={pub.id} className="break-inside-avoid">
                    <strong className="text-slate-900 dark:text-white print:text-black">
                      &ldquo;{pub.title}&rdquo;
                    </strong>
                    <span className="text-slate-700 dark:text-slate-300 print:text-neutral-800">
                      {" "}— <em>{pub.journal}</em>, {pub.citationString}
                    </span>
                    <span className="font-mono text-[9px] text-emerald-700 dark:text-emerald-400 print:text-neutral-700 ml-1">
                      [DOI: {pub.doi}]
                    </span>
                    <span className="ml-1 px-1 py-0.2 rounded text-[9px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 print:border print:border-neutral-300">
                      {pub.indexedIn.join(" / ")}
                    </span>
                  </li>
                ))}
              </ol>
            </section>

            {/* Scientific Conferences & Presentations */}
            <section className="break-inside-avoid">
              <h2 className="text-[10.5px] font-bold uppercase tracking-wider text-slate-900 dark:text-white print:text-black border-b border-slate-200 dark:border-slate-700 print:border-neutral-300 pb-0.5 mb-1.5">
                Scientific Conferences & Oral Presentations
              </h2>
              <div className="space-y-1.5 text-[10px]">
                {conferences.map((conf) => (
                  <div key={conf.id} className="break-inside-avoid leading-snug">
                    <div className="flex justify-between items-baseline">
                      <p className="font-bold text-slate-900 dark:text-white print:text-black">
                        {conf.title} ({conf.presentationType})
                      </p>
                      <span className="font-mono text-[9px] text-slate-500 print:text-neutral-600">
                        {conf.date}
                      </span>
                    </div>
                    <p className="text-[9.5px] text-emerald-700 dark:text-emerald-400 print:text-neutral-800 font-medium">
                      {conf.conferenceName} — {conf.organizer}, {conf.location} [{conf.scope} Scope]
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Institutional Declaration */}
            <div className="cv-footer break-inside-avoid pt-2 border-t border-slate-200 dark:border-slate-800 print:border-neutral-300 text-[9.5px] text-slate-500 dark:text-slate-400 print:text-neutral-600 flex justify-between items-center">
              <span>Verified academic CV of Mohammed Ikrama Shakeel Ahmed</span>
              <span className="font-mono">MSPC Reg No. 375736</span>
            </div>

          </div>

        </div>

      </main>
    </div>
  );
}

export default AcademicCVPage;
