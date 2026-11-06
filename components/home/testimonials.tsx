"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const patientTestimonials = [
  {
    rating: 5,
    quote:
      "The rehabilitation process was much easier than I expected. The doctor and staff were very caring throughout, and I can finally walk without hesitation after my recovery.",
    name: "Chinchu Dominic",
    treatment: "Neuro Rehabilitation",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80",
  },
  {
    rating: 5,
    quote:
      "The treatment was thorough, but the doctors' personal care made it smooth. Recovery was faster than expected, and the pain relief has truly been life-changing.",
    name: "Alex K",
    treatment: "Back & Neck Pain Care",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
  },
  {
    rating: 5,
    quote:
      "I was dreading the therapy after months of severe pain, but the entire non-surgical decompression procedure was gentle and effective. Everything went wonderfully.",
    name: "Devassy Chittayath",
    treatment: "IDD Spinal Therapy",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
  },
  {
    rating: 5,
    quote:
      "After years of trying different treatments, I finally experienced a significant improvement in my movement, balance, and daily activities with robotic gait training.",
    name: "Meera Nair",
    treatment: "Robotic Gait Training",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
  },
  {
    rating: 5,
    quote:
      "Getting back to independence was tough at first, but the support from the multidisciplinary therapy team made all the difference. I couldn't be happier with the results.",
    name: "Rahul Menon",
    treatment: "Stroke Recovery",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Showing 3 cards at a time on desktop: maxIndex is length - 3
  const maxIndex = Math.max(0, patientTestimonials.length - 3);

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section id="testimonials" className="relative overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-gray-200">
      {/* Background Image Behind the Boxed Section */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/baner/b6.png"
          alt="Testimonials backdrop"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#061627]/45" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 xl:px-24">
        {/* Boxed Gray Section containing the 3-card carousel */}
        <ScrollReveal direction="up" distance={25} duration={650} className="mx-auto max-w-[1340px] rounded-[28px] bg-[#F3F4F6] p-7 sm:p-10 lg:p-12">
          {/* Header row inside the box */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-10">
            <div>
              <SectionLabel>Patient Stories</SectionLabel>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium font-[family-name:var(--font-heading)] tracking-[-0.03em] text-[#061627]">
                What our patients say.
              </h2>
            </div>

            {/* Carousel Arrow Controls */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  aria-label="Previous review"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#061627] shadow-xs transition hover:bg-gray-100 hover:scale-105 active:scale-95 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  disabled={currentIndex >= maxIndex}
                  aria-label="Next review"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#061627] shadow-xs transition hover:bg-gray-100 hover:scale-105 active:scale-95 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* 3 Cards at a time Track */}
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                gap: "20px",
                transform: `translateX(calc(-${currentIndex} * (33.333% + 6.666px)))`,
              }}
            >
              {patientTestimonials.map((item) => (
                <div
                  key={item.name}
                  className="relative flex-shrink-0 w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-13.333px)] flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Quote size={28} className="text-[#CD9E57]/25 shrink-0" />
                    </div>

                    {/* Quote Text */}
                    <p className="text-md leading-relaxed text-[#1F2937] font-medium line-clamp-4">
                      “{item.quote}”
                    </p>
                  </div>

                  {/* Patient Info Footer */}
                  <div className="mt-6 flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-200 shadow-xs">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="text-[14px] font-semibold text-[#061627] truncate">
                        {item.name}
                      </h4>
                      <p className="text-[12px] font-medium text-gray-500 truncate">
                        {item.treatment}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Bottom Center: View All Button */}
          <div className="mt-8 flex justify-center">
            <Button href="#appointment" variant="primary" size="normal">
              View All Reviews
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
