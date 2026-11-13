import { SectionLabel } from "@/components/ui/section-label";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Award, HeartPulse, Users, ShieldCheck } from "lucide-react";

export const pillars = [
  {
    icon: Award,
    title: "Specialist Supervision",
    text: "Every treatment regimen is customized and monitored under experienced neuro-physiatrists and pain specialists.",
  },
  {
    icon: HeartPulse,
    title: "Human-Centred Recovery",
    text: "We believe healing requires empathy, dignity, and active communication with both patient and caregivers.",
  },
  {
    icon: Users,
    title: "Multi-Disciplinary Team",
    text: "Physical medicine consultants, neuro-physiotherapists, speech and occupational therapists collaborating under one roof.",
  },
  {
    icon: ShieldCheck,
    title: "Evidence-Based & Non-Surgical",
    text: "Focusing on proven therapeutic protocols, advanced spinal decompression (IDD), and robotic gait training to prevent needless surgery.",
  },
];

export function AboutPillars() {
  return (
    <section className="bg-[#F4F5F7] py-16 sm:py-20 lg:py-24 border-y border-gray-200/80">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 xl:px-24">
        <ScrollReveal direction="up" distance={20} duration={600} className="max-w-[700px] mb-12">
          <SectionLabel>Why Choose Kumar Hospital</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-medium font-[family-name:var(--font-heading)] text-[#061627] tracking-[-0.03em]">
            Standards that redefine rehabilitative excellence.
          </h2>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal
                key={pillar.title}
                direction="up"
                distance={20}
                delay={idx * 80}
                duration={600}
                className="rounded-2xl border border-gray-200/90 bg-white p-6 shadow-xs hover:border-gray-300 transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4F5F7] text-[#CD9E57]">
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-[17px] font-semibold text-[#061627] tracking-tight">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
                  {pillar.text}
                </p>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

