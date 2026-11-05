"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import { 
  FileText, 
  Menu, 
  X, 
  GraduationCap 
} from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Research", href: "#research" },
    { name: "Publications", href: "#publications" },
    { name: "Teaching", href: "#teaching" },
    { name: "Credentials", href: "#credentials" },
    { name: "Timeline", href: "#timeline" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const targetEl = document.getElementById(targetId);

      if (targetEl) {
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });

        window.history.pushState(null, "", href);
      } else {
        // If target element not in current DOM (e.g. on /cv), redirect to home page section
        window.location.href = `/${href}`;
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-[#0c1222]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-xs"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo / Portrait Avatar Branding */}
          <a 
            href="#about"
            onClick={(e) => handleNavClick(e, "#about")}
            className="group flex items-center gap-2.5 sm:gap-3 transition-transform hover:scale-[1.01] cursor-pointer"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-emerald-600/80 dark:border-emerald-500/80 shadow-xs shrink-0 bg-emerald-50 dark:bg-emerald-950">
              <Image
                src="/assets/profile/photo-thumb.webp"
                alt="Mohammed Ikrama"
                width={40}
                height={40}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base tracking-tight leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Mohammed Ikrama
              </span>
              <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium leading-tight truncate max-w-[170px] sm:max-w-none">
                Asst. Professor of Pharmacology
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-emerald-700 dark:text-slate-300 dark:hover:text-emerald-400 rounded-lg hover:bg-slate-100/70 dark:hover:bg-slate-800/60 transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/cv"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/60 transition-all shadow-2xs cursor-pointer"
            >
              <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Academic CV</span>
            </a>

            <ThemeToggle />
          </div>

          {/* Mobile hamburger menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#0c1222]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-emerald-600 dark:text-slate-200 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <a
              href="/cv"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-emerald-600 text-white font-medium text-sm shadow-xs hover:bg-emerald-700 transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>View & Print Academic CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
