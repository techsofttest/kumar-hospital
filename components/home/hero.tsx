"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SectionLabel } from "../ui/section-label";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Activity,
  HeartPulse,
} from "lucide-react";

export const slides = [
  {
    eyebrow: "Kumar Centre For Stroke & Neuro Rehabilitation",
    title: "Helping patients move forward, one step at a time.",
    image:
      "/hero/Kumar Centre For Stroke & Neuro Rehabilitation.png",
  },
  {
    eyebrow: "Back & Neck Pain Care",
    title: "Advanced care for back and neck pain — without rushing to surgery.",
    image:
      "/hero/Back & Neck Pain Care.png",
  },
  {
    eyebrow: "Rehabilitation • Pain • Neuro Care",
    title: "Specialist rehabilitation made accessible.",
    image:
      "/hero/Rehabilitation, Pain & Neuro Care.png",
  },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[70vh] min-h-[480px] overflow-hidden bg-[#061627]">
      {slides.map((slide, index) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === activeSlide
            ? "opacity-100"
            : "pointer-events-none opacity-0"
            }`}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority={index === 0}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />

          <div className="relative mx-auto flex h-full max-w-[1440px] items-start pt-16 sm:pt-20 lg:pt-24 px-14 sm:px-20 lg:px-24 xl:px-28">
            <div className="max-w-[760px]">
              <SectionLabel light>{slide.eyebrow}</SectionLabel>

              <h1 className="max-w-[480px] text-3xl font-normal font-serif leading-[1.1] tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
                {slide.title}
              </h1>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button
                  href="#appointment"
                  variant="primary"
                  size="small"
                >
                  Book an Appointment
                  <ArrowRight size={15} />
                </Button>

                <Button
                  href="#services"
                  variant="secondary"
                  size="small"
                  className="border-white/40 text-white hover:bg-white/10 hover:border-white"
                >
                  Explore Our Care
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows aligned to left & right edges of the carousel */}
      <button
        onClick={previousSlide}
        aria-label="Previous slide"
        className="absolute left-4 sm:left-6 lg:left-8 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-black/30 backdrop-blur-md text-white transition hover:bg-black/60 hover:border-white/50 active:scale-95 shadow-md"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 sm:right-6 lg:right-8 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-black/30 backdrop-blur-md text-white transition hover:bg-black/60 hover:border-white/50 active:scale-95 shadow-md"
      >
        <ChevronRight size={22} />
      </button>

    </section>
  );
}

