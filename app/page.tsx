import { ArrowDown } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AboutSection } from "@/components/about-section";

export default function Page() {
  return (
    <div className="min-h-svh w-full p-4 md:p-4 lg:p-4 overflow-x-hidden">
      {/* 2-Column Grid for Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-20 w-full">

        {/* Left Sidebar */}
        <div className="md:col-span-4 lg:col-span-5 pr-6 md:pr-12 lg:pr-20">
          <h1 className="text-xl md:text-2xl font-medium tracking-tight">
            Miranda T.
          </h1>
        </div>

        {/* Right Content */}
        <div className="md:col-span-8 lg:col-span-7 flex flex-col gap-16 lg:gap-24">

          {/* Top Section */}
          <div className="flex flex-col gap-8 md:gap-12 pr-6 md:pr-12 lg:pr-20">
            {/* Navigation */}
            <nav className="flex items-center gap-6 text-muted-foreground text-base md:text-lg">
              <a href="#" className="hover:text-foreground transition-colors">Work</a>
              <a href="#" className="hover:text-foreground transition-colors">Resume</a>
              <a href="#" className="hover:text-foreground transition-colors">About</a>
            </nav>

            {/* Hero Copy */}
            <div className="max-w-3xl flex flex-col gap-8">
              <h2 className="text-2xl md:text-4xl lg:text-2xl font-medium leading-[1.2] tracking-tight text-foreground/90">
                Senior product designer with interface design training for working designers. A proven framework that helps you articulate design decisions, execute your taste, and finish work to the level it deserves.
              </h2>
              <ArrowDown className="w-8 h-8" strokeWidth={1.5} />


            </div>
          </div>

          {/* Carousel Section */}
          <div className="flex flex-col gap-8 mt-4 md:mt-12">
            <h3 className="text-xl font-medium tracking-tight pr-6 md:pr-12 lg:pr-20">Explore the recent work</h3>

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
                    <div className="flex flex-col gap-4">
                      <h4 className="text-3xl font-bold tracking-tight">Title</h4>
                      <p className="text-muted-foreground text-lg leading-relaxed max-w-sm">
                        Now with a 50% louder speaker and up to a 1.5x greater Something it's easter than ever to keep track of what matters.
                      </p>
                    </div>
                    {/* Image Placeholder */}
                    <div className="flex-1 w-full bg-muted/60 rounded-3xl mt-6 flex items-center justify-center relative overflow-hidden">
                      <div className="w-full h-full absolute inset-0 bg-[#e5e5e5] dark:bg-gray-800"></div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Item 2 */}
                <CarouselItem className="pl-6 md:pl-8 md:basis-[90%] lg:basis-[85%] xl:basis-[80%]">
                  <div className="flex flex-col gap-6 bg-muted/40 rounded-[2.5rem] p-10 md:p-12 h-[600px]">
                    <div className="flex flex-col gap-4">
                      <h4 className="text-3xl font-bold tracking-tight">Title</h4>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        Scope/Impact
                      </p>
                    </div>
                    {/* Image Placeholder */}
                    <div className="flex-1 w-full bg-muted/60 rounded-3xl mt-6 flex items-center justify-center relative overflow-hidden">
                      <div className="w-full h-full absolute inset-0 bg-[#e5e5e5] dark:bg-gray-800"></div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Item 3 */}
                <CarouselItem className="pl-6 md:pl-8 md:basis-[90%] lg:basis-[85%] xl:basis-[80%]">
                  <div className="flex flex-col gap-6 bg-muted/40 rounded-[2.5rem] p-10 md:p-12 h-[600px]">
                    <div className="flex flex-col gap-4">
                      <h4 className="text-3xl font-bold tracking-tight">Third Project</h4>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        Additional examples.
                      </p>
                    </div>
                    {/* Image Placeholder */}
                    <div className="flex-1 w-full bg-muted/60 rounded-3xl mt-6 flex items-center justify-center relative overflow-hidden">
                      <div className="w-full h-full absolute inset-0 bg-[#e5e5e5] dark:bg-gray-800"></div>
                    </div>
                  </div>
                </CarouselItem>

              </CarouselContent>
            </Carousel>
          </div>

        </div>
      </div>

      {/* About Section */}
      <div className="w-full mt-16 md:mt-24 border-t border-border pt-4">
        <AboutSection />
      </div>

      {/* Capabilities Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-20 w-full mt-16 md:mt-24 border-t border-border pt-4">
        <div className="md:col-span-4 lg:col-span-5 pr-6 md:pr-12 lg:pr-20">
          <h2 className="text-base font-medium text-foreground">
            Capabilities.
          </h2>
        </div>
        <div className="md:col-span-8 lg:col-span-7 pr-6 md:pr-12 lg:pr-20">
          <div className="flex flex-wrap gap-2 md:gap-3">
            {Array(6).fill("Product Design").map((text, i) => (
              <div
                key={i}
                className="px-4 py-2 md:px-5 md:py-2.5 rounded-full border border-foreground/30 text-foreground text-[15px] font-medium transition-colors hover:bg-muted/50 cursor-default"
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Elsewhere & Footer */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-20 w-full mt-16 md:mt-24 mb-12 border-t border-border pt-4">
        <div className="md:col-span-4 lg:col-span-5 pr-6 md:pr-12 lg:pr-20 flex flex-col justify-between">
          <h2 className="text-base font-medium text-foreground">
            Elsewhere.
          </h2>
          <div className="hidden md:block mt-24 md:mt-32 font-medium text-[15px] text-foreground">
            © 2026 Miranda Tchelidze
          </div>
        </div>
        <div className="md:col-span-8 lg:col-span-7 pr-6 md:pr-12 lg:pr-20 flex flex-col">
          <div className="flex gap-6 md:gap-8">
            {["Linkedin", "Youtube", "Medium"].map((link) => (
              <a key={link} href="#" className="font-medium text-foreground/80 hover:text-foreground text-[15px] transition-colors">
                {link}
              </a>
            ))}
          </div>
          <div className="md:hidden mt-24 md:mt-32 font-medium text-[15px] text-foreground">
            © 2026 Miranda Tchelidze
          </div>
        </div>
      </div>
    </div>
  )
}
