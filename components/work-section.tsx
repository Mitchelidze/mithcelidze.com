"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

export function WorkSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-10 w-full">
      {/* Left Column */}
      <div className="md:col-span-4 lg:col-span-5 flex flex-col gap-6 pr-6 md:pr-8 lg:pr-10">
        <h2 className="text-base font-medium text-white">
          Scan the highlighted work.
        </h2>
      </div>

      {/* Right Column — Carousel */}
      <div className="md:pt-8 md:col-span-8 lg:col-span-7 flex flex-col gap-8 ">
        <Carousel
          opts={{
            align: "start",
            dragFree: true,
          }}
          plugins={[WheelGesturesPlugin()]}
          className="w-full"
        >
          <CarouselContent className="-ml-6 md:-ml-8">
            {/* #1 AI Chat */}
            <CarouselItem className="pl-6 max-w-[580px] md:pl-8 basis-[80%] md:basis-[90%] lg:basis-[85%] xl:basis-[80%]">
              <div className="flex flex-col gap-6 bg-[#00ADEE] rounded-xl p-10 md:p-12 h-[600px]">
                <p className="text-xl font-medium text-white">Led the design of the TBC bank’s first AI-driven chat experience for 5M+ users, creating a new touchpoint for engagement and automating routine support queries.</p>
                <div className="flex mt-4">
                  <Image
                    src="/tbcappicon.svg"
                    alt="TBC Mobile Bank App Icon"
                    width={48}
                    height={48}
                    className="object-contain"
                    priority
                  />
                  <div className="flex flex-col items-start"><p className="pl-2 text-md font-bold text-white">TBC Mobile Bank</p><p className="pl-2 text-md font-medium text-white">114k ratings · 4.9 stars</p></div>
                </div>
              </div>
            </CarouselItem>

            {/* #2 ThundeAct */}
            <CarouselItem className="pl-6 max-w-[580px] md:pl-8 basis-[80%] md:basis-[90%] lg:basis-[85%] xl:basis-[80%]">
              <div className="flex flex-col gap-6 bg-[#5A3DED] rounded-xl p-10 md:p-12 h-[600px]">
                <p className="text-xl font-medium text-white">Designed MVP for the customer‑interaction AI analytics startup that helped businesses extract insights from customer data across many systems instantly.</p>
                <div className="flex mt-4 items-center text-white">
                  <p className="text-md font-bold">0-1</p>
                  <span aria-hidden="true">&nbsp;·&nbsp;</span>
                  <p className="text-md font-bold">MVP design</p>
                </div>
              </div>
            </CarouselItem>

            {/* #3 Fly.ge */}
            <CarouselItem className="pl-6 max-w-[580px] md:pl-8 basis-[80%] md:basis-[90%] lg:basis-[85%] xl:basis-[80%]">
              <div className="flex flex-col gap-6  bg-[#011946] rounded-xl p-10 md:p-12 h-[600px]">
                <p className="text-xl font-base text-white">Designed &ldquo;Find the cheapest day to fly&rdquo; and other core user journeys for the largest travel agency - www.fly.ge, increasing conversion and user satisfaction.</p>
                <div className="flex flex-col mt-4 md:flex-row md:items-center text-white">
                  <p className="text-md font-bold">User Experience Research</p>
                  <span className="hidden md:inline" aria-hidden="true">&nbsp;·&nbsp;</span>
                  <p className="text-md font-bold">High-Fidelity Prototyping</p>
                </div>
              </div>
            </CarouselItem>

            {/* #4 Consumer Loans */}
            <CarouselItem className="pl-6 max-w-[580px] md:pl-8 basis-[80%] md:basis-[90%] lg:basis-[85%] xl:basis-[80%]">
              <div className="flex flex-col gap-6  bg-[#1A1A1A] rounded-xl p-10 md:p-12 h-[600px] text-white">
                <p className="text-xl font-base">Optimized secured lending journeys by refactoring complex regulatory requirements and turned them into conversion‑driven user experiences targeting +12% increase.</p>
                <div className="flex flex-col mt-4 md:flex-row md:items-center">
                  <p className="text-md font-bold">UX Audit</p>
                  <span className="hidden md:inline" aria-hidden="true">&nbsp;·&nbsp;</span>
                  <p className="text-md font-bold">Conversion-driven interaction design</p>
                </div>
              </div>
            </CarouselItem>

            {/* #5 Multi-account login   */}
            <CarouselItem className="pl-6 max-w-[580px] md:pl-8 basis-[80%] md:basis-[90%] lg:basis-[85%] xl:basis-[80%]">
              <div className="flex flex-col gap-6  bg-[#0E437F] rounded-xl p-10 md:p-12 h-[600px] text-white">
                <p className="text-xl font-base">Designed multi-account login for business owners and finance professionals to securely access and manage multiple bank accounts.</p>
                <div className="flex flex-col mt-4 md:flex-row md:items-center">
                  <p className="text-md font-bold">Top Task Analysis</p>
                  <span className="hidden md:inline" aria-hidden="true">&nbsp;·&nbsp;</span>
                  <p className="text-md font-bold">System Thinking</p>
                </div>
              </div>
            </CarouselItem>
            {/* #6 Multi-account login   */}
            <CarouselItem className="pl-6 max-w-[580px] md:pl-8 basis-[80%] md:basis-[90%] lg:basis-[85%] xl:basis-[80%]">
              <div className="flex flex-col gap-6  bg-[#056253] rounded-xl p-10 md:p-12 h-[600px]">
                <p className="text-xl font-base text-white">Conducted a UX audit to design an intuitive, user‑friendly booking experience that supports 2.7M+ car owners in scheduling inspections effortlessly.</p>
                <div className="flex flex-col mt-4 md:flex-row md:items-center text-white">
                  <p className="text-md font-bold">Usability Testing</p>
                  <span className="hidden md:inline" aria-hidden="true">&nbsp;·&nbsp;</span>
                  <p className="text-md font-bold">Heuristic Evaluation</p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>

      </div>
    </div >
  );
}
