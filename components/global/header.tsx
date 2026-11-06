import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrainIcon, BackPainIcon } from "@/components/ui/category-icons";

const primaryServices = [
  {
    label: "Stroke & Neuro Rehabilitation",
    href: "#neuro",
    icon: BrainIcon,
  },
  {
    label: "Back & Neck Pain",
    href: "#pain",
    icon: BackPainIcon,
  },
];

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Doctors", href: "#doctors" },
  { label: "Treatments", href: "#treatments" },
  { label: "Services", href: "#services" },
  { label: "Facilities", href: "#facilities" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact Us", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#061627]/10 bg-white/95 backdrop-blur-md shadow-sm">
      {/* Top Main Bar */}
      <div className="relative mx-auto flex h-[64px] max-w-[1440px] items-center justify-between px-6 sm:px-12 lg:px-20 xl:px-24">
        {/* Left area: Logo + 2 Primary Service Categories aligned to the very right of the logo */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Overlapping Vertical Logo with White Card Container */}
          <div className="relative z-30 shrink-0">
            <a
              href="#"
              className="absolute -top-1 left-0 flex h-[126px] w-[130px] sm:w-[144px] flex-col items-center justify-center rounded-b-lg bg-white p-3 transition-transform hover:scale-[1.02]"
            >
              <div className="relative h-full w-full">
                <Image
                  src="/logo/logo.png"
                  alt="Kumar Hospital"
                  fill
                  priority
                  className="object-contain object-center"
                />
              </div>
            </a>
            {/* Spacer in the top bar to reserve room for the logo width */}
            <div className="h-10 w-[130px] sm:w-[144px]" />
          </div>

          {/* 2 Primary Service Categories directly to the right of the logo */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {primaryServices.map((service) => {
              const Icon = service.icon;

              return (
                <a
                  key={service.label}
                  href={service.href}
                  className="group flex items-center gap-2.5 rounded-xl px-4 py-2 transition-all duration-200 select-none shadow-xs hover:shadow-sm hover:scale-[1.02] active:scale-[0.98] bg-gray-100 text-[#061627] hover:bg-gray-200"
                >
                  <div className="flex h-6 w-6 items-center justify-center transition-transform duration-200 group-hover:scale-110 text-[#CD9E57]">
                    <Icon className="w-8 h-8" color="#CD9E57" />
                  </div>
                  <span className="text-md underline font-semibold tracking-tight whitespace-nowrap">
                    {service.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Right side: Emergency contact + CTA Button */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Quick contact highlight */}
          <a
            href="tel:+919048178888"
            className="hidden lg:inline-flex items-center gap-1.5 text-sm font-semibold text-[#061627] hover:text-[#1D4ED8] transition-colors shrink-0"
          >
            <span className="text-gray-500 font-normal">Emergency / OPD:</span>
            <span className="underline">+91 90481 78888</span>
          </a>

          {/* Book an Appointment Button */}
          <Button
            href="#appointment"
            variant="primary"
            size="small"
            className="hidden sm:inline-flex"
          >
            Book an Appointment
            <ArrowRight size={15} />
          </Button>

          <Button
            href="#appointment"
            variant="primary"
            size="small"
            className="sm:hidden"
          >
            Book
          </Button>
        </div>
      </div>

      {/* Bottom Menu Bar for Navigation Links */}
      <div className="relative z-10 border-t border-[#E5E7EB] bg-white backdrop-blur-md">
        <div className="mx-auto flex h-[46px] max-w-[1440px] items-center justify-end px-6 sm:px-12 lg:px-20 xl:px-24 overflow-x-auto scrollbar-none">
          {/* Nav links aligned to the right edge of bottom menu */}
          <nav className="flex items-center gap-6 sm:gap-8 whitespace-nowrap pl-[142px] sm:pl-[160px]">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm font-medium text-[#4B5563] transition-colors hover:text-[#1D4ED8]"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
