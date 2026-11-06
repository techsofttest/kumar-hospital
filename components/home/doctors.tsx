import Image from "next/image";
import { Clock3, CalendarDays } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";

export const doctors = [
  {
    name: "Dr Sasikumar",
    role: "Physical Medicine & Rehabilitation",
    time: "08:00 – 13:00 hrs",
    days: "Mon, Tue, Wed, Fri, Sat",
    image: "/doctors/DR_ SASIKUMAR.png",
  },
  {
    name: "Dr Malini Sasikumar",
    role: "Specialist Consultant",
    time: "08:00 – 13:00 hrs",
    days: "Mon, Tue, Wed, Fri, Sat",
    image: "/doctors/DR_MALINI SASIKUMAR.png",
  },
  {
    name: "Dr Sruthi Sasikumar",
    role: "Neurologist & Pain Specialist",
    time: "08:00 – 13:00 hrs",
    days: "Mon, Tue, Wed, Fri, Sat",
    image: "/doctors/DR_SRUTHI SASIKUMAR - Copy.png",
  },
  {
    name: "Dr Sreenath P R",
    role: "Specialist Consultant",
    time: "15:00 – 17:00 hrs",
    days: "Wednesday & Friday",
    image: "/doctors/Dr Sreenath P R.png",
  },
];

export function Doctors() {
  return (
    <section id="doctors" className="py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 xl:px-24">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <SectionLabel>Our Doctors</SectionLabel>

            <h2 className="text-3xl font-normal font-serif tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Meet your care team.
            </h2>
          </div>

          <p className="max-w-[480px] text-[14px] leading-6 text-[#5B6872]">
            Consultation timings are listed below. Please contact the centre
            before visiting to confirm availability.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="flex flex-col overflow-hidden rounded-2xl bg-gray-100 transition hover:border-gray-300 hover:shadow-sm"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-gray-200">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top transition duration-300 hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <h3 className="text-[17px] font-semibold text-[#061627]">
                  {doctor.name}
                </h3>

                <p className="mt-1 text-[13px] leading-snug text-[#6B747B]">
                  {doctor.role}
                </p>

                <div className="mt-3.5 pt-3">
                  <div className="flex gap-2.5">
                    <Clock3
                      size={16}
                      className="mt-0.5 shrink-0 text-[#CD9E57]"
                    />
                    <div>
                      <p className="text-[13px] font-semibold text-[#061627]">
                        {doctor.time}
                      </p>
                      <p className="mt-0.5 text-[12px] leading-tight text-[#6B747B]">
                        {doctor.days}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-5 flex items-start gap-3 rounded-2xl border border-gray-200 bg-gray-100 p-5 text-[13px] text-[#53616B]">
          <CalendarDays
            size={18}
            className="mt-0.5 shrink-0 text-[#CD9E57]"
          />
          <p>
            <strong className="font-semibold text-[#061627]">
              Thursdays:
            </strong>{" "}
            Diagnostics and online consultation.
          </p>
        </div> */}
      </div>
    </section>
  );
}

