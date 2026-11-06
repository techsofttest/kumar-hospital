"use client";

import { useEffect, useState } from "react";
import {
  MapPin,
  Phone,
  Clock3,
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
    <footer id="contact" className="bg-black text-white">
      {/* 1. Contact / Enquiry Strip: Clean, uncrowded layout */}
      <div className="bg-black">
        <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-12 sm:py-16 lg:px-20 xl:px-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:items-center">
            {/* Left side: Heading & Description */}
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-gray-400">
                Contact & Support
              </p>
              <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-[family-name:var(--font-heading)] tracking-tight leading-tight">
                Get in touch with our team
              </h3>
              <p className="mt-3 text-[15px] font-medium leading-relaxed text-gray-300">
                Have questions or need to schedule an appointment? Share your details and our care coordinator will reach out to you directly.
              </p>
            </div>

            {/* Right side: Clean Form Inputs without border lines */}
            <form className="space-y-3.5">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  id="f-name"
                  type="text"
                  placeholder="Your Name *"
                  className="w-full rounded-xl bg-white/10 px-4 py-3 text-[14px] font-medium text-white outline-none placeholder:text-gray-400 backdrop-blur-xs transition-colors focus:bg-white/15 focus:ring-2 focus:ring-white"
                />

                <input
                  id="f-phone"
                  type="tel"
                  placeholder="Phone Number *"
                  className="w-full rounded-xl bg-white/10 px-4 py-3 text-[14px] font-medium text-white outline-none placeholder:text-gray-400 backdrop-blur-xs transition-colors focus:bg-white/15 focus:ring-2 focus:ring-white"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <select
                  id="f-service"
                  defaultValue=""
                  className="w-full rounded-xl bg-white/10 px-4 py-3 text-[14px] font-medium text-white outline-none backdrop-blur-xs transition-colors focus:bg-white/15 focus:ring-2 focus:ring-white cursor-pointer"
                >
                  <option value="" disabled className="text-gray-400 bg-black">
                    Select requirement...
                  </option>
                  <option value="neuro" className="bg-black text-white">Stroke & Neuro Rehabilitation</option>
                  <option value="pain" className="bg-black text-white">Back & Neck Pain Care</option>
                  <option value="physio" className="bg-black text-white">Physiotherapy</option>
                  <option value="doctor" className="bg-black text-white">Doctor Consultation</option>
                  <option value="other" className="bg-black text-white">Other Inquiry</option>
                </select>

                <Button
                  type="submit"
                  variant="white"
                  size="normal"
                  className="w-full sm:w-auto h-[46px] px-7 text-[14px]"
                >
                  Send Enquiry
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Directory: 4 balanced, spacious columns without logo */}
      <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-12 sm:py-16 lg:px-20 xl:px-24 bg-black">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-14 items-start">
          {/* Col 1: About Hospital Summary */}
          <div className="space-y-4">
            <h4 className="text-4xl font-semibold text-white font-[family-name:var(--font-heading)] tracking-tight">
              Kumar Hospital
            </h4>
            <p className="text-[14.5px] font-normal leading-relaxed text-gray-300">
              Specialist stroke & neurological rehabilitation centre and non-surgical
              back & neck pain clinic in Kochi, Kerala.
            </p>
            <p className="text-[13px] leading-relaxed text-gray-400">
              Dedicated to compassionate, multi-disciplinary restorative care and modern technology.
            </p>
          </div>

          {/* Col 2: Stroke & Neuro Rehab Sub-services */}
          <div>
            <p className="text-[13.5px] font-bold uppercase tracking-wider text-white">
              Stroke & Neuro Rehab
            </p>
            <ul className="mt-4 space-y-2.5 text-[14px] font-normal text-gray-300">
              {neuroServices.map((service) => (
                <li key={service}>
                  <a
                    href="#neuro"
                    className="hover:text-white transition-colors block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Back & Neck Pain Sub-services */}
          <div>
            <p className="text-[13.5px] font-bold uppercase tracking-wider text-white">
              Back & Neck Pain Care
            </p>
            <ul className="mt-4 space-y-2.5 text-[14px] font-normal text-gray-300">
              {painServices.map((service) => (
                <li key={service}>
                  <a
                    href="#pain"
                    className="hover:text-white transition-colors block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Details & Embedded Map */}
          <div className="space-y-4">
            <p className="text-[13.5px] font-bold uppercase tracking-wider text-white">
              Location & Details
            </p>

            <div className="space-y-3 text-[14px] font-normal text-gray-200">
              <div className="flex items-start gap-2.5">
                <MapPin size={17} className="mt-0.5 shrink-0 text-white" />
                <p className="leading-snug text-white font-medium">
                  H.O. Thammanam, Kochi-682032, Kerala
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone size={17} className="shrink-0 text-white" />
                <a
                  href="tel:+919048178888"
                  className="text-white font-bold hover:underline transition-colors text-[14.5px]"
                >
                  +91 90481 78888
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock3 size={17} className="shrink-0 text-white" />
                <span className="text-white font-medium">All days: 7:00 AM – 10:00 PM</span>
              </div>
            </div>

            {/* Map Embed */}
            <div className="relative h-[130px] w-full overflow-hidden rounded-xl bg-white/10 shadow-sm mt-3">
              <iframe
                title="Kumar Hospital Map"
                src="https://maps.google.com/maps?q=Thammanam,%20Kochi,%20Kerala&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="h-full w-full border-0 opacity-90 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2.5 Horizontal Quick Links Bar right above bottom bar */}
      <div className="mx-auto max-w-[1440px] px-6 pb-12 sm:px-12 lg:px-20 xl:px-24 bg-black">
        <div className="flex flex-wrap items-center justify-start sm:justify-center gap-x-8 gap-y-3 text-[14px] font-medium text-gray-300">
          <span className="text-[12px] font-bold uppercase tracking-wider text-white mr-1">
            Quick Links:
          </span>
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* 3. Bottom Bar: Pure black tone, crisp text, no border lines */}
      <div className="bg-black pb-8 pt-2">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-6 sm:px-12 lg:px-20 xl:px-24 sm:flex-row sm:items-center sm:justify-between text-[13.5px] font-medium text-gray-400">
          <p>© {year} Kumar Hospital. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5">
            <a href="#about" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#about" className="hover:text-white transition-colors">Terms of Care</a>
            <a href="#faq" className="hover:text-white transition-colors">Patient FAQs</a>
            <a
              href="https://www.techsoftweb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-normal transition-colors hover:text-white hover:underline underline-offset-4"
            >
              Web Design Company in Kochi Techsoft
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
