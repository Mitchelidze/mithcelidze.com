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
        <h1 className="text-xl md:text-2xl font-medium tracking-tight">
          Miranda T.
        </h1>
      </div>

      {/* Right Column — Intro */}
      <div className="md:col-span-8 lg:col-span-7 flex flex-col gap-8">
        <h2 className="text-2xl md:text-4xl lg:text-2xl font-medium leading-[1.2] tracking-tight text-foreground/90">
          Senior product designer with interface design training for working designers. A proven framework that helps you articulate design decisions, execute your taste, and finish work to the level it deserves.
          Open to conversations now.
        </h2>
      </div>
    </div>
  );
}
