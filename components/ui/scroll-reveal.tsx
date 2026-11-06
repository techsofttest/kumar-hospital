"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in milliseconds
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number; // distance in px, default 24
  duration?: number; // duration in ms, default 700
  threshold?: number; // intersection ratio, default 0.12
}

/**
 * ScrollReveal Component
 * - SEO Safe: Elements render completely visible in SSR HTML so search engine bots index all content.
 * - Progressive Enhancement: On client mount, elements attach an IntersectionObserver and animate into view smoothly as the user scrolls.
 * - Does not wrap or mutate outer <section> tags; applies strictly to child containers.
 */
export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 24,
  duration = 700,
  threshold = 0.12,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const element = ref.current;
    if (!element) return;

    // Fallback if IntersectionObserver is not supported
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px", // triggers slightly before scrolling deep into the element
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  // Transform offset based on direction
  const getTransform = () => {
    if (!hasMounted || isVisible) return "none";
    switch (direction) {
      case "up":
        return `translate3d(0, ${distance}px, 0)`;
      case "down":
        return `translate3d(0, -${distance}px, 0)`;
      case "left":
        return `translate3d(${distance}px, 0, 0)`;
      case "right":
        return `translate3d(-${distance}px, 0, 0)`;
      case "none":
      default:
        return "none";
    }
  };

  const isAnimated = hasMounted ? isVisible : true;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isAnimated ? 1 : 0,
        transform: getTransform(),
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}ms`,
        willChange: isAnimated ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

