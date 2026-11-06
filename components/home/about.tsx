import Image from "next/image";
import { SectionLabel } from "@/components/ui/section-label";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#061627] min-h-[580px] lg:min-h-[640px] flex flex-col justify-end">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/baner/b3.png"
          alt="Kumar Hospital About"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark gradient overlay on top of background image to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Content aligned to bottom */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-14 pt-28 sm:px-12 sm:pb-16 sm:pt-36 lg:px-20 lg:pb-20 xl:px-24">
        <SectionLabel light>About Kumar Hospital</SectionLabel>

        {/* 2-column layout: Header on left, Description on right */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:items-end">
          {/* Left: Heading + Button */}
          <div>
            <h2 className="max-w-[580px] text-3xl font-medium font-[family-name:var(--font-heading)] leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl text-white">
              Specialist rehabilitation with a human approach.
            </h2>

            <div className="mt-8">
              <Button href="#contact" variant="primary" size="normal">
                Know More
              </Button>
            </div>
          </div>

          {/* Right: Description + Feature tags */}
          <div className="flex flex-col justify-end">
            <p className="text-[16px] leading-7 text-gray-200">
              Kumar Hospital brings together specialist rehabilitation,
              neurological care and advanced pain-management services under
              one healthcare destination.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <div className="rounded-full bg-white/10 border border-white/15 px-4 py-2 text-[13px] font-medium text-white backdrop-blur-xs">
                Specialist-led
              </div>
              <div className="rounded-full bg-white/10 border border-white/15 px-4 py-2 text-[13px] font-medium text-white backdrop-blur-xs">
                Affordable care
              </div>
              <div className="rounded-full bg-white/10 border border-white/15 px-4 py-2 text-[13px] font-medium text-white backdrop-blur-xs">
                Advanced technology
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
