import Image from "next/image";
import { Stethoscope, Activity, Zap, ShieldCheck, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { Button } from "@/components/ui/button";

const reasons = [
  {
    icon: Stethoscope,
    title: "Specialist supervision",
    text: "Rehabilitation and treatment plans guided by qualified specialists.",
  },
  {
    icon: Activity,
    title: "Comprehensive care",
    text: "Medical consultation, therapy and advanced treatment options in one ecosystem.",
  },
  {
    icon: Zap,
    title: "Modern technology",
    text: "Advanced systems including robotic gait training, IDD and laser therapy.",
  },
  {
    icon: ShieldCheck,
    title: "Affordable approach",
    text: "World-class rehabilitation and pain care with accessibility in mind.",
  },
];

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-black py-24 text-white sm:py-28 lg:py-32">
      {/* Background Image */}
      <Image
        src="/baner/b2.png"
        alt="Why Choose Kumar Hospital"
        fill
        className="object-cover object-center"
      />

      {/* Dark overlay for contrast and legibility */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 xl:px-24">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <SectionLabel light>Why Choose Us</SectionLabel>

            <h2 className="max-w-[500px] text-3xl font-normal font-serif leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Care that connects expertise, technology and recovery.
            </h2>

            <p className="mt-6 max-w-[480px] text-[15px] leading-7 text-white/80">
              We focus on practical outcomes: reducing pain, improving
              movement, rebuilding independence and helping patients get
              back to their lives.
            </p>

            <Button
              href="#appointment"
              variant="primary"
              size="normal"
              className="mt-8"
            >
              Talk to our team
              <ArrowRight size={17} />
            </Button>
          </div>

          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {reasons.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className=" pt-6">
                  <Icon
                    size={45}
                    strokeWidth={1.6}
                    className="text-[#CD9E57]"
                  />
                  <h3 className="mt-5 text-[18px] font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-6 text-white/75">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

