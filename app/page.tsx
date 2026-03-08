import { AboutSection } from "@/components/about-section";
import { HeroSection } from "@/components/hero-section";
import { WorkSection } from "@/components/work-section";
import { BlogSection } from "@/components/blog-section";
import { HeaderNavigation } from "@/components/header-navigation";

export default function Page() {
  return (
    <div id="work" className="min-h-svh w-full p-4 md:p-4 lg:p-4 overflow-x-clip">
      {/* Header Navigation */}
      <HeaderNavigation />

      {/* Hero Section */}
      <div className="w-full mt-0.5 md:mt-0.5 pt-4">
        <HeroSection />
      </div>

      {/* Work Section */}
      <div className="w-full mt-48 md:mt-64 border-t border-border pt-4">
        <WorkSection />
      </div>

      {/* About Section */}
      <div id="about" className="w-full mt-16 md:mt-24 border-t border-border pt-4">
        <AboutSection />
      </div>

      {/* Capabilities Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-10 w-full mt-16 md:mt-24 border-t border-border pt-4">
        <div className="md:col-span-4 lg:col-span-5 pr-6 md:pr-8 lg:pr-10">
          <h2 className="text-base font-medium text-foreground">
            Capabilities.
          </h2>
        </div>
        <div className="md:col-span-8 lg:col-span-7 pr-6 md:pr-8 lg:pr-10">
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

      {/* Blog Section */}
      <div id="blog">
        <BlogSection />
      </div>

      {/* Elsewhere & Footer */}
      <div id="resume" className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-10 w-full mt-16 md:mt-24 border-t border-border pt-4">
        <div className="md:col-span-4 lg:col-span-5 pr-6 md:pr-8 lg:pr-10 flex flex-col justify-between">
          <h2 className="text-base font-medium text-foreground">
            Elsewhere.
          </h2>
          <div className="hidden md:block mt-24 md:mt-32 font-medium text-[15px] text-foreground">
            © March 2026
          </div>
        </div>
        <div className="md:col-span-8 lg:col-span-7 pr-6 md:pr-8 lg:pr-10 flex flex-col">
          <div className="flex gap-6 md:gap-8">
            {["Linkedin", "Youtube", "Medium"].map((link) => (
              <a key={link} href="#" className="font-medium text-foreground/80 hover:text-foreground text-[15px] transition-colors">
                {link}
              </a>
            ))}
          </div>
          <div className="md:hidden mt-24 md:mt-32 font-medium text-[15px] text-foreground">
            © March 2026
          </div>
        </div>
      </div>
    </div>
  )
}
