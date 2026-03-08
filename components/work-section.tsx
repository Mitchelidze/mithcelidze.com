"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function WorkSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-10 w-full">
      {/* Left Column */}
      <div className="md:col-span-4 lg:col-span-5 flex flex-col gap-6 pr-6 md:pr-8 lg:pr-10">
        <h2 className="text-base font-medium text-foreground">
          Scan the highlighted work.
        </h2>
      </div>

      {/* Right Column — Carousel */}
      <div className="md:col-span-8 lg:col-span-7 flex flex-col gap-8 mt-4 md:mt-0">
        <Carousel
          opts={{
            align: "start",
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-6 md:-ml-8">
            {/* Item 1 */}
            <CarouselItem className="pl-6 md:pl-8 md:basis-[90%] lg:basis-[85%] xl:basis-[80%]">
              <div className="flex flex-col gap-6 bg-muted/40 rounded-[2.5rem] p-10 md:p-12 h-[600px]">
                <div className="flex-1 w-full bg-muted/60 rounded-3xl mt-6 flex items-center justify-center relative overflow-hidden">
                  <div className="w-full h-full absolute inset-0 bg-[#e5e5e5] dark:bg-gray-800" />
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-sm">
                  Now with a 50% louder speaker and up to a 1.5x greater Something it's easter than ever to keep track of what matters.
                </p>
              </div>
            </CarouselItem>

            {/* Item 2 */}
            <CarouselItem className="pl-6 md:pl-8 md:basis-[90%] lg:basis-[85%] xl:basis-[80%]">
              <div className="flex flex-col gap-6 bg-muted/40 rounded-[2.5rem] p-10 md:p-12 h-[600px]">
                <div className="flex-1 w-full bg-muted/60 rounded-3xl mt-6 flex items-center justify-center relative overflow-hidden">
                  <div className="w-full h-full absolute inset-0 bg-[#e5e5e5] dark:bg-gray-800" />
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Text
                </p>
              </div>
            </CarouselItem>

            {/* Item 3 */}
            <CarouselItem className="pl-6 md:pl-8 md:basis-[90%] lg:basis-[85%] xl:basis-[80%]">
              <div className="flex flex-col gap-6 bg-muted/40 rounded-[2.5rem] p-10 md:p-12 h-[600px]">
                <div className="flex-1 w-full bg-muted/60 rounded-3xl mt-6 flex items-center justify-center relative overflow-hidden">
                  <div className="w-full h-full absolute inset-0 bg-[#e5e5e5] dark:bg-gray-800" />
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Text
                </p>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
