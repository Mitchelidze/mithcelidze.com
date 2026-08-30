"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { caseStudies } from "@/lib/case-studies";
import type { CaseStudy } from "@/lib/case-studies";
import { CaseStudyModal } from "@/components/case-study-modal";

export function WorkSection() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(() => {
    if (typeof window === "undefined") return null;
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("work");
    return slug ? (caseStudies.find((c) => c.slug === slug) ?? null) : null;
  });

  const openStudy = (study: CaseStudy) => {
    setSelectedStudy(study);
    const url = `${window.location.pathname}?work=${study.slug}`;
    history.pushState(null, "", url);
  };

  const closeStudy = () => {
    setSelectedStudy(null);
    history.pushState(null, "", window.location.pathname);
  };

  return (
    <>
      <div className="w-full flex flex-col gap-6 md:gap-8">
        {/* Section Title */}
        <h2 className="text-base font-medium text-foreground">
          Scan the highlighted work.
        </h2>

        {/* Carousel */}
        <div className="w-full">
          <Carousel
            opts={{
              align: "start",
              dragFree: true,
            }}
            plugins={[WheelGesturesPlugin()]}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {caseStudies.map((study) => (
                <CarouselItem
                  key={study.slug}
                  className="pl-4 md:pl-6 basis-[85%] sm:basis-[70%] md:basis-[55%] lg:basis-[45%] xl:basis-[40%]"
                >
                  <div
                    onClick={() => openStudy(study)}
                    className="flex flex-col justify-between rounded-2xl p-8 md:p-10 h-[520px] shadow-sm cursor-pointer group hover:scale-[1.015] hover:shadow-xl transition-all duration-300 select-none"
                    style={{ backgroundColor: study.bgColor }}
                  >
                    <p className="text-xl md:text-2xl font-medium text-white leading-snug group-hover:opacity-95 transition-opacity">
                      {study.headline}
                    </p>

                    <div className="flex flex-col gap-4">
                      {/* Skill Tags */}
                      <div className="flex flex-wrap items-center text-white/90 text-sm font-semibold tracking-wide gap-1">
                        {study.tags.map((tag, idx) => (
                          <span key={idx}>
                            {tag}
                            {idx < study.tags.length - 1 && (
                              <span aria-hidden="true">&nbsp;·&nbsp;</span>
                            )}
                          </span>
                        ))}
                      </div>

                      {/* App Icon / Sub Details (if present) */}
                      {study.appIcon && (
                        <div className="flex items-center gap-3 pt-2 border-t border-white/20">
                          <Image
                            src={study.appIcon}
                            alt={`${study.company} App Icon`}
                            width={44}
                            height={44}
                            className="object-contain shrink-0"
                            priority
                          />
                          <div className="flex flex-col">
                            <p className="text-sm font-bold text-white">
                              {study.company}
                            </p>
                            {study.appIconSub && (
                              <p className="text-xs font-medium text-white/90">
                                {study.appIconSub}
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      {/* UX Case Study Modal */}
      <CaseStudyModal study={selectedStudy} onClose={closeStudy} />
    </>
  );
}
