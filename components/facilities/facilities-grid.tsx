import Image from "next/image";
import { CheckCircle2, Building2 } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";

export const facilityItems = [
  {
    id: "robotic-gait-arena",
    title: "Robotic Gait & Mobility Training Arena",
    category: "Rehabilitation Engineering",
    description:
      "A dedicated neuro-technology zone housing computerised robotic gait orthoses with active weight-relief harnesses to accelerate physiological ambulation recovery.",
    specs: ["Weight-relieved harness support", "Real-time gait cycle kinematics", "Safe posture alignment", "Targeted neuroplasticity"],
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "idd-decompression-suites",
    title: "IDD Spinal Decompression Suites",
    category: "Non-Surgical Spine Centre",
    description:
      "A quiet, clinical suite featuring state-of-the-art Accu-SPINA / IDD therapy units calibrated to deliver exact oscillating decompression angles for cervical and lumbar relief.",
    specs: ["Digital angle calibration", "Specific vertebral targeting", "Monitored negative pressure", "Pain-free gentle sessions"],
    image: "/categories/3d-render-male-figure-leaning-with-spine-highlighted.jpg",
  },
  {
    id: "inpatient-accommodation",
    title: "Barrier-Free Inpatient Accommodation",
    category: "Patient Comfort & Accessibility",
    description:
      "Designed specifically for patients with stroke or mobility constraints. Ergonomic wheel-chair accessible en-suite bathrooms, grab-rails, hospital-grade motorised profiling beds, and emergency nurse-call buttons.",
    specs: ["Wide wheelchair turning radius", "Motorised adjustable beds", "Companion accommodation", "24/7 nursing supervision"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "therapy-gym",
    title: "Advanced Multidisciplinary Therapy Gym",
    category: "Therapeutic Infrastructure",
    description:
      "Spacious gymnasium with specialised parallel bars, balance master boards, sensory-motor mats, tilt tables, and dynamic strengthening equipment.",
    specs: ["Dedicated physiotherapy zones", "Occupational functional kitchen corner", "Balance & vestibular stations", "Climate controlled airy layout"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "speech-cognitive-chambers",
    title: "Speech & Cognitive Therapy Chambers",
    category: "Communication & Swallow",
    description:
      "Acoustically sound-treated private consulting chambers equipped for dysphagia (swallowing) rehabilitation, aphasia speech therapy, and cognitive restorative sessions.",
    specs: ["Acoustic isolation", "Bio-visual communication aids", "Swallow assessment tools", "One-on-one focused attention"],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "hand-extremity-lab",
    title: "Sensorised Hand & Upper Extremity Lab",
    category: "Fine Motor Retraining",
    description:
      "Precision fine motor training modules, computer-assisted hand function systems, and neuro-feedback devices designed to regain grasp, pinch, and finger dexterity.",
    specs: ["Digit dexterity boards", "Interactive motor feedback", "Adaptive daily-living simulators", "Pencil grip retraining"],
    image: "/categories/brain-spine-design.jpg",
  },
];

export function FacilitiesGrid() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 xl:px-24">
        <ScrollReveal direction="up" distance={20} duration={600} className="max-w-[720px] mb-14 sm:mb-20">
          <SectionLabel>Hospital Tour</SectionLabel>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-medium font-[family-name:var(--font-heading)] text-[#061627] tracking-[-0.03em]">
            World-class equipment supporting every recovery stage.
          </h2>
        </ScrollReveal>

        <div className="space-y-16 lg:space-y-24">
          {facilityItems.map((item, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={item.id}
                id={item.id}
                className={`grid gap-10 lg:grid-cols-2 lg:gap-16 items-center ${isReversed ? "lg:grid-flow-dense" : ""
                  }`}
              >
                {/* Image */}
                <ScrollReveal
                  direction={isReversed ? "right" : "left"}
                  distance={30}
                  duration={650}
                  className={isReversed ? "lg:col-start-2" : ""}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] bg-gray-100 border border-gray-200/90 shadow-xs">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </ScrollReveal>

                {/* Content */}
                <ScrollReveal
                  direction="up"
                  distance={20}
                  duration={600}
                  className={isReversed ? "lg:col-start-1" : ""}
                >

                  <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-medium font-[family-name:var(--font-heading)] text-[#061627] tracking-[-0.03em] leading-tight">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-[#52606B]">
                    {item.description}
                  </p>

                  <div className="mt-6 space-y-2.5">
                    {item.specs.map((spec) => (
                      <div key={spec} className="flex items-start gap-3 text-sm text-[#061627]">
                        <CheckCircle2 size={16} className="text-[#CD9E57] mt-0.5 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Button href="/book-appointment" variant="primary" size="normal">
                      Enquire for Inpatient Care
                    </Button>
                  </div>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

