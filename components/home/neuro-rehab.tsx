import Image from "next/image";
import {
  Brain,
  Stethoscope,
  Dumbbell,
  Activity,
  MessageCircle,
  Target,
  ArrowRight,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { Button } from "@/components/ui/button";

const neuroServices = [
  { label: "Physical Medicine Consultation", icon: Stethoscope },
  { label: "Physiotherapy", icon: Dumbbell },
  { label: "Occupational Therapy", icon: Activity },
  { label: "Speech Therapy", icon: MessageCircle },
  { label: "Functional Training", icon: Target },
  { label: "Neurological Assessment", icon: Brain },
];

export function NeuroRehab() {
  return (
    <section id="neuro" className="relative bg-white py-10 sm:py-14 lg:py-0">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[1fr_1fr] lg:items-start">
        <div className="p-6 sm:p-8 lg:sticky lg:top-20 lg:py-12 lg:pl-12 lg:pr-0 xl:pl-16 w-full self-start">
          <div className="relative min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] w-full overflow-hidden rounded-xl bg-gray-200 shadow-sm">
            <Image
              src="/categories/Neural Pathways in Focus.png"
              alt="Stroke and neurological rehabilitation"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col justify-center px-6 py-8 sm:px-12 sm:py-12 lg:py-16 lg:pl-16 lg:pr-14 xl:pl-20 xl:pr-18">
          <SectionLabel>Stroke & Neuro Rehabilitation</SectionLabel>

          <h2 className="max-w-[600px] text-2xl font-medium font-[family-name:var(--font-heading)] leading-tight tracking-[-0.03em] sm:text-3xl lg:text-4xl text-[#061627]">
            Rebuilding movement, confidence and independence.
          </h2>

          <p className="mt-4 max-w-[600px] text-[15px] leading-relaxed text-[#52606B]">
            Stroke recovery can involve many different challenges. Our
            rehabilitation approach brings medical assessment and multiple
            therapy disciplines together to support meaningful progress.
          </p>

          <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {neuroServices.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl bg-gray-50 border border-gray-100 p-4"
              >
                <Icon size={19} strokeWidth={1.7} className="text-[#CD9E57]" />
                <span className="text-[14px] font-medium text-[#061627]">{label}</span>
              </div>
            ))}
          </div>

          <div>
            <Button
              href="#appointment"
              variant="primary"
              size="normal"
              className="mt-8"
            >
              Enquire about neuro rehabilitation

            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

