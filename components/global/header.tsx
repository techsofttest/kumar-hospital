"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Plus, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationDrawer } from "@/components/global/navigation-drawer";
import { HamburgerButton } from "@/components/global/hamburger-button";

const navLinks = [
  {
    label: "Stroke & Neuro Rehabilitation",
    href: "/services",
    items: [
      { label: "Stroke Recovery Program", href: "/services/stroke-recovery-program" },
      { label: "Neurological Assessment", href: "/services/neurological-assessment" },
      { label: "Robotic Gait Training", href: "/services/robotic-gait-training" },
      { label: "Physiotherapy & Mobility", href: "/services/physiotherapy-mobility" },
      { label: "Occupational Therapy", href: "/services/occupational-therapy" },
      { label: "Speech & Swallowing Therapy", href: "/services/speech-swallowing-therapy" },
    ],
  },
  {
    label: "Back & Neck Pain",
    href: "/services",
    items: [
      { label: "Non-Surgical Spine Care", href: "/services/non-surgical-spine-care" },
      { label: "IDD Spinal Decompression", href: "/services/idd-spinal-decompression" },
      { label: "Interventional Pain Procedures", href: "/services/interventional-pain-procedures" },
      { label: "Class IV Laser Pain Therapy", href: "/services/laser-pain-therapy" },
      { label: "Prolotherapy & PRP Injections", href: "/services/prp-prolotherapy" },
      { label: "Cervical & Lumbar Rehab", href: "/services/cervical-lumbar-rehabilitation" },
    ],
  },
  { label: "Our Doctors", href: "/doctors" },
  { label: "Services", href: "/services" },
  { label: "Facilities", href: "/facilities" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Check if current page is a service or treatment detailed page
  const isDetailPage =
    (pathname?.startsWith("/services/") && pathname.split("/").filter(Boolean).length === 2) ||
    (pathname?.startsWith("/treatments/") && pathname.split("/").filter(Boolean).length === 2);

  // Header should render with solid white background if scrolled OR on detail pages
  const isWhiteBg = isScrolled || isDetailPage;

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
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${isWhiteBg
          ? "bg-white text-[#061627] backdrop-blur-md border-b border-gray-200/80 shadow-xs"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent text-white"
          }`}
      >
        <div className="relative mx-auto flex h-[74px] max-w-[1440px] items-center justify-between px-6 sm:px-12 lg:px-20 xl:px-24">
          {/* Left: Overlapping Vertical Logo with White Banner Shape */}
          <div className="relative z-30 shrink-0">
            <Link
              href="/"
              className="group absolute -top-9 left-0 flex h-[142px] w-[130px] sm:w-[144px] flex-col items-center justify-start transition-transform hover:scale-[1.02]"
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
            </Link>
            {/* Spacer to reserve room for logo width */}
            <div className="w-[130px] sm:w-[144px]" />
          </div>

          {/* Center: Desktop Navigation with Dropdowns */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((navItem) => {
              if (navItem.items) {
                return (
                  <div key={navItem.label} className="relative group py-2">
                    <Link
                      href={navItem.href}
                      className={`flex items-center gap-1.5 text-[13.5px] font-medium transition-colors ${isWhiteBg
                        ? "text-[#4B5563] group-hover:text-[#061627]"
                        : "text-white/85 group-hover:text-white"
                        }`}
                    >
                      <span>{navItem.label}</span>
                      <Plus
                        size={14}
                        strokeWidth={3}
                        className={`transition-transform duration-300 group-hover:rotate-45 ${isWhiteBg ? "text-white" : "text-white"
                          }`}
                      />
                    </Link>

                    {/* Mega Dropdown Menu */}
                    <div className="absolute top-full left-0 hidden group-hover:block pt-3 z-50 animate-in fade-in-0 duration-200">
                      <div className="w-[300px] overflow-hidden rounded-[20px] border border-gray-100 bg-white p-3 shadow-xl text-[#061627]">

                        <ul className="space-y-1">
                          {navItem.items.map((subItem) => (
                            <li key={subItem.label}>
                              <Link
                                href={subItem.href}
                                className="group/item flex items-center justify-between rounded-xl px-3 py-2.5 text-[13px] font-medium !text-[#061627] hover:bg-[#F4F5F7] hover:!text-[#CD9E57] transition-all"
                              >
                                <span className="!text-[#061627] group-hover/item:!text-[#CD9E57]">{subItem.label}</span>
                                <ArrowUpRight
                                  size={13}
                                  className="text-gray-400 opacity-0 transition-all group-hover/item:opacity-100 group-hover/item:text-[#CD9E57]"
                                />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={navItem.label}
                  href={navItem.href}
                  className={`flex items-center gap-1.5 text-[13.5px] font-medium transition-colors ${isWhiteBg
                    ? "text-[#4B5563] hover:text-[#061627]"
                    : "text-white/85 hover:text-white"
                    }`}
                >
                  <span>{navItem.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right: Book Appointment Button + Animated Hamburger Button */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <Button
              href="/book-appointment"
              variant={isWhiteBg ? "primary" : "white"}
              size="small"
              className="transition-all duration-300"
            >
              <span className="hidden sm:inline">Book an Appointment</span>
              <span className="sm:hidden">Book</span>
            </Button>

            {/* Animated Hamburger Button without box container */}
            <HamburgerButton
              isOpen={isDrawerOpen}
              isScrolled={isWhiteBg}
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
