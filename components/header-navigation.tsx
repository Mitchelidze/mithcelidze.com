"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
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
  // { href: "#blog", label: "Blog", id: "blog" },
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

function HeaderLogo() {
  return (
    <svg
      viewBox="0 0 139 64"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 md:h-7 w-auto text-foreground hover:opacity-80 transition-opacity"
      aria-label="Home logo"
    >
      <title>Logo</title>
      <path d="M84.3504 64H48.1695V47.315L32.569 63.9989L0 63.9841V29.9515L28.31 0H67.4439V15.9214L82.6881 0H116.593V26.1874H139V64H99.1163V48.208L84.3504 64Z" />
    </svg>
  );
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
    }, 100);
  };

  const handleContactClick = () => {
    setOpen(false);
    trigger();
  };

  return (
    <header className="sticky top-4 z-50 w-full flex justify-center">
      {/* Floating Apple-Glass Pill Navigation Bar */}
      <div className="w-full max-w-4xl rounded-full bg-white/85 backdrop-blur-xl border border-white/80 shadow-lg shadow-black/[0.04] px-5 py-2.5 md:px-7 md:py-3 flex items-center justify-between transition-all duration-300">
        
        {/* Logo */}
        <Link href="/" className="cursor-pointer flex items-center pr-4">
          <HeaderLogo />
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          {NAV_LINKS.map(({ href, label, id }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={cn(
                  "px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer select-none",
                  isActive
                    ? "bg-black/5 text-foreground font-semibold shadow-2xs"
                    : "text-foreground/75 hover:text-foreground hover:bg-black/5"
                )}
              >
                {label}
              </a>
            );
          })}
          <button
            onClick={trigger}
            className="px-4 py-1.5 rounded-full text-foreground/75 hover:text-foreground hover:bg-black/5 transition-all duration-200 font-medium cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        <div className="flex md:hidden items-center">
          <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
            <DropdownMenuTrigger id="mobile-nav-menu-trigger" asChild>
              <button
                id="mobile-nav-menu-button"
                aria-label="Open menu"
                className="p-1.5 text-foreground hover:bg-black/5 rounded-full transition-colors outline-none"
              >
                <Menu className="w-5 h-5" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              sideOffset={12}
              onCloseAutoFocus={(e) => e.preventDefault()}
              className="w-48 p-2 rounded-2xl flex flex-col gap-1 border border-white/80 bg-white/95 backdrop-blur-xl shadow-xl"
            >
              {NAV_LINKS.map(({ href, label, id }) => {
                const isActive = activeSection === id;
                return (
                  <DropdownMenuItem key={href} asChild>
                    <a
                      href={href}
                      onClick={(e) => handleNavClick(e, href)}
                      className={cn(
                        "flex items-center px-3 py-2.5 text-base rounded-xl transition-colors cursor-pointer w-full outline-none",
                        isActive
                          ? "bg-black/5 text-foreground font-semibold"
                          : "text-foreground/75 hover:bg-black/5 hover:text-foreground focus:bg-black/5 focus:text-foreground"
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
                  className="w-full flex items-center px-3 py-2.5 text-base rounded-xl text-foreground/75 hover:bg-black/5 hover:text-foreground focus:bg-black/5 focus:text-foreground transition-colors cursor-pointer text-left outline-none"
                >
                  <span className="flex-1">Contact</span>
                  <Copy className="w-4 h-4 ml-2 opacity-60" />
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Toast portal (shared, rendered once) */}
      {ToastPortal}
    </header>
  );
}
