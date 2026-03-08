"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<"List" | "Prose" | "Timeline">("List");

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-20 w-full">
      {/* Left Column (Image & Heading) */}
      <div className="md:col-span-1 flex flex-col gap-6">
        <h2 className="text-base font-medium text-foreground">
          Get to know Miranda.
        </h2>
        {/* Profile Image */}
        <div className="w-full aspect-[3/4.2] bg-[#e5e5e5] dark:bg-zinc-800 rounded-sm overflow-hidden">
          <img 
            src="https://i.ibb.co/3mKHGgqp/1713454994829.jpg" 
            alt="Miranda" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Column (Tabs & Content) */}
      <div className="md:col-span-2 lg:col-span-3 flex flex-col gap-8 pr-6 md:pr-12 lg:pr-20">
        {/* Top Controls Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          {/* Tabs */}
          <div className="flex items-center gap-6 md:gap-8">
            {(["List", "Prose", "Timeline"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "text-lg transition-colors hover:text-foreground",
                  activeTab === tab 
                    ? "text-foreground font-semibold" 
                    : "text-muted-foreground font-medium"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Length Controls */}
          <div className="flex items-center gap-4 text-muted-foreground mr-1">
             <span className="text-lg text-foreground font-medium">Length</span>
             <div className="flex items-center gap-0">
                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-muted/50 rounded-full text-foreground/80">
                  <Minus strokeWidth={1.5} className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-muted/50 rounded-full text-foreground/80">
                  <Plus strokeWidth={1.5} className="h-5 w-5" />
                </Button>
             </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="text-base md:text-[17px] text-foreground/90 leading-relaxed max-w-3xl">
          {activeTab === "List" && (
            <ul className="list-disc flex flex-col gap-2 pl-4 marker:text-foreground">
              <li>
                Began career in product design in 2019 in agencies and media companies, building a foundation in storytelling, usability, and collaboration.
              </li>
              <li>
                Founding designer at Automatic ('11—'13), shaping strategy, product, and brand design for its award-winning smart driving assistant.
              </li>
              <li>
                At Meta ('13—'17), led design for storytelling and VR products including Facebook Stories, 360, and Spaces; created the Facebook VR Guidelines and mentored teams transitioning from 2D to 3D.
              </li>
              <li>
                At Google ('17—'19), worked on VR tools with Daydream and later at Jigsaw, building products like Shield for journalists and Trainer for law enforcement to address disinformation and online safety.
              </li>
              <li>
                Head of Design at Canopy ('19—'20), launching personalization products; transitioned to CNN ('20—'21) after its acquisition as Director of Design and Research for Emerging Products and Platforms.
              </li>
              <li>
                At Patreon ('21—'23), reimagined the app's architecture, scaled the design system, and launched Patreon Communities to connect creators with their most dedicated fans.
              </li>
              <li>
                Today, fractional design leader partnering with early-stage startups like Daylight Computer, Workmate, Slingshot AI, and Google Ventures.
              </li>
            </ul>
          )}

          {activeTab === "Prose" && (
            <div className="flex flex-col gap-4 md:gap-5">
              <p>
                Miranda began her career in product design in 2019 in agencies and media companies, building a foundation in storytelling, usability, and collaboration. As a founding designer at Automatic ('11—'13), she shaped strategy, product, and brand design for its award-winning smart driving assistant.
              </p>
              <p>
                At Meta ('13—'17), she led design for storytelling and VR products including Facebook Stories, 360, and Spaces. She created the Facebook VR Guidelines and mentored teams transitioning from 2D to 3D. Later, at Google ('17—'19), she worked on VR tools with Daydream and at Jigsaw, building products like Shield for journalists to address disinformation.
              </p>
              <p>
                After serving as Head of Design at Canopy, launching personalization products, she transitioned to CNN as Director of Design and Research. At Patreon ('21—'23), she reimagined the app's architecture and launched Patreon Communities. Today, she is a fractional design leader partnering with early-stage startups.
              </p>
            </div>
          )}

          {activeTab === "Timeline" && (
             <div className="flex flex-col gap-4 md:gap-5">
                <div className="grid grid-cols-[80px_1fr] gap-6">
                  <div className="text-muted-foreground font-medium">Present</div>
                  <div>Fractional Design Leader for early-stage startups.</div>
                </div>
                <div className="grid grid-cols-[80px_1fr] gap-6">
                  <div className="text-muted-foreground font-medium">'21—'23</div>
                  <div>Patreon, reimagined architecture and launched Communities.</div>
                </div>
                <div className="grid grid-cols-[80px_1fr] gap-6">
                  <div className="text-muted-foreground font-medium">'20—'21</div>
                  <div>CNN, Director of Design and Research for Emerging Products.</div>
                </div>
                <div className="grid grid-cols-[80px_1fr] gap-6">
                  <div className="text-muted-foreground font-medium">'19—'20</div>
                  <div>Canopy, Head of Design, launched personalization products.</div>
                </div>
                <div className="grid grid-cols-[80px_1fr] gap-6">
                  <div className="text-muted-foreground font-medium">'17—'19</div>
                  <div>Google, worked on VR tools (Daydream) and Jigsaw products.</div>
                </div>
                <div className="grid grid-cols-[80px_1fr] gap-6">
                  <div className="text-muted-foreground font-medium">'13—'17</div>
                  <div>Meta, led design for VR products and Facebook Stories.</div>
                </div>
                <div className="grid grid-cols-[80px_1fr] gap-6">
                  <div className="text-muted-foreground font-medium">'11—'13</div>
                  <div>Automatic, Founding Designer.</div>
                </div>
                <div className="grid grid-cols-[80px_1fr] gap-6">
                  <div className="text-muted-foreground font-medium">2019</div>
                  <div>Began career in agencies and media companies.</div>
                </div>
             </div>
          )}
        </div>
      </div>
    </div>
  );
}
