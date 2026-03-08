"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, ExternalLink, Copy } from "lucide-react";
import { ContactButton, useContactToast } from "@/components/contact-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#work", label: "Work", id: "work" },
  { href: "#about", label: "About", id: "about" },
  { href: "#blog", label: "Blog", id: "blog" },
  { href: "#resume", label: "Resume", id: "resume" },
];

// ─── Active section hook ─────────────────────────────────────────────────────
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>(ids[0]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const ratios: Record<string, number> = {};

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios[entry.target.id] = entry.intersectionRatio;
        });
        const best = Object.entries(ratios).sort((a, b) => b[1] - a[1])[0];
        if (best && best[1] > 0) setActive(best[0]);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [ids]);

  return active;
}

// ─── Component ───────────────────────────────────────────────────────────────
export function HeaderNavigation() {
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection(NAV_LINKS.map((l) => l.id));
  const { trigger, ToastPortal } = useContactToast();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => {
      const id = href.replace("#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  const handleContactClick = () => {
    setOpen(false);
    trigger();
  };

  return (
    <div className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md">
      {/* ── Mobile bar ─────────────────────────────────────────── */}
      <div className="flex md:hidden items-center gap-3 py-2">
        <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
          <DropdownMenuTrigger asChild>
            <button
              aria-label="Open menu"
              className="text-foreground hover:text-muted-foreground transition-colors outline-none"
            >
              <Menu className="w-5 h-5" />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="start"
            sideOffset={16}
            onCloseAutoFocus={(e) => e.preventDefault()}
            className="w-48 p-2 rounded-xl flex flex-col gap-1 border border-border bg-background/95 backdrop-blur-md shadow-lg"
          >
            {NAV_LINKS.map(({ href, label, id }) => {
              const isActive = activeSection === id;
              return (
                <DropdownMenuItem key={href} asChild>
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className={cn(
                      "flex items-center px-3 py-2.5 text-base rounded-lg transition-colors cursor-pointer w-full outline-none",
                      isActive
                        ? "bg-muted/50 text-foreground font-medium"
                        : "text-muted-foreground hover:bg-muted/30 hover:text-foreground focus:bg-muted/30 focus:text-foreground"
                    )}
                  >
                    <span className="flex-1">{label}</span>
                    {id === "resume" && (
                      <ExternalLink className="w-4 h-4 ml-2 opacity-60" />
                    )}
                  </a>
                </DropdownMenuItem>
              );
            })}

            <DropdownMenuItem asChild>
              <button
                onClick={handleContactClick}
                className="w-full flex items-center px-3 py-2.5 text-base rounded-lg text-muted-foreground hover:bg-muted/30 hover:text-foreground focus:bg-muted/30 focus:text-foreground transition-colors cursor-pointer text-left outline-none"
              >
                <span className="flex-1">Contact</span>
                <Copy className="w-4 h-4 ml-2 opacity-60" />
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <a href="/" className="text-foreground text-xl font-bold tracking-tight cursor-pointer drop-shadow-sm hover:opacity-80 transition-opacity">
          Miranda T.
        </a>
      </div>

      {/* ── Desktop bar ────────────────────────────────────────── */}
      <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-10 py-4 -my-4">
        <div className="col-span-4 lg:col-span-5 pr-6 md:pr-8 lg:pr-10" />
        <div className="col-span-8 lg:col-span-7 flex flex-col gap-16 lg:gap-24">
          <div className="flex flex-col gap-8 md:gap-4 pr-6 md:pr-4 lg:pr-4">
            <nav className="flex items-center gap-6 text-sm">
              {NAV_LINKS.map(({ href, label, id }) => (
                <a
                  key={href}
                  href={href}
                  className={cn(
                    "transition-colors",
                    activeSection === id
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {label}
                </a>
              ))}
              <ContactButton />
            </nav>
          </div>
        </div>
      </div>

      {/* Toast portal (shared, rendered once) */}
      {ToastPortal}
    </div>
  );
}
