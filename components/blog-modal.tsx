"use client";

import { useEffect } from "react";
import { X, Link } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/lib/blog-posts";

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export function BlogModal({ post, onClose }: BlogModalProps) {
  const isOpen = post !== null;

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
          "fixed inset-0 z-40 bg-black/30 transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={post?.title ?? "Blog post"}
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 bg-background rounded-t-3xl",
          "h-[96vh] flex flex-col",
          "shadow-2xl shadow-black/20",
          "transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
          isOpen ? "translate-y-0" : "translate-y-full"
        )}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1 shrink-0">
          <div className="w-10 h-1 rounded-full bg-foreground/20" />
        </div>

        {/* Header actions */}
        <div className="flex items-center justify-end gap-2 px-5 pt-2 pb-4 shrink-0">
          {/* Copy link button */}
          {post && (
            <button
              onClick={() => {
                const url = `${window.location.origin}${window.location.pathname}?post=${post.slug}`;
                navigator.clipboard.writeText(url).then(() => {
                  toast.success("Link copied");
                });
              }}
              aria-label="Copy link"
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center",
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
              "w-8 h-8 rounded-full flex items-center justify-center",
              "bg-muted hover:bg-muted/80 text-foreground/70 hover:text-foreground",
              "transition-colors duration-200"
            )}
          >
            <X className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-2xl mx-auto px-6 pb-20">
            {post && (
              <>
                {/* Meta */}
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readingTime}</span>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-medium tracking-tight leading-[1.15] mb-10">
                  {post.title}
                </h1>

                {/* Body */}
                <div className="text-[17px] leading-[1.75] text-foreground/85 space-y-6">
                  {post.content.split("\n\n").map((paragraph, i) => {
                    // Render **bold** markdown inline
                    const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
                    return (
                      <p key={i}>
                        {parts.map((part, j) =>
                          part.startsWith("**") && part.endsWith("**") ? (
                            <strong key={j} className="font-semibold text-foreground">
                              {part.slice(2, -2)}
                            </strong>
                          ) : (
                            part
                          )
                        )}
                      </p>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
