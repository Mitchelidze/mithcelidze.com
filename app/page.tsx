import { AboutSection } from "@/components/about-section";
import { HeroSection } from "@/components/hero-section";
import { WorkSection } from "@/components/work-section";
import { BlogSection } from "@/components/blog-section";
import { HeaderNavigation } from "@/components/header-navigation";
import { CopyrightDate } from "@/components/copyright-date";

export default function Page() {
  return (
    <div id="work" className="min-h-svh w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-6 md:py-8 overflow-x-clip flex flex-col gap-16 md:gap-24">
      {/* Header Navigation */}
      <HeaderNavigation />

      {/* Hero Section */}
      <div className="w-full">
        <HeroSection />
      </div>

      {/* Work Section */}
      <div className="w-full border-t border-border/70 pt-10 md:pt-16">
        <WorkSection />
      </div>

      {/* About Section */}
      <div id="about" className="w-full border-t border-border/70 pt-10 md:pt-16">
        <AboutSection />
      </div>

      {/* Capabilities Section */}
      <div className="w-full border-t border-border/70 pt-10 md:pt-16 flex flex-col gap-6 md:gap-8">
        <h2 className="text-base font-medium text-foreground">
          Capabilities.
        </h2>
        <div className="flex flex-wrap gap-2.5 md:gap-3">
          {[
            "Product Design",
            "Interaction Design",
            "Visual Design",
            "UX Research",
            "Design Systems",
            "GenAI",
            "Code Prototypes",
            "Crucial Conversations"
          ].map((text, i) => (
            <div
              key={i}
              className="px-4 py-2 md:px-5 md:py-2.5 rounded-full border border-foreground/20 bg-background/50 text-foreground text-[15px] font-medium transition-all hover:border-foreground/50 hover:bg-background cursor-default"
            >
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* Blog Section (Commented out for now) */}
      {/* <div id="blog" className="w-full border-t border-border/70 pt-10 md:pt-16">
        <BlogSection />
      </div> */}

      {/* Elsewhere & Footer */}
      <div id="resume" className="w-full border-t border-border/70 pt-10 md:pt-16 pb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-base font-medium text-foreground">
            Elsewhere.
          </h2>
          <div className="flex gap-6 md:gap-8">
            {[
              { name: "Linkedin", url: "https://www.linkedin.com/in/mitchelidze/" },
              { name: "Youtube", url: "https://www.youtube.com/@mirandatchelidze/videos" }
            ].map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground/80 hover:text-foreground text-[15px] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="font-medium text-[15px] text-muted-foreground">
          <CopyrightDate />
        </div>
      </div>
    </div>
  )
}

