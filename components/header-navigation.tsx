import { ContactButton } from "@/components/contact-toast";

export function HeaderNavigation() {
  return (
    <div className="sticky top-0 z-50 w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-10 py-4 -my-4 bg-background/80 backdrop-blur-md">
      {/* Left Sidebar */}
      <div className="md:col-span-4 lg:col-span-5 pr-6 md:pr-8 lg:pr-10"></div>

      {/* Right Content */}
      <div className="md:col-span-8 lg:col-span-7 flex flex-col gap-16 lg:gap-24">
        {/* Top Section */}
        <div className="flex flex-col gap-8 md:gap-4 pr-6 md:pr-4 lg:pr-4">
          {/* Navigation */}
          <nav className="flex items-center gap-6 text-muted-foreground text-sm md:text-sm">
            <a href="#work" className="hover:text-foreground transition-colors">
              Work
            </a>
            <a href="#about" className="hover:text-foreground transition-colors">
              About
            </a>
            <a href="#blog" className="hover:text-foreground transition-colors">
              Blog
            </a>
            <a href="#resume" className="hover:text-foreground transition-colors">
              Resume
            </a>
            <ContactButton />
          </nav>
        </div>
      </div>
    </div>
  );
}
