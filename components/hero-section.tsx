"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function HeroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-10 w-full">
      {/* Left Column */}
      <div className="md:col-span-4 lg:col-span-5 flex flex-col gap-6 pr-6 md:pr-8 lg:pr-10">
        <h1 className="hidden md:block text-xl md:text-2xl font-bold tracking-tight">
          <a href="/" className="cursor-pointer hover:opacity-80 transition-opacity">Miranda T.</a>
        </h1>
      </div>

      {/* Right Column — Intro */}
      <div className="md:col-span-8 lg:col-span-7 flex flex-col gap-8">
        <h2 className="text-2xl md:text-4xl lg:text-2xl font-medium leading-[1.2] tracking-tight text-foreground/90">
          Senior Product Designer with 5+ years of experience transforming complex fintech top user tasks into user-centered experiences that improve profitability. Utilizing data to guide product decisions and experimentation.  I specialize in the "hard stuff"—the high-stakes, high-trust environments where usability and performance are critical. Open to conversations now.
        </h2>
      </div>
    </div>
  );
}
