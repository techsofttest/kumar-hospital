import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const painPoints = [
  "Non-surgical treatment options",
  "Interventional pain procedures",
  "IDD therapy",
  "Laser-based treatment",
  "Prolotherapy & PRP injections",
];

export function BackAndNeckPain() {
  return (
    <section id="pain" className="relative bg-gray-100 py-10 sm:py-14 lg:py-0">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="order-2 flex flex-col justify-center px-6 py-8 sm:px-12 sm:py-12 lg:order-1 lg:py-16 lg:pl-16 lg:pr-14 xl:pl-20 xl:pr-18">
          <ScrollReveal direction="up" distance={20} duration={600}>
            <SectionLabel>Back & Neck Pain</SectionLabel>

            <h2 className="max-w-[600px] text-2xl font-medium font-[family-name:var(--font-heading)] leading-tight tracking-[-0.03em] sm:text-3xl lg:text-4xl text-[#061627]">
              Pain care designed around your condition.
            </h2>

            <p className="mt-4 max-w-[600px] text-[15px] leading-relaxed text-[#52606B]">
              From disc-related pain and chronic back pain to selected joint
              and musculoskeletal conditions, treatment starts with proper
              evaluation and an individualised plan.
            </p>
          </ScrollReveal>

          <div className="mt-6 space-y-2.5">
            {painPoints.map((item, idx) => (
              <ScrollReveal
                key={item}
                direction="up"
                distance={15}
                delay={idx * 60}
                className="flex items-center gap-3 text-[14.5px] font-medium text-[#061627]"
              >
                <span className="flex items-center justify-center text-[#CD9E57]">
                  <Check size={15} strokeWidth={2.5} />
                </span>
                {item}
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" distance={15} delay={320}>
            <Button
              href="#appointment"
              variant="primary"
              size="normal"
              className="mt-6"
            >
              Enquire about pain care
            </Button>
          </ScrollReveal>
        </div>

        <div className="order-1 p-6 sm:p-8 lg:order-2 lg:sticky lg:top-20 lg:py-12 lg:pr-12 lg:pl-0 xl:pr-16 w-full self-start">
          <ScrollReveal direction="left" distance={30} duration={700}>
            <div className="relative min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] w-full overflow-hidden rounded-xl bg-gray-200 shadow-sm">
              <Image
                src="/categories/3d-female-medical-figure-with-neck-back-bones-highlighted.jpg"
                alt="Back and neck pain treatment"
                fill
                className="object-cover"
                priority
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

