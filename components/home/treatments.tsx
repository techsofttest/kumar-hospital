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
    <section id="treatments" className="py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 xl:px-24">
        <div className="max-w-[720px]">
          <SectionLabel>Treatments & Services</SectionLabel>

          <h2 className="text-3xl font-normal font-serif leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl text-[#061627]">
            The right combination of care for every recovery journey.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment) => {
            const Icon = treatment.icon;

            return (
              <div
                key={treatment.title}
                className="group flex flex-col justify-between rounded-2xl bg-gray-100 p-7 transition hover:border-gray-300 hover:shadow-sm"
              >
                <div>
                  <h3 className="text-[19px] font-semibold text-[#061627]">
                    {treatment.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-6 text-[#5B6872]">
                    {treatment.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-[13px] font-semibold text-[#061627] group-hover:text-[#CD9E57] transition-colors">
                    <span>Learn more</span>
                    <ArrowRight size={15} />
                  </div>
                  <Icon size={48} strokeWidth={1.5} className="text-[#CD9E57]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

