import {
  Dumbbell,
  Brain,
  Zap,
  Activity,
  Syringe,
  HeartPulse,
  ArrowRight,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const treatments = [
  {
    icon: Dumbbell,
    title: "Physiotherapy",
    description:
      "Targeted movement and strengthening programmes designed around individual recovery goals.",
  },
  {
    icon: Brain,
    title: "Neuro Rehabilitation",
    description:
      "Specialist rehabilitation programmes for patients recovering from stroke and neurological conditions.",
  },
  {
    icon: Zap,
    title: "Robotic Gait Training",
    description:
      "Technology-assisted gait training to support safer and more purposeful movement recovery.",
  },
  {
    icon: Activity,
    title: "IDD Therapy",
    description:
      "Advanced Intervertebral Differential Dynamics therapy for selected back and neck pain conditions.",
  },
  {
    icon: Syringe,
    title: "Prolotherapy & PRP",
    description:
      "Regenerative and injection-based treatment options for selected musculoskeletal conditions.",
  },
  {
    icon: HeartPulse,
    title: "Laser Therapy",
    description:
      "Modern laser systems incorporated into personalised pain-management protocols.",
  },
];

export function Treatments() {
  return (
    <section id="treatments" className="bg-[#E9ECF0] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 xl:px-24">
        <ScrollReveal direction="up" distance={20} duration={600} className="max-w-[720px]">
          <SectionLabel>Treatments & Services</SectionLabel>

          <h2 className="text-3xl font-medium font-[family-name:var(--font-heading)] leading-tight tracking-[-0.03em] sm:text-4xl text-[#061627]">
            The right combination of care for every recovery journey.
          </h2>
        </ScrollReveal>

        <div className="mt-8 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment, idx) => {
            const Icon = treatment.icon;

            return (
              <ScrollReveal
                key={treatment.title}
                direction="up"
                distance={24}
                delay={idx * 75}
                duration={600}
                className="group flex flex-col justify-between rounded-xl border border-gray-200/90 bg-white p-5 shadow-[0_2px_6px_rgba(0,0,0,0.03)] transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md"
              >
                <div>
                  <h3 className="text-[17.5px] font-semibold text-[#061627] tracking-tight">
                    {treatment.title}
                  </h3>

                  <p className="mt-2 text-[13.5px] leading-relaxed text-[#3B4856]">
                    {treatment.description}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 text-[13px] font-semibold text-[#061627] group-hover:text-[#B88942] transition-colors">
                    <span>Learn more</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                  <Icon size={36} strokeWidth={1.6} className="text-[#B88942]" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

