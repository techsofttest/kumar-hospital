import { Cross } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";

const facilities = [
  { title: "Robotic Gait Training", description: "Advanced gait and mobility training" },
  { title: "IDD Therapy", description: "Targeted spinal decompression therapy" },
  { title: "Latest Laser Systems", description: "Modern pain-management technology" },
  { title: "Computer-Aided Hand Function", description: "Technology-assisted hand rehabilitation" },
  { title: "Accessible Facilities", description: "Designed around patient mobility" },
  { title: "Therapy Infrastructure", description: "Dedicated spaces for rehabilitation" },
];

export function Facilities() {
  return (
    <section id="facilities" className="bg-[#061627] py-24 text-white sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 xl:px-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <SectionLabel light>Advanced Facilities</SectionLabel>

            <h2 className="text-3xl font-normal font-serif leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Technology that supports better rehabilitation.
            </h2>

            <p className="mt-6 max-w-[480px] text-[15px] leading-7 text-white/60">
              Modern rehabilitation technology is combined with specialist
              supervision and hands-on therapy to support patients at
              different stages of recovery.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {facilities.map(({ title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-[#CD9E57]">
                    <Cross size={22} strokeWidth={1.5} />
                  </div>

                  <div>
                    <h3 className="text-[16px] font-semibold">{title}</h3>
                    <p className="mt-2 text-[13px] leading-5 text-white/55">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

