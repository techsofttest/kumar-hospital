import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { Button } from "@/components/ui/button";

export function AppointmentCta() {
  return (
    <section id="appointment" className="px-6 pb-8 sm:px-12 lg:px-20 xl:px-24">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-3xl bg-[#061627] px-7 py-12 text-white sm:px-12 lg:px-16 lg:py-16">
        {/* Background Image & Overlay */}
        <Image
          src="/baner/b1.png"
          alt="Book an appointment"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061627]/45 via-[#061627]/45 to-[#061627]/20" />

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <SectionLabel light>Book an Appointment</SectionLabel>

            <h2 className="max-w-[700px] text-3xl font-normal font-serif leading-tight tracking-[-0.03em] sm:text-4xl text-white">
              Take the first step towards better movement and better living.
            </h2>

            <p className="mt-4 max-w-[620px] text-[15px] leading-7 text-white/80">
              Tell us what you are looking for. Our team can help you find
              the right consultation or rehabilitation service.
            </p>
          </div>

          <Button
            href="#contact"
            variant="primary"
            size="normal"
            className="h-14 px-8 text-[15px]"
          >
            Enquire Now
            <ArrowRight size={17} />
          </Button>
        </div>
      </div>
    </section>
  );
}

