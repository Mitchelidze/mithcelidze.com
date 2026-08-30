"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function AboutSection() {
  return (
    <div className="w-full flex flex-col gap-6 md:gap-8">
      <h2 className="text-base font-medium text-foreground">
        Get to know me.
      </h2>

      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
        <Avatar className="w-28 h-28 md:w-36 md:h-36 shrink-0 shadow-sm border border-border/50">
          <AvatarImage
            src="https://i.ibb.co/prxyvnb8/Profile-Miranda-Tchelidze-Photo.png"
            alt="Miranda"
            className="w-full h-full object-cover"
          />
          <AvatarFallback className="w-full h-full rounded-none text-2xl font-bold">M</AvatarFallback>
        </Avatar>

        <Tabs id="about-tabs" defaultValue="Prose" className="w-full flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="Prose" className="text-base px-4 py-1.5">Prose</TabsTrigger>
              <TabsTrigger value="List" className="text-base px-4 py-1.5">List</TabsTrigger>
              <TabsTrigger value="Timeline" className="text-base px-4 py-1.5">Timeline</TabsTrigger>
            </TabsList>
          </div>

          <div className="text-[16px] text-foreground/90 leading-relaxed max-w-3xl">
            <TabsContent value="List" className="mt-0">
              <ul className="list-disc flex flex-col gap-3 pl-5 marker:text-foreground">
                <li>
                  Began career in product design in 2019 in agencies and media companies, building a foundation in storytelling, usability, and collaboration.
                </li>
                <li>
                  Founding designer at Automatic (&lsquo;11&mdash;&rsquo;13), shaping strategy, product, and brand design for its award-winning smart driving assistant.
                </li>
                <li>
                  At Meta (&lsquo;13&mdash;&rsquo;17), led design for storytelling and VR products including Facebook Stories, 360, and Spaces; created the Facebook VR Guidelines and mentored teams transitioning from 2D to 3D.
                </li>
                <li>
                  At Google (&lsquo;17&mdash;&rsquo;19), worked on VR tools with Daydream and later at Jigsaw, building products like Shield for journalists and Trainer for law enforcement to address disinformation and online safety.
                </li>
                <li>
                  Head of Design at Canopy (&lsquo;19&mdash;&rsquo;20), launching personalization products; transitioned to CNN (&lsquo;20&mdash;&rsquo;21) after its acquisition as Director of Design and Research for Emerging Products and Platforms.
                </li>
                <li>
                  At Patreon (&lsquo;21&mdash;&rsquo;23), reimagined the app&rsquo;s architecture, scaled the design system, and launched Patreon Communities to connect creators with their most dedicated fans.
                </li>
                <li>
                  Today, fractional design leader partnering with early-stage startups like Daylight Computer, Workmate, Slingshot AI, and Google Ventures.
                </li>
              </ul>
            </TabsContent>

            <TabsContent value="Prose" className="mt-0">
              <div className="flex flex-col gap-4 md:gap-5">
                <p>
                  Own the design process end-to-end: from ambiguous early exploration through to polished, shipped experiences. Design intuitive interfaces, create seamless experiences and establish design patterns that make advanced capabilities feel natural and accessible, iterating continuously as the product and technology evolve together.
                </p>
                <p>
                  Miranda began her career in product design in 2019 in agencies and media companies, building a foundation in storytelling, usability, and collaboration. As a founding designer at Automatic (&lsquo;11&mdash;&rsquo;13), she shaped strategy, product, and brand design for its award-winning smart driving assistant.
                </p>
                <p>
                  At Meta (&lsquo;13&mdash;&rsquo;17), she led design for storytelling and VR products including Facebook Stories, 360, and Spaces. She created the Facebook VR Guidelines and mentored teams transitioning from 2D to 3D. Later, at Google (&lsquo;17&mdash;&rsquo;19), she worked on VR tools with Daydream and at Jigsaw, building products like Shield for journalists to address disinformation.
                </p>
                <p>
                  After serving as Head of Design at Canopy, launching personalization products, she transitioned to CNN as Director of Design and Research. At Patreon (&lsquo;21&mdash;&rsquo;23), she reimagined the app&rsquo;s architecture and launched Patreon Communities. Today, she is a fractional design leader partnering with early-stage startups.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="Timeline" className="mt-0">
              <div className="flex flex-col gap-4 md:gap-5">
                <div className="grid grid-cols-[100px_1fr] gap-6">
                  <div className="text-muted-foreground font-medium">Present</div>
                  <div>Fractional Design Leader for early-stage startups.</div>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-6">
                  <div className="text-muted-foreground font-medium">&lsquo;21&mdash;&rsquo;23</div>
                  <div>Patreon, reimagined architecture and launched Communities.</div>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-6">
                  <div className="text-muted-foreground font-medium">&lsquo;20&mdash;&rsquo;21</div>
                  <div>CNN, Director of Design and Research for Emerging Products.</div>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-6">
                  <div className="text-muted-foreground font-medium">&lsquo;19&mdash;&rsquo;20</div>
                  <div>Canopy, Head of Design, launched personalization products.</div>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-6">
                  <div className="text-muted-foreground font-medium">&lsquo;17&mdash;&rsquo;19</div>
                  <div>Google, worked on VR tools (Daydream) and Jigsaw products.</div>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-6">
                  <div className="text-muted-foreground font-medium">&lsquo;13&mdash;&rsquo;17</div>
                  <div>Meta, led design for VR products and Facebook Stories.</div>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-6">
                  <div className="text-muted-foreground font-medium">&lsquo;11&mdash;&rsquo;13</div>
                  <div>Automatic, Founding Designer.</div>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-6">
                  <div className="text-muted-foreground font-medium">2019</div>
                  <div>Began career in agencies and media companies.</div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
