"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Clock3,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const neuroServices = [
  "Stroke Rehabilitation",
  "Neurological Rehabilitation",
  "Physiotherapy & Mobility",
  "Occupational Therapy",
  "Speech & Swallowing Therapy",
  "Robotic Gait Training",
  "Functional Retraining",
];

const painServices = [
  "Back & Neck Pain Care",
  "Disc & Sciatica Treatment",
  "Non-Surgical Spinal Decompression (IDD)",
  "Class IV Laser Therapy",
  "Prolotherapy & PRP Injections",
  "Joint & Musculoskeletal Care",
  "Postural & Ergonomic Care",
];

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Doctors", href: "#doctors" },
  { label: "Treatments", href: "#treatments" },
  { label: "Services", href: "#services" },
  { label: "Facilities", href: "#facilities" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Appointment", href: "#appointment" },
];

export function Footer() {
  const [year, setYear] = useState<number | string>(2025);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="contact" className="bg-[#061627] text-white">
      {/* 1. Contact Section: Enlarged with strong high-contrast text & no border divider lines */}
      <div className="bg-[#081b30]">
        <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            {/* Left side: Heading & Clear Description */}
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/80">
                Contact & Support
              </p>
              <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                Get in touch with our team
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/90">
                Have questions or need to schedule an appointment? Share your details and our care coordinator will reach out to you directly.
              </p>
            </div>

            {/* Right side: High-contrast Unboxed Form without border lines */}
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  id="f-name"
                  type="text"
                  placeholder="Your Name *"
                  className="w-full rounded-lg bg-white/10 px-4 py-3 text-[15px] font-medium text-white outline-none placeholder:text-white/60 transition-colors focus:bg-white/15 focus:ring-2 focus:ring-white/40"
                />

                <input
                  id="f-phone"
                  type="tel"
                  placeholder="Phone Number *"
                  className="w-full rounded-lg bg-white/10 px-4 py-3 text-[15px] font-medium text-white outline-none placeholder:text-white/60 transition-colors focus:bg-white/15 focus:ring-2 focus:ring-white/40"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
                <select
                  id="f-service"
                  defaultValue=""
                  className="w-full rounded-lg bg-white/10 px-4 py-3 text-[15px] font-medium text-white outline-none transition-colors focus:bg-white/15 focus:ring-2 focus:ring-white/40"
                >
                  <option value="" disabled className="text-white/60 bg-[#081b30]">
                    Select requirement...
                  </option>
                  <option value="neuro" className="bg-[#081b30] text-white">Stroke & Neuro Rehabilitation</option>
                  <option value="pain" className="bg-[#081b30] text-white">Back & Neck Pain Care</option>
                  <option value="physio" className="bg-[#081b30] text-white">Physiotherapy</option>
                  <option value="doctor" className="bg-[#081b30] text-white">Doctor Consultation</option>
                  <option value="other" className="bg-[#081b30] text-white">Other Inquiry</option>
                </select>

                <Button
                  type="submit"
                  variant="primary"
                  size="normal"
                  className="w-full sm:w-auto h-[46px] px-6 text-[15px]"
                >
                  Send Enquiry
                  <ArrowRight size={16} />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Directory: High Contrast, Frameless Layout */}
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand Info & Vertical Quick Links: 3 cols */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <div className="relative h-10 w-[160px]">
                <Image
                  src="/logo/logo.svg"
                  alt="Kumar Hospital"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="mt-4 text-[14px] leading-relaxed text-white/85">
                Specialist stroke & neuro rehabilitation centre and non-surgical
                back & neck pain clinic in Kochi.
              </p>
            </div>

            {/* Vertical Quick Links Section */}
            <div>
              <p className="text-[13px] font-bold uppercase tracking-wider text-white">
                Quick Links
              </p>
              <nav className="mt-3.5 flex flex-col space-y-2.5 text-[14px] font-medium text-white/85">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Stroke & Neuro Rehab Sub-services: 3 cols */}
          <div className="lg:col-span-3">
            <p className="text-[13px] font-bold uppercase tracking-wider text-white">
              Stroke & Neuro Rehab
            </p>
            <ul className="mt-4 space-y-2.5 text-[14px] font-medium text-white/85">
              {neuroServices.map((service) => (
                <li key={service}>
                  <a
                    href="#neuro"
                    className="hover:text-white hover:underline transition-colors block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Back & Neck Pain Sub-services: 3 cols */}
          <div className="lg:col-span-3">
            <p className="text-[13px] font-bold uppercase tracking-wider text-white">
              Back & Neck Pain Care
            </p>
            <ul className="mt-4 space-y-2.5 text-[14px] font-medium text-white/85">
              {painServices.map((service) => (
                <li key={service}>
                  <a
                    href="#pain"
                    className="hover:text-white hover:underline transition-colors block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Embedded Map: 3 cols */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-[13px] font-bold uppercase tracking-wider text-white">
              Location & Details
            </p>

            <div className="space-y-3.5 text-[14px] font-medium text-white/90">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-white/80" />
                <p className="leading-snug">
                  H.O. Thammanam, Kochi-682032, Kerala
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-white/80" />
                <a
                  href="tel:+919048178888"
                  className="hover:text-white hover:underline transition-colors"
                >
                  +91 90481 78888
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock3 size={18} className="shrink-0 text-white/80" />
                <span>All days: 7:00 AM – 10:00 PM</span>
              </div>
            </div>

            {/* Seamless Map Embed (No harsh borders) */}
            <div className="relative h-[150px] w-full overflow-hidden rounded-xl bg-white/5">
              <iframe
                title="Kumar Hospital Map"
                src="https://maps.google.com/maps?q=Thammanam,%20Kochi,%20Kerala&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="h-full w-full border-0 opacity-90 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
              <a
                href="https://maps.google.com/?q=Kumar+Hospital+Thammanam+Kochi"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 inline-flex items-center gap-1.5 rounded-md bg-[#061627]/95 px-2.5 py-1 text-[11px] font-semibold text-white shadow-md hover:bg-black transition-colors"
              >
                <span>Google Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Bar: Clean, High Contrast without Divider Lines */}
      <div className="bg-[#030a12] py-6">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-6 sm:px-12 lg:px-16 sm:flex-row sm:items-center sm:justify-between lg:px-12 text-[13px] font-medium text-white/75">
          <p>© {year} Kumar Hospital. All rights reserved.</p>

          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <a href="#about" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#about" className="hover:text-white transition-colors">Terms of Care</a>
            <a href="#faq" className="hover:text-white transition-colors">Patient FAQs</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
