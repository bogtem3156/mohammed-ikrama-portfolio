"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData, Publication } from "@/data/portfolioData";
import { copyToClipboard } from "@/lib/utils";
import { 
  BookOpen, 
  ExternalLink, 
  Copy, 
  Check, 
  Search, 
  Bookmark, 
  Quote,
  GraduationCap,
  Sparkles,
  ChevronDown,
  ChevronUp
} from "lucide-react";

export function PublicationsSection() {
  const { publications } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [copiedAction, setCopiedAction] = useState<{ id: string; format: "apa" | "vancouver" } | null>(null);

  const filterTabs = ["All", "Scopus", "PubMed", "Nanoformulation Study"];

  const filteredPublications = publications.filter((pub) => {
    // Filter tag
    if (selectedFilter === "Scopus" && !pub.indexedIn.includes("Scopus")) return false;
    if (selectedFilter === "PubMed" && !pub.indexedIn.includes("PubMed")) return false;
    if (selectedFilter === "Nanoformulation Study" && pub.category !== "Nanoformulation Study") return false;

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const inTitle = pub.title.toLowerCase().includes(q);
      const inJournal = pub.journal.toLowerCase().includes(q);
      const inAbstract = pub.abstract.toLowerCase().includes(q);
      const inTags = pub.tags.some((t) => t.toLowerCase().includes(q));
      if (!inTitle && !inJournal && !inAbstract && !inTags) return false;
    }

    return true;
  });

  const handleCopyCitation = async (pub: Publication, format: "apa" | "vancouver") => {
    const textToCopy = format === "apa" ? pub.apaCitation : pub.vancouverCitation;
    const ok = await copyToClipboard(textToCopy);
    if (ok) {
      setCopiedAction({ id: pub.id, format });
      setTimeout(() => setCopiedAction(null), 2500);
    }
  };

  return (
    <section id="publications" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Peer-Reviewed Literature</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Research Publications & Journal Articles
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
            Original investigative manuscripts indexed in global scientific databases including Scopus and PubMed / Web of Science, with verified direct publisher access.
          </p>
        </motion.div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedFilter(tab)}
                type="button"
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedFilter === tab
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative min-w-[260px] sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search title, DOI, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            />
          </div>

        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {filteredPublications.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <p className="text-slate-500 dark:text-slate-400">
                No publications match the current filter or search criteria.
              </p>
            </div>
          ) : (
            filteredPublications.map((pub, idx) => {
              const isExpanded = expandedId === pub.id;

              return (
                <motion.article
                  key={pub.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-300 shadow-xs hover:shadow-lg"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-5">
                    
                    {/* Publication Content */}
                    <div className="space-y-3 flex-1">
                      
                      {/* Badges bar */}
                      <div className="flex flex-wrap items-center gap-2">
                        {pub.indexedIn.map((idxName) => (
                          <span
                            key={idxName}
                            className={`px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide ${
                              idxName === "Scopus"
                                ? "bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20"
                                : "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20"
                            }`}
                          >
                            {idxName} Indexed
                          </span>
                        ))}
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                          {pub.year}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
                          {pub.category}
                        </span>
                        {pub.doiStatus === "publisher-direct" && (
                          <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                            Verified Journal Archive
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                        {pub.title}
                      </h3>

                      {/* Journal & Citation string */}
                      <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                        <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                          {pub.journal}
                        </span>
                        <span className="text-slate-400 mx-2">•</span>
                        <span>{pub.citationString}</span>
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {pub.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Expandable Abstract */}
                      {isExpanded && (
                        <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/70 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed animate-in fade-in duration-200">
                          <p className="font-semibold text-slate-900 dark:text-white mb-1.5 flex items-center gap-1.5">
                            <Bookmark className="w-3.5 h-3.5 text-emerald-600" />
                            Abstract & Key Findings:
                          </p>
                          <p>{pub.abstract}</p>
                          <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-500 font-mono">
                            DOI: {pub.doi}
                          </div>
                        </div>
                      )}

                    </div>

                    {/* Action Buttons Column */}
                    <div className="flex flex-row lg:flex-col items-center lg:items-end gap-2 shrink-0 pt-2 lg:pt-0">
                      
                      {/* Direct Verified Publisher Outbound Link */}
                      <a
                        href={pub.publisherUrl || pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-all w-full lg:w-auto justify-center"
                        title="View direct journal publication record"
                      >
                        <span>Access Journal Record</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      {/* Search on Google Scholar Button */}
                      <a
                        href={pub.scholarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors w-full lg:w-auto justify-center"
                        title="Search citations and indexing on Google Scholar"
                      >
                        <GraduationCap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span>Google Scholar</span>
                      </a>

                      {/* Copy Citation Actions */}
                      <div className="flex items-center gap-1.5 w-full lg:w-auto">
                        <button
                          onClick={() => handleCopyCitation(pub, "apa")}
                          type="button"
                          className="flex-1 lg:flex-none inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all justify-center cursor-pointer active:scale-95 shadow-2xs"
                          title="Copy APA 7th Edition Bibliographic Citation"
                        >
                          {copiedAction?.id === pub.id && copiedAction?.format === "apa" ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                              <span className="text-emerald-600 dark:text-emerald-400 font-bold">Copied APA!</span>
                            </>
                          ) : (
                            <>
                              <Quote className="w-3.5 h-3.5 text-slate-500" />
                              <span>Copy APA</span>
                            </>
                          )}
                        </button>

                        <button
                          onClick={() => handleCopyCitation(pub, "vancouver")}
                          type="button"
                          className="inline-flex items-center gap-1 px-2.5 py-2 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all justify-center cursor-pointer active:scale-95 shadow-2xs"
                          title="Copy Vancouver Citation"
                        >
                          {copiedAction?.id === pub.id && copiedAction?.format === "vancouver" ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                              <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[11px]">Copied!</span>
                            </>
                          ) : (
                            <span className="text-[11px]">Vancouver</span>
                          )}
                        </button>
                      </div>

                      {/* Toggle Abstract */}
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : pub.id)}
                        type="button"
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                      >
                        <span>{isExpanded ? "Hide Abstract" : "Read Abstract"}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                    </div>

                  </div>
                </motion.article>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
}
