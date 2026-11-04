"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CertificateItem } from "@/data/portfolioData";
import { 
  X, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Download, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  ShieldCheck, 
  Calendar, 
  Hash, 
  Sparkles,
  SlidersHorizontal,
  Eye
} from "lucide-react";

interface CertificateLightboxProps {
  certificate: CertificateItem | null;
  allCertificates: CertificateItem[];
  onClose: () => void;
  onNavigate: (cert: CertificateItem) => void;
}

export function CertificateLightbox({
  certificate,
  allCertificates,
  onClose,
  onNavigate,
}: CertificateLightboxProps) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [showBack, setShowBack] = useState(false);
  const [isEnhanced, setIsEnhanced] = useState(true);

  // Reset transform state whenever certificate changes
  useEffect(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setShowBack(false);
  }, [certificate]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!certificate) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        const idx = allCertificates.findIndex((c) => c.id === certificate.id);
        if (idx > 0) onNavigate(allCertificates[idx - 1]);
        else onNavigate(allCertificates[allCertificates.length - 1]);
      }
      if (e.key === "ArrowRight") {
        const idx = allCertificates.findIndex((c) => c.id === certificate.id);
        if (idx < allCertificates.length - 1) onNavigate(allCertificates[idx + 1]);
        else onNavigate(allCertificates[0]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [certificate, allCertificates, onClose, onNavigate]);

  if (!certificate) return null;

  const currentIdx = allCertificates.findIndex((c) => c.id === certificate.id);
  const activeImage = showBack && certificate.backImage ? certificate.backImage : certificate.image;

  // Zoom controls
  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.35, 3.5));
  const handleZoomOut = () => {
    setScale((prev) => {
      const next = Math.max(prev - 0.35, 1);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };
  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || scale <= 1) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  // CSS Document Enhancement Filter (Boosts ink contrast, council stamps, and signature clarity)
  const imageFilterStyle = isEnhanced
    ? { filter: "contrast(1.15) brightness(0.97) saturate(1.06) drop-shadow(0 10px 25px rgba(0,0,0,0.5))" }
    : { filter: "drop-shadow(0 10px 25px rgba(0,0,0,0.5))" };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/92 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Top Floating Control Bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        
        {/* Left: Certificate Indicator & Category */}
        <div className="pointer-events-auto flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/95 border border-slate-700/80 text-white text-xs shadow-xl">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span className="font-semibold">{currentIdx + 1} / {allCertificates.length}</span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-300 truncate max-w-[180px] sm:max-w-xs">{certificate.category}</span>
        </div>

        {/* Right Toolbar: Enhancement Toggle, Flip Card, Zoom, Download, Close */}
        <div className="pointer-events-auto flex items-center gap-2 flex-wrap">
          
          {/* Document Clarity Filter Toggle */}
          <button
            onClick={() => setIsEnhanced(!isEnhanced)}
            type="button"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all shadow-lg ${
              isEnhanced
                ? "bg-emerald-600 text-white"
                : "bg-slate-900/90 hover:bg-slate-800 text-slate-300 border border-slate-700/80"
            }`}
            title="Toggle HD Contrast & Ink Clarity Enhancement"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>{isEnhanced ? "HD Contrast: ON" : "Original Scan"}</span>
          </button>

          {/* Flip Card Toggle for MSPC ID */}
          {certificate.hasBack && (
            <button
              onClick={() => setShowBack(!showBack)}
              type="button"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all shadow-lg ${
                showBack
                  ? "bg-teal-600 text-white"
                  : "bg-slate-900/90 hover:bg-slate-800 text-teal-300 border border-slate-700/80"
              }`}
              title="Flip to Front/Back of Identity Card"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{showBack ? "Back (Click for Front)" : "Front (Click for Back)"}</span>
            </button>
          )}

          {/* Zoom In */}
          <button
            onClick={handleZoomIn}
            type="button"
            className="p-2 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700/80 shadow-lg transition-colors"
            title="Zoom In (+)"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          {/* Zoom Out */}
          <button
            onClick={handleZoomOut}
            type="button"
            className="p-2 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700/80 shadow-lg transition-colors"
            title="Zoom Out (-)"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          {/* Reset Zoom */}
          <button
            onClick={handleReset}
            type="button"
            className="p-2 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700/80 shadow-lg transition-colors"
            title="Reset Zoom (100%)"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Download Original / High-Res */}
          <a
            href={certificate.imageJpg || activeImage}
            download={`${certificate.id}.jpg`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700/80 shadow-lg transition-colors"
            title="Download Full Resolution Document"
          >
            <Download className="w-4 h-4" />
          </a>

          {/* Close Lightbox */}
          <button
            onClick={onClose}
            type="button"
            className="p-2 rounded-full bg-rose-600 hover:bg-rose-700 text-white shadow-lg transition-colors"
            title="Close Viewer (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Prev / Next Navigation Arrows */}
      <button
        onClick={() => {
          const prevIdx = currentIdx > 0 ? currentIdx - 1 : allCertificates.length - 1;
          onNavigate(allCertificates[prevIdx]);
        }}
        type="button"
        aria-label="Previous Certificate"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700/80 shadow-xl transition-all hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => {
          const nextIdx = currentIdx < allCertificates.length - 1 ? currentIdx + 1 : 0;
          onNavigate(allCertificates[nextIdx]);
        }}
        type="button"
        aria-label="Next Certificate"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700/80 shadow-xl transition-all hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Viewport with Pan / Zoom */}
      <div
        className="relative w-full h-full flex items-center justify-center p-8 sm:p-14 overflow-hidden select-none cursor-default"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "default" }}
      >
        <div
          className="relative max-w-full max-h-[78vh] transition-transform duration-75 flex items-center justify-center"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={activeImage}
            alt={certificate.title}
            className="max-w-[92vw] sm:max-w-[85vw] max-h-[74vh] object-contain rounded-lg shadow-2xl border border-slate-800 pointer-events-none transition-all duration-300"
            style={imageFilterStyle}
            draggable={false}
          />
        </div>
      </div>

      {/* Bottom Info Sheet */}
      <div className="absolute bottom-4 left-4 right-4 z-20 max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-slate-900/95 backdrop-blur-md border border-slate-800 text-white shadow-2xl space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-base sm:text-lg font-bold leading-tight flex items-center gap-2">
              <span>{certificate.title}</span>
              {certificate.isFeatured && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Verified Statutory
                </span>
              )}
            </h3>
            <p className="text-xs text-emerald-400 font-medium mt-0.5">
              {certificate.subtitle}
            </p>
          </div>

          {/* Registration / Date badge */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {certificate.regNo && (
              <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 font-mono text-slate-300 flex items-center gap-1.5">
                <Hash className="w-3.5 h-3.5 text-emerald-400" />
                <span>Reg: {certificate.regNo}</span>
              </span>
            )}
            {certificate.date && (
              <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                <span>{certificate.date}</span>
              </span>
            )}
          </div>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 pt-2">
          {certificate.description}
        </p>
      </div>

    </div>
  );
}
