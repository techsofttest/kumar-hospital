import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface PageHeroProps {
  label: string;
  title: string;
  description?: string;
  backgroundImage?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export function PageHero({
  label,
  title,
  description,
  backgroundImage = "/baner/b3.png",
  breadcrumbs = [{ label: "Home", href: "/" }],
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#061627] min-h-[380px] sm:min-h-[420px] lg:min-h-[450px] flex flex-col justify-end text-white">
      {/* Background Image & Gradient Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061627]/70 via-[#061627]/35 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-12 pt-32 sm:px-12 sm:pb-16 sm:pt-36 lg:px-20 lg:pb-16 xl:px-24">
        {/* Breadcrumbs */}
        <div className="mb-4 flex items-center gap-1.5 text-xs font-medium text-gray-300">
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb.label}>
              {idx > 0 && <ChevronRight size={13} className="text-gray-400" />}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hover:text-white transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white font-semibold">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
          <ChevronRight size={13} className="text-gray-400" />
          <span className="text-white font-semibold">{title}</span>
        </div>

        <ScrollReveal direction="up" distance={15} duration={500}>
          <SectionLabel light>{label}</SectionLabel>
        </ScrollReveal>

        <div className="max-w-[640px]">
          <ScrollReveal direction="up" distance={20} duration={650}>
            <h1 className="text-3xl font-medium font-[family-name:var(--font-heading)] leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl text-white">
              {title}
            </h1>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
