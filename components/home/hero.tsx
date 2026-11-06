"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SectionLabel } from "../ui/section-label";
import { Button } from "@/components/ui/button";
import { BrainIcon, BackPainIcon } from "@/components/ui/category-icons";

export const primaryQuickServices = [
  {
    icon: BrainIcon,
    title: "Stroke & Neuro Rehabilitation",
    href: "#neuro",
  },
  {
    icon: BackPainIcon,
    title: "Back & Neck Pain",
    href: "#pain",
  },
];

export const slides = [
  {
    eyebrow: "Kumar Centre For Stroke & Neuro Rehabilitation",
    title: "Helping patients move forward, one step at a time.",
    image: "/home-hero/Neural Pain in Atmospheric Blue.png",
  },
  {
    eyebrow: "Back & Neck Pain Care",
    title: "Advanced care for back and neck pain — without rushing to surgery.",
    image: "/home-hero/Glowing Spine in Smoky Blue X-Ray.png",
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
    <section className="relative h-[100vh] min-h-[560px] overflow-hidden bg-[#061627]">
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
          {/* <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" /> */}

          <div className="relative mx-auto flex h-full max-w-[1440px] items-end justify-between gap-8 px-14 sm:px-20 lg:px-24 xl:px-28 pb-0">
            {/* Left text column */}
            <div className="max-w-[760px] pb-12 sm:pb-16 lg:pb-16">
              <SectionLabel light>{slide.eyebrow}</SectionLabel>

              <h1 className="max-w-[520px] text-3xl font-medium font-[family-name:var(--font-heading)] leading-[1.1] tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
                {slide.title}
              </h1>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button
                  href="#appointment"
                  variant="primary"
                  size="normal"
                >
                  Book an Appointment
                </Button>
              </div>
            </div>

            {/* Bottom-right attached backdrop-blurred box */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 shrink-0 z-20 self-end bg-black/40 backdrop-blur-xl text-white px-7 pt-6 pb-5 rounded-t-3xl shadow-2xl">
              {primaryQuickServices.map((service) => {
                const Icon = service.icon;

                return (
                  <a
                    key={service.title}
                    href={service.href}
                    className="group flex items-center gap-4 text-white transition-all duration-200 hover:-translate-y-0.5"
                  >
                    {/* Rotating stroke around icon */}
                    <div className="relative flex h-16 w-16 sm:h-18 sm:w-18 shrink-0 items-center justify-center">
                      <svg
                        className="pointer-events-none absolute inset-0 h-full w-full animate-[spin_9s_linear_infinite]"
                        viewBox="0 0 100 100"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="46"
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.45)"
                          strokeWidth="1.5"
                          strokeDasharray="8 6 18 6"
                          strokeLinecap="round"
                        />
                      </svg>

                      {/* Icon with hover scale */}
                      <div className="transition-transform duration-200 group-hover:scale-110">
                        <Icon className="h-8 w-8 sm:h-9 sm:w-9 text-white" color="#ffffff" />
                      </div>
                    </div>

                    <span className="text-base sm:text-lg font-medium tracking-tight text-white max-w-[180px] xl:max-w-[210px] leading-snug group-hover:underline decoration-white/60 underline-offset-4">
                      {service.title}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
