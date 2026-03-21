"use client";

import Link from "next/link";

export function HeroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-10 w-full">
      {/* Left Column */}
      <div className="md:col-span-4 lg:col-span-5 flex flex-col gap-6 pr-6 md:pr-8 lg:pr-10">
        <h1 className="hidden md:block text-xl md:text-2xl font-bold tracking-tight">
          <Link href="/" className="cursor-pointer hover:opacity-80 transition-opacity">Miranda T.</Link>
        </h1>
      </div>

      {/* Right Column — Intro */}
      <div className="md:col-span-8 lg:col-span-7 flex flex-col gap-8">
        <h2 className="text-2xl max-w-[680px] lg:text-2xl font-medium leading-[1.2] tracking-tight text-foreground/90">
          Senior Product Designer with a foundation in chemistry and 5+ years bringing clarity through design language across financial and consumer-facing products used by millions.
        </h2>
      </div>
    </div>
  );
}
