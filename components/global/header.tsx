"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Plus, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationDrawer } from "@/components/global/navigation-drawer";
import { HamburgerButton } from "@/components/global/hamburger-button";

const navLinks = [
  {
    label: "Stroke & Neuro Rehabilitation",
    href: "#neuro",
    items: [
      { label: "Stroke Recovery Program", href: "#neuro" },
      { label: "Neurological Assessment", href: "#neuro" },
      { label: "Robotic Gait Training", href: "#neuro" },
      { label: "Physiotherapy & Mobility", href: "#neuro" },
      { label: "Occupational Therapy", href: "#neuro" },
      { label: "Speech & Swallowing Therapy", href: "#neuro" },
    ],
  },
  {
    label: "Back & Neck Pain",
    href: "#pain",
    items: [
      { label: "Non-Surgical Spine Care", href: "#pain" },
      { label: "IDD Spinal Decompression", href: "#pain" },
      { label: "Interventional Pain Procedures", href: "#pain" },
      { label: "Class IV Laser Pain Therapy", href: "#pain" },
      { label: "Prolotherapy & PRP Injections", href: "#pain" },
      { label: "Cervical & Lumbar Rehab", href: "#pain" },
    ],
  },
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

          {/* Center/Right: Navigation Links with Simple Minimal High-Contrast Dropdowns */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 whitespace-nowrap pl-4">
            {navLinks.map((navItem) => {
              const hasDropdown = Boolean(navItem.items && navItem.items.length > 0);

              if (hasDropdown) {
                return (
                  <div key={navItem.label} className="relative group/menu py-6">
                    <a
                      href={navItem.href}
                      className={`flex items-center gap-1.5 text-[13.5px] font-medium transition-colors cursor-pointer ${
                        isScrolled
                          ? "text-[#4B5563] group-hover/menu:text-[#061627]"
                          : "text-white/85 group-hover/menu:text-white"
                      }`}
                    >
                      <span>{navItem.label}</span>
                      <Plus
                        size={13}
                        strokeWidth={3}
                        className={`transition-transform duration-200 group-hover/menu:rotate-45 ${
                          isScrolled ? "text-[#061627]" : "text-white"
                        }`}
                      />
                    </a>

                    {/* Simple, Minimal, Clean White Dropdown Card */}
                    <div className="absolute left-0 top-[calc(100%-8px)] hidden group-hover/menu:flex flex-col w-[300px] rounded-2xl bg-white text-[#061627] p-3 shadow-2xl border border-gray-100 animate-in fade-in-0 zoom-in-95 duration-150 z-50">
                      <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-gray-500 border-b border-gray-100 mb-1">
                        {navItem.label}
                      </div>

                      <div className="flex flex-col space-y-0.5">
                        {navItem.items!.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="group/item flex items-center justify-between rounded-xl px-3 py-2.5 text-[13.5px] font-medium text-[#1F2937] transition-all hover:bg-gray-100 hover:text-[#061627]"
                          >
                            <span className="truncate pr-2">{subItem.label}</span>
                            <ArrowUpRight
                              size={15}
                              className="shrink-0 text-gray-400 transition-transform duration-200 group-hover/item:text-[#CD9E57] group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5"
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={navItem.label}
                  href={navItem.href}
                  className={`flex items-center gap-1.5 text-[13.5px] font-medium transition-colors ${
                    isScrolled
                      ? "text-[#4B5563] hover:text-[#061627]"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  <span>{navItem.label}</span>
                </a>
              );
            })}
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
