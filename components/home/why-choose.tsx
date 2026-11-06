import { Stethoscope, Activity, Zap, ShieldCheck } from "lucide-react";
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
    <section className="relative overflow-hidden bg-[#F4F5F7] py-14 sm:py-16 lg:py-20">
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 xl:px-24">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <SectionLabel>Why Choose Us</SectionLabel>

            <h2 className="max-w-[500px] text-3xl font-medium font-[family-name:var(--font-heading)] leading-tight tracking-[-0.03em] sm:text-4xl text-[#061627]">
              Care that connects expertise, technology and recovery.
            </h2>

            <p className="mt-4 max-w-[480px] text-[15px] leading-relaxed text-[#52606B]">
              We focus on practical outcomes: reducing pain, improving
              movement, rebuilding independence and helping patients get
              back to their lives.
            </p>

            <Button
              href="#appointment"
              variant="primary"
              size="normal"
              className="mt-6"
            >
              Talk to our team
            </Button>
          </div>

          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {reasons.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="pt-2">
                  <Icon
                    size={40}
                    strokeWidth={1.6}
                    className="text-[#CD9E57]"
                  />
                  <h3 className="mt-4 text-[17px] font-semibold text-[#061627]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-lg leading-6 text-black/90">
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
