"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GalleryLightbox } from "@/components/gallery/gallery-lightbox";

export interface GalleryItem {
  src: string;
  title: string;
  date: string;
  category: string;
}

export const galleryImages: GalleryItem[] = [
  {
    src: "/home-hero/Guided Steps in a Rehab Clinic.png",
    title: "Physiotherapy & Gait Training Arena",
    date: "12 Oct 2025",
    category: "Rehabilitation",
  },
  {
    src: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=1000&q=80",
    title: "Robotic Gait Exoskeleton System",
    date: "28 Sep 2025",
    category: "Technology",
  },
  {
    src: "/categories/3d-render-male-figure-leaning-with-spine-highlighted.jpg",
    title: "IDD Spinal Decompression Unit",
    date: "15 Aug 2025",
    category: "Spine Care",
  },
  {
    src: "/home-hero/Gentle Neck Stretch in a Sunlit Clinic.png",
    title: "Cervical & Posture Clinic Consultation",
    date: "04 Jul 2025",
    category: "Clinical Care",
  },
  {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80",
    title: "Barrier-Free Inpatient Accessible Suite",
    date: "20 Jun 2025",
    category: "Inpatient Rooms",
  },
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80",
    title: "Multidisciplinary Rehabilitation Gym",
    date: "11 May 2025",
    category: "Rehabilitation",
  },
  {
    src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80",
    title: "Class IV High-Intensity Laser Console",
    date: "18 Apr 2025",
    category: "Technology",
  },
  {
    src: "/categories/Neural Pathways in Focus.png",
    title: "Neuro-Muscular Relearning Chamber",
    date: "02 Mar 2025",
    category: "Neurology",
  },
  {
    src: "/categories/brain-spine-design.jpg",
    title: "Spine & Neurological Biomechanical Lab",
    date: "14 Feb 2025",
    category: "Clinical Care",
  },
];

const categories = ["All", "Rehabilitation", "Technology", "Inpatient Rooms", "Clinical Care"];

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filtered = galleryImages.filter((img) => {
    if (activeCategory === "All") return true;
    return img.category === activeCategory;
  });

  return (
    <>
      {/* Category Filter Tabs */}
      <section className="bg-[#F4F5F7] py-6 border-b border-gray-200/80 z-30 backdrop-blur-md">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 xl:px-24">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedIndex(null);
                }}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${activeCategory === cat
                  ? "bg-[#061627] text-white shadow-xs"
                  : "bg-white text-gray-700 border border-gray-200/90 hover:border-gray-400"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Cards Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 xl:px-24">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, idx) => (
              <ScrollReveal
                key={item.title}
                direction="up"
                distance={20}
                delay={idx * 60}
                duration={600}
                className="group cursor-pointer transition-all duration-300"
              >
                <div
                  onClick={() => setSelectedIndex(idx)}
                  className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 rounded-lg"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Below Image: Title & Date Only */}
                <div
                  onClick={() => setSelectedIndex(idx)}
                  className="pt-5 flex flex-col justify-between"
                >
                  <h3 className="text-[16px] font-semibold text-[#061627] tracking-tight leading-snug line-clamp-1 group-hover:text-[#CD9E57] transition-colors">
                    {item.title}
                  </h3>

                  <div className="mt-2.5 flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                    <Calendar size={13} className="text-gray-400 shrink-0" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Carousel Modal */}
      <GalleryLightbox
        images={filtered}
        currentIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onNavigate={(idx) => setSelectedIndex(idx)}
      />
    </>
  );
}
