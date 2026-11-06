import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { Button } from "@/components/ui/button";

const painPoints = [
  "Non-surgical treatment options",
  "Interventional pain procedures",
  "IDD therapy",
  "Laser-based treatment",
  "Prolotherapy & PRP injections",
];

export function BackAndNeckPain() {
  return (
    <section id="pain" className="relative overflow-hidden bg-gray-100 py-16 sm:py-20 lg:py-0">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        <div className="order-2 flex flex-col justify-center px-6 py-12 sm:px-12 sm:py-16 lg:order-1 lg:py-24 lg:pl-16 lg:pr-20 xl:pl-20 xl:pr-24">
          <SectionLabel>Back & Neck Pain</SectionLabel>

          <h2 className="max-w-[600px] text-3xl font-normal font-serif leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl text-[#061627]">
            Pain care designed around your condition.
          </h2>

          <p className="mt-6 max-w-[600px] text-[16px] leading-7 text-[#52606B]">
            From disc-related pain and chronic back pain to selected joint
            and musculoskeletal conditions, treatment starts with proper
            evaluation and an individualised plan.
          </p>

          <div className="mt-8 space-y-3">
            {painPoints.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-[15px] font-medium text-[#061627]"
              >
                <span className="flex items-center justify-center text-[#CD9E57]">
                  <Check size={16} strokeWidth={2.5} />
                </span>
                {item}
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
              Enquire about pain care
              <ArrowRight size={17} />
            </Button>
          </div>
        </div>

        <div className="order-1 flex items-center justify-center p-6 sm:p-10 lg:order-2 lg:py-16 lg:pr-12 lg:pl-0 xl:pr-16 w-full">
          <div className="relative min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] w-full overflow-hidden rounded-xl bg-gray-200">
            <Image
              src="/categories/3d-female-medical-figure-with-neck-back-bones-highlighted.jpg"
              alt="Back and neck pain treatment"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

