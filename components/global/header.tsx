"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationDrawer } from "@/components/global/navigation-drawer";
import { HamburgerButton } from "@/components/global/hamburger-button";

const navLinks = [
  { label: "Stroke & Neuro Rehabilitation", href: "#neuro", hasPlus: true },
  { label: "Back & Neck Pain", href: "#pain", hasPlus: true },
  { label: "Our Doctors", href: "#doctors" },
  { label: "Treatments", href: "#treatments" },
  { label: "Facilities", href: "#facilities" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white text-[#061627] backdrop-blur-md border-b border-gray-200/80 shadow-xs"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent text-white"
          }`}
      >
        <div className="relative mx-auto flex h-[74px] max-w-[1440px] items-center justify-between px-6 sm:px-12 lg:px-20 xl:px-24">
          {/* Left: Overlapping Vertical Logo with White Banner Shape */}
          <div className="relative z-30 shrink-0">
            <a
              href="#"
              className="group absolute -top-4 left-0 flex h-[142px] w-[130px] sm:w-[144px] flex-col items-center justify-start transition-transform hover:scale-[1.02]"
            >
              {/* White background shape with chevron/ribbon bottom */}
              <div className="absolute inset-0 bg-white [clip-path:polygon(0_0,100%_0,100%_calc(100%-14px),50%_100%,0_calc(100%-14px))]" />

              {/* Bottom V-edge border line only */}
              <svg
                className="absolute inset-x-0 bottom-0 w-full h-[15px] pointer-events-none z-10"
                viewBox="0 0 100 15"
                preserveAspectRatio="none"
              >
                <polyline
                  points="0,1 50,14 100,1"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              <div className="relative z-10 flex h-[120px] w-full items-center justify-center pt-2 px-1">
                <div className="relative h-full w-full">
                  <Image
                    src="/logo/logo.png"
                    alt="Kumar Hospital"
                    fill
                    priority
                    className="object-contain object-center scale-110"
                  />
                </div>
              </div>
            </a>
            {/* Spacer to reserve room for logo width */}
            <div className="h-10 w-[130px] sm:w-[144px]" />
          </div>

          {/* Center/Right: Navigation Links (single row) */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 whitespace-nowrap pl-4">
            {navLinks.map(({ label, href, hasPlus }) => (
              <a
                key={label}
                href={href}
                className={`group flex items-center gap-1.5 text-[13.5px] font-medium transition-colors ${isScrolled
                  ? "text-[#4B5563] hover:text-[#061627]"
                  : "text-white/85 hover:text-white"
                  }`}
              >
                <span>{label}</span>
                {hasPlus && (
                  <Plus
                    size={14}
                    strokeWidth={3}
                    className={
                      isScrolled
                        ? "text-gray-800 group-hover:text-[#061627]"
                        : "text-white"
                    }
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Right: Book Appointment Button + Animated Hamburger Button */}
          <div className="flex items-center gap-3">
            <Button
              href="#appointment"
              variant={isScrolled ? "primary" : "white"}
              size="small"
              className="hidden sm:inline-flex transition-all duration-300"
            >
              Book an Appointment
            </Button>

            <Button
              href="#appointment"
              variant={isScrolled ? "primary" : "white"}
              size="small"
              className="sm:hidden transition-all duration-300"
            >
              Book
            </Button>

            {/* Animated Hamburger Button without box container */}
            <HamburgerButton
              isOpen={isDrawerOpen}
              isScrolled={isScrolled}
              onClick={() => setIsDrawerOpen((prev) => !prev)}
            />
          </div>
        </div>
      </header>

      {/* Navigation Drawer Component */}
      <NavigationDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
}
