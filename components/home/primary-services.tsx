import { ArrowRight } from "lucide-react";
import { BrainIcon, BackPainIcon } from "@/components/ui/category-icons";
import { Button } from "@/components/ui/button";

export const serviceCategories = [
  {
    number: "01",
    icon: BrainIcon,
    title: "Stroke & Neuro Rehabilitation",
    description:
      "Structured rehabilitation for stroke and neurological conditions with medical supervision and therapy.",
    href: "#neuro",
  },
  {
    number: "02",
    icon: BackPainIcon,
    title: "Back & Neck Pain",
    description:
      "Comprehensive non-surgical and interventional approaches for chronic back, neck and joint pain.",
    href: "#pain",
  },
];

export function PrimaryServices() {
  return (
    <section id="services" className="relative z-20 bg-white">
      <div className="mx-auto max-w-[1140px] px-6 sm:px-12 lg:px-16">
        <div className="grid gap-6 md:grid-cols-2">
          {serviceCategories.map((service, index) => {
            const Icon = service.icon;
            const isDark = index === 0;

            return (
              <div
                key={service.title}
                className={`group relative -mt-20 flex flex-col justify-between overflow-hidden rounded-2xl p-7 sm:p-9 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl ${isDark
                  ? "bg-[#061627] text-white border border-[#1E293B]"
                  : "bg-gradient-to-b from-white to-gray-50 text-[#061627] border border-gray-200"
                  }`}
              >
                {/* Subtle decorative background watermarks */}
                <div className="pointer-events-none absolute -bottom-6 -right-6 opacity-[0.06] transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-44 w-44" color={isDark ? "#ffffff" : "#061627"} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div
                      className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon
                        className="h-10 w-10 sm:h-18 sm:w-18"
                        color="#CD9E57"
                      />
                    </div>

                    <span
                      className={`text-2xl font-bold tracking-tight ${isDark ? "text-white/20" : "text-gray-300"
                        }`}
                    >
                      {service.number}
                    </span>
                  </div>

                  <h2
                    className={`mt-6 text-2xl font-bold tracking-[-0.02em] sm:text-[26px] leading-snug ${isDark ? "text-white" : "text-[#061627]"
                      }`}
                  >
                    {service.title}
                  </h2>

                  <p
                    className={`mt-3 text-[15px] leading-relaxed ${isDark ? "text-white/75" : "text-[#52606B]"
                      }`}
                  >
                    {service.description}
                  </p>
                </div>

                <div
                  className={`relative z-10 mt-8 flex items-center justify-start border-t pt-5 ${isDark ? "border-white/15" : "border-gray-200/80"
                    }`}
                >
                  <Button
                    href={service.href}
                    variant="primary"
                    size="small"
                    className="shadow-sm transition-transform group-hover:scale-[1.02]"
                  >
                    Explore this service
                    <ArrowRight size={14} />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

