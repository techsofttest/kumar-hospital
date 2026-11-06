import { UsersRound, Target, Award, HeartPulse } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { IconBox } from "@/components/ui/icon-box";

const highlights = [
  {
    icon: UsersRound,
    title: "Specialist Team",
    text: "Physical Medicine & Rehabilitation, Neurology and Neurosurgery expertise.",
  },
  {
    icon: Target,
    title: "Individual Plans",
    text: "Treatment protocols are designed and supervised around each patient's needs.",
  },
  {
    icon: Award,
    title: "Advanced Technology",
    text: "Modern rehabilitation and pain-management technologies from around the world.",
  },
  {
    icon: HeartPulse,
    title: "Patient First",
    text: "Care designed around comfort, dignity, function and long-term recovery.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-28 lg:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-6 sm:px-12 lg:px-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:px-12">
        <div>
          <SectionLabel>About Kumar Hospital</SectionLabel>

          <h2 className="max-w-[560px] text-3xl font-normal font-serif leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
            Specialist rehabilitation with a human approach.
          </h2>

          <p className="mt-6 max-w-[570px] text-[16px] leading-7 text-[#52606B]">
            Kumar Hospital brings together specialist rehabilitation,
            neurological care and advanced pain-management services under
            one healthcare destination.
          </p>

          <p className="mt-4 max-w-[570px] text-[16px] leading-7 text-[#52606B]">
            Our approach combines medical assessment, personalised treatment
            protocols, rehabilitation therapy and modern technology to help
            patients recover function, manage pain and return to everyday
            life.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <div className="rounded-full bg-gray-100 px-4 py-2.5 text-[13px] font-medium text-gray-800">
              Specialist-led
            </div>
            <div className="rounded-full bg-gray-100 px-4 py-2.5 text-[13px] font-medium text-gray-800">
              Affordable care
            </div>
            <div className="rounded-full bg-gray-100 px-4 py-2.5 text-[13px] font-medium text-gray-800">
              Advanced technology
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl bg-gray-100 p-7 sm:p-8"
              >
                <IconBox>
                  <Icon size={22} strokeWidth={1.7} />
                </IconBox>

                <h3 className="mt-6 text-[19px] font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 text-[14px] leading-6 text-[#5B6872]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

