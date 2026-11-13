import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const stats = [
  { value: "25+", label: "Years of Clinical Excellence" },
  { value: "15,000+", label: "Recovered Patients" },
  { value: "100%", label: "Specialist-Led Treatment" },
  { value: "30+", label: "Modern Therapy Disciplines" },
];

export function AboutStats() {
  return (
    <section className="bg-[#F4F5F7] py-12 border-b border-gray-200/80">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 xl:px-24">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <ScrollReveal
              key={stat.label}
              direction="up"
              distance={15}
              delay={idx * 80}
              className="text-center sm:text-left"
            >
              <div className="text-3xl sm:text-4xl font-semibold font-[family-name:var(--font-heading)] text-[#061627]">
                {stat.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm font-medium text-gray-600">
                {stat.label}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

