import { SectionLabel } from "@/components/ui/section-label";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const milestones = [
  {
    year: "Founding Vision",
    title: "Pioneering Neuro-Rehabilitation in Kochi",
    desc: "Established with the mission to bring world-standard neuro recovery and physical medicine to patients in Kerala.",
  },
  {
    year: "Advanced Technology",
    title: "Robotic & Decompression Systems",
    desc: "Integrated computer-assisted robotic gait training and IDD therapy units for spine disc decompression.",
  },
  {
    year: "Comprehensive Campus",
    title: "Barrier-Free Inpatient & Outpatient Ecosystem",
    desc: "Designed accessible patient suites, dedicated therapy gymnasiums, and state-of-the-art restorative diagnostics.",
  },
];

export function AboutMilestones() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 xl:px-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 items-start">
          <ScrollReveal direction="up" distance={20} duration={600}>
            <SectionLabel>Our Journey</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-medium font-[family-name:var(--font-heading)] text-[#061627] tracking-[-0.03em]">
              Built on decades of patient trust and innovation.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#52606B]">
              From our foundational clinics to our modern rehabilitation complex in Thammanam, Kochi, every milestone has been guided by our commitment to patient outcomes.
            </p>
          </ScrollReveal>

          <div className="space-y-6">
            {milestones.map((item, idx) => (
              <ScrollReveal
                key={item.year}
                direction="up"
                distance={18}
                delay={idx * 90}
                className="rounded-2xl border border-gray-200/90 bg-[#F4F5F7] p-6 sm:p-7"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-[#CD9E57]">
                  {item.year}
                </div>
                <h3 className="mt-2 text-[18px] font-semibold text-[#061627]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-gray-600">
                  {item.desc}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

