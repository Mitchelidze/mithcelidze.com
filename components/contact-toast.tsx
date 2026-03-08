"use client";

import { useState, useEffect } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

const EMAIL = "mitchelidze@gmail.com";

export function ContactButton() {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const timerRef = { current: null as ReturnType<typeof setTimeout> | null };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setVisible(true);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setVisible(false);
      setTimeout(() => setCopied(false), 300);
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <>
      <a
        href="#"
        onClick={handleClick}
        className="hover:text-foreground transition-colors"
      >
        Contact
      </a>

      {/* Toast */}
      <div
        className={cn(
          "fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl",
          "bg-background border border-border shadow-lg shadow-black/10",
          "text-sm text-foreground backdrop-blur-sm",
          "transition-all duration-300 ease-out",
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 pointer-events-none"
        )}
      >
        <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-muted shrink-0">
          {copied ? (
            <Check className="w-3.5 h-3.5 text-foreground" strokeWidth={2.5} />
          ) : (
            <Copy className="w-3.5 h-3.5 text-muted-foreground" />
          )}
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="font-medium leading-none">{EMAIL}</span>
          <span className="text-xs text-muted-foreground leading-none mt-1">
            Copied to clipboard
          </span>
        </div>
      </div>
    </>
  );
}
