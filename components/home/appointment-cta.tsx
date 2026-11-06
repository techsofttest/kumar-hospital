import Image from "next/image";
import { SectionLabel } from "@/components/ui/section-label";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function AppointmentCta() {
  return (
    <section id="appointment-cta" className="relative overflow-hidden bg-[#061627] min-h-[520px] lg:min-h-[580px] flex flex-col justify-end text-white w-full">
      {/* Full-width Background Image & Gradient Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/baner/b5.png"
          alt="Book an appointment"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
      </div>

      {/* Content pinned to bottom */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-14 pt-28 sm:px-12 sm:pb-16 sm:pt-36 lg:px-20 lg:pb-20 xl:px-24">
        <ScrollReveal direction="up" distance={15} duration={500}>
          <SectionLabel light>Book an Appointment</SectionLabel>
        </ScrollReveal>

        {/* 2-Column: Title on Left Edge, Description & Button on Right Edge */}
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:items-end">
          {/* Left Column: Heading */}
          <ScrollReveal direction="up" distance={25} duration={650}>
            <h2 className="max-w-[680px] text-3xl font-medium font-[family-name:var(--font-heading)] leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl text-white">
              Take the first step towards better movement and better living.
            </h2>
          </ScrollReveal>

          {/* Right Column: Description & Button */}
          <ScrollReveal direction="up" distance={25} duration={650} delay={150} className="flex flex-col justify-end items-start">
            <p className="text-[16px] leading-relaxed text-gray-200 lg:max-w-[480px]">
              Tell us what you are looking for. Our team can help you find
              the right consultation or rehabilitation service.
            </p>

            <div className="mt-7">
              <Button
                href="#appointment"
                variant="secondary"
                size="normal"
                className="h-12 px-7 text-[15px]"
              >
                Enquire Now
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
