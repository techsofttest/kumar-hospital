import Link from "next/link";
import Image from "next/image";
import { TreatmentItem } from "@/data/treatments";
import { SectionLabel } from "@/components/ui/section-label";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface TreatmentHeaderBarProps {
  treatment: TreatmentItem;
}

export function TreatmentHeaderBar({ treatment }: TreatmentHeaderBarProps) {
  return (
    <section className="relative overflow-hidden bg-[#CD9E57] pt-32 pb-10 sm:pt-80 sm:pb-12 text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={treatment.image}
          alt={treatment.title}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/5" />
      </div>

      <ScrollReveal direction="up" distance={15} duration={500}>
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 xl:px-24">
          {/* Breadcrumbs */}
          <nav className="mb-4 flex items-center gap-2 text-xs font-semibold text-white/85">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-white/60">/</span>
            <Link href="/treatments" className="hover:text-white transition-colors">
              Treatments
            </Link>
            <span className="text-white/60">/</span>
            <span className="text-white truncate">{treatment.title}</span>
          </nav>

          <SectionLabel light>{treatment.category}</SectionLabel>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-[family-name:var(--font-heading)] text-white tracking-tight leading-tight max-w-4xl">
              {treatment.title}
            </h1>

            <p className="mt-3 md:mt-0 text-base sm:text-lg text-white/95 font-semibold max-w-md text-right ml-auto">
              {treatment.tagline}
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

