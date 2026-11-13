"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { Calendar, X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/components/gallery/gallery-grid";

interface GalleryLightboxProps {
  images?: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function GalleryLightbox({
  images = [],
  currentIndex,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const list = images ?? [];
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < list.length;
  const currentImage = isOpen ? list[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex === null || list.length === 0) return;
    const prevIndex = (currentIndex - 1 + list.length) % list.length;
    onNavigate(prevIndex);
  }, [currentIndex, list.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex === null || list.length === 0) return;
    const nextIndex = (currentIndex + 1) % list.length;
    onNavigate(nextIndex);
  }, [currentIndex, list.length, onNavigate]);

  // Keyboard navigation: Left/Right arrows and Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentImage) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 sm:p-6 backdrop-blur-xs animate-in fade-in-0 duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl sm:max-w-3xl overflow-hidden rounded-[22px] bg-white text-[#061627] shadow-xl border border-gray-200 flex flex-col"
      >
        {/* Close Button Top Right */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close image modal"
          className="absolute top-3.5 right-3.5 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#061627] hover:bg-white hover:text-black shadow-xs transition-colors cursor-pointer border border-gray-200/80"
        >
          <X size={16} />
        </button>

        {/* Carousel Image Container with reduced height & Navigation Arrows */}
        <div className="relative h-[280px] sm:h-[360px] md:h-[400px] w-full overflow-hidden bg-gray-50 flex items-center justify-center select-none">
          <Image
            key={currentImage.src}
            src={currentImage.src}
            alt={currentImage.title}
            fill
            className="object-cover transition-opacity duration-300"
            priority
          />

          {/* Left Arrow Button */}
          {list.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous image"
              className="absolute left-3.5 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 hover:bg-white text-[#061627] shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer border border-gray-200/80"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {/* Right Arrow Button */}
          {list.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next image"
              className="absolute right-3.5 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 hover:bg-white text-[#061627] shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer border border-gray-200/80"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>

        {/* Clean Footer Info in White Theme */}
        <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-t border-gray-100 bg-white">
          <h3 className="text-base sm:text-lg font-semibold font-[family-name:var(--font-heading)] text-[#061627] leading-snug">
            {currentImage.title}
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium shrink-0">
            <Calendar size={13} className="text-[#CD9E57]" />
            <span>{currentImage.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
