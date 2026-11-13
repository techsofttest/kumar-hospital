import Image from "next/image";
import Link from "next/link";
import { Clock3, Calendar, ArrowRight, Award } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { doctors } from "@/components/home/doctors";

export function DoctorsGrid() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 xl:px-24">
        <ScrollReveal direction="up" distance={20} duration={600} className="max-w-[720px] mb-12 sm:mb-16">
          <SectionLabel>Specialist Panel</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-[family-name:var(--font-heading)] text-[#061627] tracking-[-0.03em]">
            Compassionate doctors with proven clinical mastery.
          </h2>
        </ScrollReveal>

        {/* ================= MOBILE VIEW (< sm) ================= */}
        <div className="flex flex-col gap-5 sm:hidden">
          {doctors.map((doc, idx) => (
            <ScrollReveal
              key={`mobile-${doc.name}`}
              direction="up"
              distance={20}
              delay={idx * 70}
              duration={550}
              className="overflow-hidden rounded-2xl border border-gray-200/90 bg-[#F4F5F7] shadow-xs"
            >
              {/* Doctor Photo */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
                <Image
                  src={doc.image}
                  alt={`${doc.prefix} ${doc.name}`}
                  fill
                  className="object-cover object-top"
                />
                {/* Floating Experience Badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-[#061627]/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-xs">
                  <Award size={13} className="text-[#CD9E57] shrink-0" />
                  <span>{doc.experience}</span>
                </div>
              </div>

              {/* Doctor Details */}
              <div className="p-5">
                <div>
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-[#061627] tracking-tight">
                    {doc.prefix} {doc.name}
                  </h3>

                  <p className="mt-0.5 text-xs font-semibold text-[#061627]">
                    {doc.qualification}
                  </p>

                  <p className="mt-0.5 text-xs font-medium text-[#CD9E57]">
                    {doc.role}
                  </p>
                </div>

                <div className="mt-3.5 pt-3.5 border-t border-gray-200/80">
                  <p className="text-xs leading-relaxed text-[#2D3748]">
                    {doc.description}
                  </p>

                  <div className="mt-3 rounded-xl bg-white border border-gray-200 p-3 text-xs leading-relaxed text-[#2D3748]">
                    <span className="font-semibold text-[#061627]">Areas of Treatment / Focus:</span> {doc.focus}
                  </div>
                </div>

                {/* Timings & Booking Button */}
                <div className="mt-4 pt-3.5 border-t border-gray-200/80 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#061627]">
                    <div className="flex items-center gap-1.5">
                      <Clock3 size={13} className="text-[#CD9E57] shrink-0" />
                      <span>{doc.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <Calendar size={13} className="text-gray-500 shrink-0" />
                      <span>{doc.days}</span>
                    </div>
                  </div>

                  <Button
                    href="/book-appointment"
                    variant="primary"
                    size="small"
                    className="w-full justify-center h-10"
                  >
                    Book Consultation
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ================= DESKTOP & TABLET VIEW (>= sm): EXACT EXISTING DESIGN UNTOUCHED ================= */}
        <div className="hidden sm:grid gap-8 sm:grid-cols-1 lg:grid-cols-1 lg:gap-10">
          {doctors.map((doc, idx) => (
            <ScrollReveal
              key={doc.name}
              direction="up"
              distance={24}
              delay={idx * 100}
              duration={650}
              className="flex flex-col sm:flex-row overflow-hidden rounded-[24px] border border-gray-200/90 bg-[#F4F5F7] shadow-xs hover:border-gray-300 transition-all duration-300"
            >
              {/* Doctor Photo */}
              <div className="relative aspect-square w-full sm:w-[320px] md:w-[340px] lg:w-[360px] shrink-0 overflow-hidden bg-gray-200">
                <Image
                  src={doc.image}
                  alt={`${doc.prefix} ${doc.name}`}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Doctor Bio & Details */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7 relative">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl sm:text-2xl font-semibold font-[family-name:var(--font-heading)] text-[#061627] tracking-tight">
                      {doc.prefix} {doc.name}
                    </h3>

                    {/* Top-Right Experience */}
                    <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-[#061627] shrink-0 pt-0.5">
                      <Award size={15} className="text-[#CD9E57] shrink-0" />
                      <span>{doc.experience}</span>
                    </div>
                  </div>

                  <p className="mt-1 text-xs sm:text-sm font-semibold text-[#061627]">
                    {doc.qualification}
                  </p>

                  <p className="mt-1 text-xs sm:text-[13px] font-medium text-[#CD9E57]">
                    {doc.role}
                  </p>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm leading-relaxed text-[#2D3748]">
                      {doc.description}
                    </p>

                    <div className="mt-3.5 rounded-xl bg-white border border-gray-200 p-3 text-xs sm:text-[13px] leading-relaxed text-[#2D3748]">
                      <span className="font-semibold text-[#061627]">Areas of Treatment / Focus:</span> {doc.focus}
                    </div>
                  </div>
                </div>

                {/* Schedule & Consultation CTA */}
                <div className="mt-6 pt-4 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="space-y-1 text-xs sm:text-[13px]">
                    <div className="flex items-center gap-1.5 font-semibold text-[#061627]">
                      <Clock3 size={14} className="shrink-0" />
                      <span>{doc.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-semibold text-[#4A5568]">
                      <Calendar size={14} className="text-gray-500 shrink-0" />
                      <span>{doc.days}</span>
                    </div>
                  </div>

                  <Button
                    href="/book-appointment"
                    variant="primary"
                    size="small"
                    className="shrink-0"
                  >
                    Book Consultation
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
