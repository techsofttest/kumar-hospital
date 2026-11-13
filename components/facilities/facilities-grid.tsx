import Image from "next/image";
import { Check } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";

export const facilityItems = [
  {
    title: "Robotic Gait & Mobility Training Arena",
    category: "Rehabilitation Engineering",
    description:
      "A dedicated neuro-technology zone housing computerised robotic gait orthoses with active weight-relief harnesses to accelerate physiological ambulation recovery.",
    specs: ["Weight-relieved harness support", "Real-time gait cycle kinematics", "Safe posture alignment", "Targeted neuroplasticity"],
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "IDD Spinal Decompression Suites",
    category: "Non-Surgical Spine Centre",
    description:
      "A quiet, clinical suite featuring state-of-the-art Accu-SPINA / IDD therapy units calibrated to deliver exact oscillating decompression angles for cervical and lumbar relief.",
    specs: ["Digital angle calibration", "Specific vertebral targeting", "Monitored negative pressure", "Pain-free gentle sessions"],
    image: "/categories/3d-render-male-figure-leaning-with-spine-highlighted.jpg",
  },
  {
    title: "Barrier-Free Inpatient Accommodation",
    category: "Patient Comfort & Accessibility",
    description:
      "Designed specifically for patients with stroke or mobility constraints. Ergonomic wheel-chair accessible en-suite bathrooms, grab-rails, hospital-grade motorised profiling beds, and emergency nurse-call buttons.",
    specs: ["Wide wheelchair turning radius", "Motorised adjustable beds", "Companion accommodation", "24/7 nursing supervision"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Advanced Multidisciplinary Therapy Gym",
    category: "Therapeutic Infrastructure",
    description:
      "Spacious gymnasium with specialised parallel bars, balance master boards, sensory-motor mats, tilt tables, and dynamic strengthening equipment.",
    specs: ["Dedicated physiotherapy zones", "Occupational functional kitchen corner", "Balance & vestibular stations", "Climate controlled airy layout"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Speech & Cognitive Therapy Chambers",
    category: "Communication & Swallow",
    description:
      "Acoustically sound-treated private consulting chambers equipped for dysphagia (swallowing) rehabilitation, aphasia speech therapy, and cognitive restorative sessions.",
    specs: ["Acoustic isolation", "Bio-visual communication aids", "Swallow assessment tools", "One-on-one focused attention"],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
  },
  {
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
        <ScrollReveal direction="up" distance={20} duration={600} className="max-w-[720px] mb-12 sm:mb-16">
          <SectionLabel>Hospital Tour</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-[family-name:var(--font-heading)] text-[#061627] tracking-[-0.03em]">
            World-class equipment supporting every recovery stage.
          </h2>
        </ScrollReveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {facilityItems.map((item, idx) => (
            <ScrollReveal
              key={item.title}
              direction="up"
              distance={24}
              delay={idx * 80}
              duration={650}
              className="group flex flex-col overflow-hidden rounded-[24px] border border-gray-200/90 bg-[#F4F5F7] shadow-xs hover:border-gray-300 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-xs">
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="text-[18px] font-semibold font-[family-name:var(--font-heading)] text-[#061627] tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-gray-600">
                    {item.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-gray-200/80 space-y-1.5">
                    {item.specs.map((spec) => (
                      <div key={spec} className="flex items-center gap-2 text-xs text-gray-700">
                        <Check size={13} className="text-[#CD9E57] shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200/80">
                  <Button href="/contact" variant="secondary" size="small" className="w-full justify-center">
                    Enquire for Inpatient Care
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

