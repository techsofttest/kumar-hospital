import Image from "next/image";
import Link from "next/link";
import { Clock3, Calendar, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";

export const doctors = [
  {
    prefix: "Dr.",
    name: "Sasikumar",
    role: "Physical Medicine & Rehabilitation Specialist",
    description:
      "Specialising in physical medicine, musculoskeletal recovery, and personalized rehabilitation protocols.",
    time: "08:00 – 13:00 hrs",
    days: "Mon, Tue, Wed, Fri, Sat",
    image: "/doctors/DR_ SASIKUMAR.png",
  },
  {
    prefix: "Dr.",
    name: "Malini Sasikumar",
    role: "Specialist Consultant",
    description:
      "Expert consultant combining clinical precision with dedicated patient care for neuro & spine recovery.",
    time: "08:00 – 13:00 hrs",
    days: "Mon, Tue, Wed, Fri, Sat",
    image: "/doctors/DR_MALINI SASIKUMAR.png",
  },
  {
    prefix: "Dr.",
    name: "Sruthi Sasikumar",
    role: "Neurologist & Pain Specialist",
    description:
      "Dedicated to advanced stroke recovery, neurological disorders, and interventional pain therapies.",
    time: "08:00 – 13:00 hrs",
    days: "Mon, Tue, Wed, Fri, Sat",
    image: "/doctors/DR_SRUTHI SASIKUMAR - Copy.png",
  },
  {
    prefix: "Dr.",
    name: "Sreenath P R",
    role: "Specialist Consultant",
    description:
      "Specialist consultant focused on restorative care, robotic gait analysis, and movement disorders.",
    time: "15:00 – 17:00 hrs",
    days: "Wednesday & Friday",
    image: "/doctors/Dr Sreenath P R.png",
  },
];

export function Doctors() {
  return (
    <section id="doctors" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 xl:px-24">
        {/* Section Header */}
        <div className="mb-12">
          <SectionLabel>Our Doctors</SectionLabel>
          <h2 className="text-3xl font-medium font-[family-name:var(--font-heading)] tracking-[-0.03em] sm:text-4xl lg:text-5xl text-[#061627]">
            Meet your care team.
          </h2>
        </div>

        {/* 4 Cards in a row with reduced compact height */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="group relative flex h-[390px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xs transition-all duration-300 hover:border-gray-200 hover:shadow-xl"
            >
              {/* Image container on top: Compact height smoothly shortens on hover */}
              <div className="relative h-[295px] w-full flex-shrink-0 overflow-hidden bg-[#F3F4F6] transition-all duration-500 ease-out group-hover:h-[135px]">
                <Image
                  src={doctor.image}
                  alt={`${doctor.prefix} ${doctor.name}`}
                  fill
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Bottom Container: Compact padding, no excess whitespace */}
              <div className="flex flex-1 flex-col justify-start p-4 bg-white border-t border-gray-100 overflow-hidden">
                {/* Doctor Name & Role */}
                <div className="shrink-0">
                  <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-[#061627] tracking-tight">
                    {doctor.prefix} {doctor.name}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-gray-600 truncate">
                    {doctor.role}
                  </p>
                </div>

                {/* Details (Description, Timings, & Book Now) smoothly pushed upward */}
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <div className="pt-2 border-t border-gray-100 mt-2 space-y-2">
                      <p className="text-xs leading-snug text-gray-700 line-clamp-2">
                        {doctor.description}
                      </p>

                      {/* Timing schedule */}
                      <div className="rounded-lg bg-gray-50 border border-gray-200/60 p-2 text-xs text-[#061627] space-y-0.5">
                        <div className="flex items-center gap-1.5 font-semibold text-[#061627]">
                          <Clock3 size={13} className="text-[#061627] shrink-0" />
                          <span className="truncate">{doctor.time}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-600">
                          <Calendar size={13} className="text-gray-500 shrink-0" />
                          <span className="truncate">{doctor.days}</span>
                        </div>
                      </div>

                      {/* High-contrast Book Now button */}
                      <Link
                        href="#appointment"
                        className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#061627] py-2 px-3 text-[11.5px] font-semibold !text-white hover:!text-white transition-all hover:bg-black active:scale-[0.98]"
                      >
                        <span className="!text-white">Book Appointment</span>
                        <ArrowRight size={12} className="text-white" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
