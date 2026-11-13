import Image from "next/image";
import Link from "next/link";
import { Clock3, Calendar, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const doctors = [
  {
    prefix: "Dr.",
    name: "Sasikumar",
    qualification: "MBBS, DPMR (Physical Medicine & Rehabilitation)",
    experience: "30+ Years Experience",
    role: "Physical Medicine & Rehabilitation Specialist",
    description:
      "Specialising in physical medicine, musculoskeletal recovery, and personalized rehabilitation protocols.",
    focus: "Stroke recovery, neurological deficits, spinal injury rehabilitation, post-operative mobility recovery.",
    time: "08:00 – 13:00 hrs",
    days: "Mon, Tue, Wed, Fri, Sat",
    image: "/doctors/DR_ SASIKUMAR.png",
  },
  {
    prefix: "Dr.",
    name: "Malini Sasikumar",
    qualification: "MBBS, Specialist Consultant",
    experience: "25+ Years Experience",
    role: "Specialist Consultant",
    description:
      "Expert consultant combining clinical precision with dedicated patient care for neuro & spine recovery.",
    focus: "General physical rehabilitation, geriatric mobility care, comprehensive lifestyle & recovery counselling.",
    time: "08:00 – 13:00 hrs",
    days: "Mon, Tue, Wed, Fri, Sat",
    image: "/doctors/DR_MALINI SASIKUMAR.png",
  },
  {
    prefix: "Dr.",
    name: "Sruthi Sasikumar",
    qualification: "MBBS, MD (Neurology & Interventional Pain)",
    experience: "12+ Years Experience",
    role: "Neurologist & Pain Specialist",
    description:
      "Dedicated to advanced stroke recovery, neurological disorders, and interventional pain therapies.",
    focus: "Acute & chronic neurological management, targeted nerve blocks, regenerative pain therapies, migraine & neuropathy.",
    time: "08:00 – 13:00 hrs",
    days: "Mon, Tue, Wed, Fri, Sat",
    image: "/doctors/DR_SRUTHI SASIKUMAR - Copy.png",
  },
  {
    prefix: "Dr.",
    name: "Sreenath P R",
    qualification: "MBBS, DNB (Physical Medicine & Rehabilitation)",
    experience: "10+ Years Experience",
    role: "Specialist Consultant",
    description:
      "Specialist consultant focused on restorative care, robotic gait analysis, and movement disorders.",
    focus: "Robotic gait analysis, biomechanical retraining, sports & musculoskeletal rehabilitation.",
    time: "15:00 – 17:00 hrs",
    days: "Wednesday & Friday",
    image: "/doctors/Dr_Sreenath_P_R.png",
  },
];

export function Doctors() {
  return (
    <section id="doctors" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 xl:px-24">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20} duration={600} className="mb-8 sm:mb-12">
          <SectionLabel>Our Doctors</SectionLabel>
          <h2 className="text-3xl font-medium font-[family-name:var(--font-heading)] tracking-[-0.03em] sm:text-4xl lg:text-5xl text-[#061627]">
            Meet your care team.
          </h2>
        </ScrollReveal>

        {/* ================= MOBILE VIEW (< sm): 2 CARDS IN A ROW, COMPACT & PROFESSIONAL ================= */}
        <div className="grid grid-cols-2 gap-3.5 sm:hidden items-stretch">
          {doctors.map((doctor, idx) => (
            <ScrollReveal
              key={`mobile-${doctor.name}`}
              direction="up"
              distance={20}
              delay={idx * 60}
              duration={500}
              className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xs"
            >
              {/* Compact Photo */}
              <div className="relative aspect-[4/3] w-full flex-shrink-0 overflow-hidden bg-[#F3F4F6]">
                <Image
                  src={doctor.image}
                  alt={`${doctor.prefix} ${doctor.name}`}
                  fill
                  className="object-cover object-top"
                />
                <span className="absolute top-2 right-2 rounded-full bg-[#061627]/90 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-xs">
                  {doctor.experience.split(" ")[0]} Exp
                </span>
              </div>

              {/* Compact Content */}
              <div className="flex flex-1 flex-col justify-between p-3">
                <div>
                  <h3 className="text-sm font-semibold font-[family-name:var(--font-heading)] text-[#061627] tracking-tight line-clamp-1 leading-snug">
                    {doctor.prefix} {doctor.name}
                  </h3>
                  <p className="mt-0.5 text-[11px] font-semibold text-[#CD9E57] line-clamp-1">
                    {doctor.role}
                  </p>
                  <p className="mt-0.5 text-[10.5px] text-gray-500 line-clamp-1">
                    {doctor.qualification}
                  </p>
                </div>

                {/* Consultation Link Button */}
                <Link
                  href="/book-appointment"
                  className="mt-3 inline-flex w-full items-center justify-center gap-1 rounded-lg bg-[#061627] py-2 px-2 text-[11px] font-semibold !text-white active:scale-95 transition-all text-center"
                >
                  <span>Book Now</span>
                  <ArrowRight size={11} className="text-white" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ================= DESKTOP & TABLET VIEW (>= sm): EXACT EXISTING DESIGN UNTOUCHED ================= */}
        <div className="hidden sm:grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {doctors.map((doctor, idx) => (
            <ScrollReveal
              key={doctor.name}
              direction="up"
              distance={25}
              delay={idx * 90}
              duration={650}
              className="group relative flex h-[410px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xs transition-all duration-300 hover:border-gray-200 hover:shadow-xl"
            >
              {/* Image container on top: Compact height smoothly shortens on hover */}
              <div className="relative h-[290px] w-full flex-shrink-0 overflow-hidden bg-[#F3F4F6] transition-all duration-500 ease-out group-hover:h-[125px]">
                <Image
                  src={doctor.image}
                  alt={`${doctor.prefix} ${doctor.name}`}
                  fill
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Bottom Container */}
              <div className="flex flex-1 flex-col justify-start p-4 bg-white border-t border-gray-100 overflow-hidden">
                {/* Doctor Name, Role & Qualification */}
                <div className="shrink-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-[#061627] tracking-tight">
                      {doctor.prefix} {doctor.name}
                    </h3>
                    <span className="text-[11px] font-semibold text-[#061627] shrink-0 pt-0.5">
                      {doctor.experience.split(" ")[0]} Exp
                    </span>
                  </div>

                  <p className="mt-0.5 text-xs font-semibold text-[#061627] truncate">
                    {doctor.qualification}
                  </p>

                  <p className="mt-0.5 text-xs font-medium text-[#CD9E57] truncate">
                    {doctor.role}
                  </p>
                </div>

                {/* Details (Description, Focus, Timings, & Book Now) smoothly pushed upward */}
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <div className="pt-2 border-t border-gray-100 mt-2 space-y-2">
                      <p className="text-xs leading-snug text-gray-700 line-clamp-2">
                        {doctor.description}
                      </p>

                      <div className="text-[11px] leading-snug text-gray-600 line-clamp-1">
                        <span className="font-semibold text-[#061627]">Focus:</span> {doctor.focus}
                      </div>

                      {/* Timing schedule */}
                      <div className="rounded-lg bg-gray-50 border border-gray-200/60 p-2 text-xs text-[#061627] space-y-0.5">
                        <div className="flex items-center gap-1.5 font-semibold text-[#061627]">
                          <Clock3 size={12} className="text-[#061627] shrink-0" />
                          <span className="truncate">{doctor.time}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-600">
                          <Calendar size={12} className="text-gray-500 shrink-0" />
                          <span className="truncate">{doctor.days}</span>
                        </div>
                      </div>

                      {/* High-contrast Book Now button */}
                      <Link
                        href="/book-appointment"
                        className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#061627] py-2 px-3 text-[11.5px] font-semibold !text-white hover:!text-white transition-all hover:bg-black active:scale-[0.98]"
                      >
                        <span className="!text-white">Book Appointment</span>
                        <ArrowRight size={12} className="text-white" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
