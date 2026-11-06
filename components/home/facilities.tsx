"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const facilities = [
  {
    title: "Robotic Gait Training",
    description: "Advanced robotic exoskeleton and body-weight supported gait therapy for motor re-learning.",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "IDD Spinal Decompression",
    description: "Precision computer-directed intervertebral decompression for targeted lumbar and cervical relief.",
    image: "/categories/3d-render-male-figure-leaning-with-spine-highlighted.jpg",
  },
  {
    title: "High-Intensity Laser Systems",
    description: "Deep tissue photobiomodulation promoting accelerated cellular repair and pain alleviation.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Computer-Aided Hand Function",
    description: "Sensorized hand biomechanics and interactive neuro-feedback therapy for fine motor skills.",
    image: "/categories/brain-spine-design.jpg",
  },
  {
    title: "Accessible Inpatient Facilities",
    description: "Ergonomically engineered barrier-free inpatient suites designed around patient mobility.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Advanced Therapy Gymnasium",
    description: "Spacious specialized rehabilitation floor equipped with multidisciplinary therapeutic stations.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
  },
];

export function Facilities() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Each view shows 2 cards on desktop
  const maxIndex = facilities.length - 2;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section id="facilities" className="bg-[#061627] py-16 sm:py-20 lg:py-24 text-white overflow-hidden border-b border-white/10">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 xl:px-24">
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-14 items-start">
          {/* Left Column: Heading, description & Carousel Controls */}
          <ScrollReveal direction="up" distance={20} duration={600}>
            <SectionLabel light>Advanced Facilities</SectionLabel>

            <h2 className="text-3xl font-medium font-[family-name:var(--font-heading)] leading-tight tracking-[-0.03em] sm:text-4xl text-white">
              Technology that supports better rehabilitation.
            </h2>

            {/* Carousel navigation buttons and counter */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  aria-label="Previous slide"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white/15 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={currentIndex >= maxIndex}
                  aria-label="Next slide"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white/15 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              <span className="text-xs font-semibold tracking-wider text-white/50 uppercase">
                {String(currentIndex + 1).padStart(2, "0")} / {String(facilities.length).padStart(2, "0")}
              </span>
            </div>
          </ScrollReveal>

          {/* Right Column: Carousel Track with Image Cards */}
          <ScrollReveal direction="left" distance={30} duration={700} delay={150} className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                gap: "24px",
                transform: `translateX(calc(-${currentIndex} * (50% + 12px)))`,
              }}
            >
              {facilities.map((facility) => (
                <div
                  key={facility.title}
                  className="group relative flex-shrink-0 w-full sm:w-[calc(50%-12px)] flex flex-col overflow-hidden rounded-[22px] bg-[#10243C] transition-all duration-300 hover:bg-[#152D4A]"
                >
                  {/* Image container on top with controlled aspect ratio */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Text Container below image */}
                  <div className="flex flex-col justify-center p-6 sm:p-7">
                    <h3 className="text-[17.5px] font-semibold text-white tracking-tight leading-snug">
                      {facility.title}
                    </h3>
                    <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-300">
                      {facility.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
