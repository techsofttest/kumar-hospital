import Image from "next/image";
import { SectionLabel } from "@/components/ui/section-label";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function AboutPhilosophy() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 xl:px-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Image with Subtle Frame */}
          <ScrollReveal direction="right" distance={30} duration={700}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] bg-gray-100 border border-gray-200/90 shadow-xs">
              <Image
                src="/about-page/b6.png"
                alt="Kumar Hospital Rehabilitation Care"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Right: Narrative */}
          <div>
            <ScrollReveal direction="up" distance={20} duration={600}>
              <SectionLabel>Our Philosophy</SectionLabel>

              <h2 className="text-3xl sm:text-4xl font-medium font-[family-name:var(--font-heading)] text-[#061627] leading-tight tracking-[-0.03em]">
                Compassionate clinical precision at every phase of healing.
              </h2>

              <p className="mt-5 text-[15px] sm:text-[16px] leading-relaxed text-[#52606B]">
                At Kumar Hospital, we understand that recovering from neurological events like stroke or living with chronic spine and joint pain can be overwhelming. Rather than fragmented visits, we provide a unified environment where clinical assessment, therapeutic intervention, and emotional encouragement converge.
              </p>

              <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-[#52606B]">
                Our physical medicine specialists design personalised pathways that target root causes—empowering patients to regain autonomy, rediscover mobility, and return to their communities with confidence.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/doctors" variant="primary" size="normal">
                  Meet Our Doctors
                </Button>
                <Button href="/treatments" variant="secondary" size="normal">
                  Explore Treatments
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

