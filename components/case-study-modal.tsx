"use client";

import { useEffect } from "react";
import { X, Link, Image as ImageIcon } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/lib/case-studies";

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
}

export function CaseStudyModal({ study, onClose }: CaseStudyModalProps) {
  const isOpen = study !== null;

  // Lock body scroll while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/40 backdrop-blur-xs transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={study?.title ?? "Case Study"}
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 bg-background rounded-t-3xl",
          "h-[96vh] flex flex-col",
          "shadow-2xl shadow-black/30",
          "transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
          isOpen ? "translate-y-0" : "translate-y-full"
        )}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1 shrink-0">
          <div className="w-10 h-1 rounded-full bg-foreground/20" />
        </div>

        {/* Header actions */}
        <div className="flex items-center justify-between px-6 pt-2 pb-4 shrink-0 border-b border-border/50">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            UX Case Study
          </div>
          <div className="flex items-center gap-2">
            {/* Copy link button */}
            {study && (
              <button
                onClick={() => {
                  const url = `${window.location.origin}${window.location.pathname}?work=${study.slug}`;
                  navigator.clipboard.writeText(url).then(() => {
                    toast.success("Case study link copied to clipboard");
                  });
                }}
                aria-label="Copy link"
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center cursor-pointer",
                  "bg-muted hover:bg-muted/80 text-foreground/70 hover:text-foreground",
                  "transition-colors duration-200"
                )}
              >
                <Link className="w-4 h-4" strokeWidth={2} />
              </button>
            )}

            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close"
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center cursor-pointer",
                "bg-muted hover:bg-muted/80 text-foreground/70 hover:text-foreground",
                "transition-colors duration-200"
              )}
            >
              <X className="w-4 h-4" strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {study && (
            <div className="max-w-4xl mx-auto px-6 md:px-10 py-8 flex flex-col gap-10">
              {/* Hero Banner */}
              <div
                className="w-full rounded-2xl p-8 md:p-12 flex flex-col justify-between gap-8 text-white shadow-md"
                style={{ backgroundColor: study.bgColor }}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-semibold tracking-wide backdrop-blur-sm">
                    {study.company}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-semibold tracking-wide backdrop-blur-sm">
                    {study.duration}
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                    {study.title}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl font-medium text-white/90 leading-snug">
                    {study.headline}
                  </p>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/20">
                  {study.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-white/10 text-xs font-medium text-white/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Meta Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-black/[0.03] border border-black/10 text-sm">
                <div>
                  <div className="text-xs text-muted-foreground font-medium mb-1">Company</div>
                  <div className="font-semibold text-foreground">{study.company}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-medium mb-1">Role</div>
                  <div className="font-semibold text-foreground">{study.role}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-medium mb-1">Timeline</div>
                  <div className="font-semibold text-foreground">{study.duration}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-medium mb-1">Deliverables</div>
                  <div className="font-semibold text-foreground">UX & System Design</div>
                </div>
              </div>

              {/* Key Metrics */}
              {study.keyMetrics.length > 0 && (
                <div className="flex flex-col gap-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Key Outcomes & Impact
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {study.keyMetrics.map((m, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-2xl bg-black/[0.03] border border-black/10 flex flex-col gap-1"
                      >
                        <span className="text-2xl md:text-3xl font-extrabold text-foreground">
                          {m.value}
                        </span>
                        <span className="text-xs font-medium text-muted-foreground">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Overview */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Overview
                </h3>
                <p className="text-base sm:text-lg leading-relaxed text-foreground/90 font-normal">
                  {study.overview}
                </p>
              </div>

              {/* Case Study Sections */}
              <div className="flex flex-col gap-12 pt-4 border-t border-border/70">
                {study.sections.map((section, idx) => (
                  <div key={idx} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                        {section.title}
                      </h3>
                      {section.subtitle && (
                        <p className="text-sm font-medium text-muted-foreground">
                          {section.subtitle}
                        </p>
                      )}
                    </div>

                    {/* Paragraphs */}
                    <div className="flex flex-col gap-4 text-base leading-relaxed text-foreground/85">
                      {section.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>

                    {/* Gray Image Placeholder */}
                    <div className="w-full my-4 p-8 md:p-12 rounded-2xl bg-black/[0.04] border border-black/10 flex flex-col items-center justify-center gap-3 text-center min-h-[320px] transition-all hover:bg-black/[0.06]">
                      <div className="w-14 h-14 rounded-2xl bg-black/10 flex items-center justify-center text-foreground/60 mb-1">
                        <ImageIcon className="w-7 h-7 stroke-[1.5]" />
                      </div>
                      <span className="text-sm font-semibold text-foreground/80">
                        {section.placeholderLabel || "UX Wireframe & Interface Mockup Placeholder"}
                      </span>
                      <span className="text-xs text-muted-foreground max-w-md">
                        High-fidelity UI mockups, Figma prototypes, interactive component specs, or user journey recordings will be displayed here.
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Footer Action */}
              <div className="pt-8 pb-12 border-t border-border/70 flex justify-between items-center">
                <span className="text-xs text-muted-foreground font-medium">
                  End of Case Study · {study.company}
                </span>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
