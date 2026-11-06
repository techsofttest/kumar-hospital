"use client";

import { useEffect } from "react";
import { X, Phone } from "lucide-react";
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
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Animated Menu Drawer */}
      <aside
        className={`fixed right-0 top-0 bottom-0 z-50 flex w-full max-w-[380px] sm:max-w-[420px] flex-col justify-between bg-[#061627] text-white shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#CD9E57]" />
            <span className="text-sm font-semibold tracking-wider text-white/80 uppercase">
              Navigation Menu
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu drawer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/15 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Drawer Links List */}
        <div className="flex-1 overflow-y-auto px-6 py-6 scrollbar-none">
          <nav className="flex flex-col space-y-1">
            {drawerMenuLinks.map(({ label, href }, index) => (
              <a
                key={label}
                href={href}
                onClick={onClose}
                className="group flex items-center justify-between rounded-xl px-4 py-3 text-[16px] font-medium text-white/85 transition-all duration-200 hover:bg-white/10 hover:text-white hover:translate-x-1"
              >
                <span>{label}</span>
                <span className="text-xs text-white/40 group-hover:text-[#CD9E57] transition-colors">
                  0{index + 1}
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* Drawer Footer CTA */}
        <div className="border-t border-white/10 p-6 bg-black/25">
          <Button
            href="#appointment"
            variant="secondary"
            size="normal"
            className="w-full justify-center !text-[#061627]"
            onClick={onClose}
          >
            Book an Appointment
          </Button>

          <div className="mt-4 flex items-center justify-center gap-2 text-[12.5px] text-white/60">
            <Phone size={13} className="text-[#CD9E57]" />
            <span>Emergency / OPD: </span>
            <a
              href="tel:+919048178888"
              className="font-semibold text-white hover:text-[#CD9E57] transition-colors"
            >
              +91 90481 78888
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}

