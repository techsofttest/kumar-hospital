"use client";

import { useEffect } from "react";
import { X, Phone, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const drawerMenuLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Our Doctors", href: "#doctors" },
  { label: "Treatments", href: "#treatments" },
  { label: "Services", href: "#services" },
  { label: "Facilities", href: "#facilities" },
  { label: "Patient Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact Us", href: "#contact" },
];

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NavigationDrawer({ isOpen, onClose }: NavigationDrawerProps) {
  // Prevent background scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-xs transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      />

      {/* Animated White Menu Drawer */}
      <aside
        className={`fixed right-0 top-0 bottom-0 z-50 flex w-full max-w-[380px] sm:max-w-[420px] flex-col justify-between bg-white text-[#061627] shadow-2xl transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-[#061627]">
              Navigation Menu
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu drawer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gray-700 transition hover:bg-gray-100 hover:text-black cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Drawer Links List */}
        <div className="flex-1 overflow-y-auto px-6 py-6 scrollbar-none">
          <nav className="flex flex-col space-y-1">
            {drawerMenuLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={onClose}
                className="group flex items-center justify-between rounded-xl px-4 py-3 text-[16px] font-medium text-[#1F2937] transition-all duration-200 hover:bg-gray-100 hover:text-[#061627] hover:translate-x-1"
              >
                <span className="underline">{label}</span>
                <ArrowUpRight
                  size={18}
                  className="text-gray-400 transition-transform duration-200 group-hover:text-[#CD9E57] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ))}
          </nav>
        </div>

        {/* Drawer Footer CTA */}
        <div className="border-t border-gray-100 p-6 bg-gray-50">
          <Button
            href="#appointment"
            variant="primary"
            size="normal"
            className="w-full justify-center"
            onClick={onClose}
          >
            Book an Appointment
          </Button>

          <div className="mt-4 flex items-center justify-center gap-2 text-[12.5px] text-gray-600">
            <Phone size={13} className="text-[#CD9E57]" />
            <span>Emergency / OPD: </span>
            <a
              href="tel:+919048178888"
              className="font-semibold text-[#061627] hover:text-[#CD9E57] transition-colors"
            >
              +91 90481 78888
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
