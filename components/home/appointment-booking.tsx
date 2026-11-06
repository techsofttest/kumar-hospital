"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Stethoscope,
  Activity,
  CalendarDays,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const doctorsList = [
  { id: "any", name: "Any Available Specialist", timing: "08:00 – 17:00 hrs" },
  { id: "dr-sasikumar", name: "Dr. Sasikumar (Physical Medicine & Rehabilitation)", timing: "08:00 – 13:00 hrs" },
  { id: "dr-malini", name: "Dr. Malini Sasikumar (Specialist Consultant)", timing: "08:00 – 13:00 hrs" },
  { id: "dr-sruthi", name: "Dr. Sruthi Sasikumar (Neurologist & Pain Specialist)", timing: "08:00 – 13:00 hrs" },
  { id: "dr-sreenath", name: "Dr. Sreenath P R (Specialist Consultant)", timing: "15:00 – 17:00 hrs (Wed, Fri)" },
];

const primaryServices = [
  {
    id: "neuro",
    title: "Stroke & Neuro Rehabilitation",
    image: "/categories/appoinment-boking/Neural Pathways in Focus.png",
    subservices: [
      "Stroke Recovery Program",
      "Neurological Assessment",
      "Robotic Gait Training",
      "Physiotherapy & Mobility",
      "Occupational Therapy",
      "Speech & Swallowing Therapy",
    ],
  },
  {
    id: "pain",
    title: "Back & Neck Pain Care",
    image: "/categories/appoinment-boking/neck-back-bones.jpg",
    subservices: [
      "Non-Surgical Spine Care",
      "IDD Therapy (Decompression)",
      "Interventional Pain Procedure",
      "Laser Pain Therapy",
      "Prolotherapy & PRP Injections",
      "Cervical & Lumbar Rehabilitation",
    ],
  },
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export function AppointmentBooking() {
  const [selectedDoctor, setSelectedDoctor] = useState(doctorsList[0].id);
  const [selectedService, setSelectedService] = useState<"neuro" | "pain">("neuro");
  const [selectedSubService, setSelectedSubService] = useState(
    primaryServices[0].subservices[0]
  );

  // Calendar State (hydrated safely in useEffect for SSR)
  const [currentMonth, setCurrentMonth] = useState(10);
  const [currentYear, setCurrentYear] = useState(2026);
  const [selectedDay, setSelectedDay] = useState<number | null>(15);

  useEffect(() => {
    const today = new Date();
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
    setSelectedDay(today.getDate() + 1);
  }, []);

  // Update subservice when primary service changes
  const handleServiceChange = (serviceId: "neuro" | "pain") => {
    setSelectedService(serviceId);
    const service = primaryServices.find((s) => s.id === serviceId);
    if (service && service.subservices.length > 0) {
      setSelectedSubService(service.subservices[0]);
    }
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();

  const activeService = primaryServices.find((s) => s.id === selectedService)!;
  const activeDoc = doctorsList.find((d) => d.id === selectedDoctor);

  return (
    <section id="appointment" className="py-12 sm:py-16 bg-white border-b border-gray-200">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 xl:px-24">
        {/* Section Header at Top Center */}
        <ScrollReveal direction="up" distance={20} duration={600} className="mx-auto mb-8 sm:mb-10 max-w-[760px] text-center flex flex-col items-center">
          <h2 className="mt-2 text-2xl font-medium font-[family-name:var(--font-heading)] sm:text-3xl lg:text-4xl tracking-[-0.03em] text-[#061627] leading-tight">
            Select your doctor, service & date.
          </h2>
        </ScrollReveal>

        <div className="mx-auto max-w-[1340px] rounded-[28px] bg-[#061627] p-6 sm:p-8 lg:p-10 shadow-2xl text-white">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14 items-start">
            {/* Left Column: Doctor Dropdown + 2 Primary Service Image Boxes + Subservice Dropdown */}
            <div className="space-y-7">
              {/* 1. Doctor Selector Dropdown */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  1. Select Doctor / Consultant
                </label>
                <div className="relative">
                  <Stethoscope size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  <select
                    value={selectedDoctor}
                    onChange={(e) => setSelectedDoctor(e.target.value)}
                    className="w-full appearance-none rounded-xl border border-white/15 bg-[#10243C] py-3.5 pl-11 pr-10 text-[14.5px] font-semibold text-white focus:border-[#CD9E57] focus:outline-none transition-colors cursor-pointer shadow-xs"
                  >
                    {doctorsList.map((doc) => (
                      <option key={doc.id} value={doc.id} className="bg-[#061627] text-white">
                        {doc.name} ({doc.timing})
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* 2. Primary Service Selector: 2 boxes with thumbnail on top-left */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  2. Choose Primary Service
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  {primaryServices.map((service) => {
                    const isSelected = selectedService === service.id;

                    return (
                      <div
                        key={service.id}
                        onClick={() => handleServiceChange(service.id as "neuro" | "pain")}
                        className={`group relative flex flex-col justify-between rounded-2xl p-4 cursor-pointer border-2 transition-all duration-200 select-none ${isSelected
                          ? "border-[#CD9E57] bg-[#10243C] shadow-lg"
                          : "border-white/10 bg-[#0E1F35] hover:border-white/20 hover:bg-[#10243C]"
                          }`}
                      >
                        {/* Top row: small rounded corner image box on top-left & check indicator on top-right */}
                        <div className="flex items-center justify-between">
                          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-black/40 border border-white/10 shadow-xs">
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>

                          <div
                            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all ${isSelected
                              ? "border-[#CD9E57] bg-[#CD9E57]"
                              : "border-white/30 bg-transparent"
                              }`}
                          >
                            {isSelected && (
                              <div className="h-2 w-2 rounded-full bg-[#061627]" />
                            )}
                          </div>
                        </div>

                        {/* Title at bottom */}
                        <div className="mt-4">
                          <span className="text-[15px] font-semibold text-white leading-snug">
                            {service.title}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 3. Subservice Selector Dropdown */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  3. Select Specific Treatment / Sub-Service
                </label>
                <div className="relative">
                  <Activity size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  <select
                    value={selectedSubService}
                    onChange={(e) => setSelectedSubService(e.target.value)}
                    className="w-full appearance-none rounded-xl border border-white/15 bg-[#10243C] py-3.5 pl-11 pr-10 text-[14.5px] font-semibold text-white focus:border-[#CD9E57] focus:outline-none transition-colors cursor-pointer shadow-xs"
                  >
                    {activeService.subservices.map((sub) => (
                      <option key={sub} value={sub} className="bg-[#061627] text-white">
                        {sub}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Right Column: Simple Minimal Calendar & Book Appointment */}
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl bg-[#10243C] border border-white/10 p-6 sm:p-7 shadow-lg">
                {/* Minimal Calendar Controls */}
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-[15px] font-bold text-white">
                    {monthNames[currentMonth]} {currentYear}
                  </span>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={prevMonth}
                      aria-label="Previous month"
                      className="flex h-7 w-7 items-center justify-center rounded-md hover:bg-white/10 text-white transition-colors cursor-pointer"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={nextMonth}
                      aria-label="Next month"
                      className="flex h-7 w-7 items-center justify-center rounded-md hover:bg-white/10 text-white transition-colors cursor-pointer"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Weekday headers */}
                <div className="mt-3 grid grid-cols-7 gap-1 text-center text-[11px] font-bold text-gray-400">
                  {dayNames.map((d) => (
                    <div key={d} className="py-1">
                      {d}
                    </div>
                  ))}
                </div>

                {/* Simplified Calendar Grid */}
                <div className="mt-1 grid grid-cols-7 gap-1">
                  {/* Empty cells */}
                  {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                    <div key={`empty-${i}`} className="h-8" />
                  ))}

                  {/* Days */}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const dayNum = i + 1;
                    const isSelected = selectedDay === dayNum;
                    const dayOfWeek = (firstDayOfWeek + i) % 7;
                    const isSunday = dayOfWeek === 0;

                    return (
                      <button
                        key={dayNum}
                        type="button"
                        disabled={isSunday}
                        onClick={() => setSelectedDay(dayNum)}
                        className={`flex h-8 w-full items-center justify-center rounded-md text-xs font-semibold transition-all ${isSunday
                          ? "text-gray-600 cursor-not-allowed"
                          : isSelected
                            ? "bg-[#CD9E57] text-[#061627] font-bold shadow-sm"
                            : "text-white hover:bg-white/10 cursor-pointer"
                          }`}
                      >
                        {dayNum}
                      </button>
                    );
                  })}
                </div>

                {/* Selected Date Summary inside Calendar */}
                <div className="mt-4 border-t border-white/10 pt-3 text-center text-xs text-gray-300">
                  Selected Date:{" "}
                  <strong className="text-white font-semibold">
                    {selectedDay} {monthNames[currentMonth]} {currentYear}
                  </strong>
                </div>
              </div>

              {/* Bottom Book Button outside calendar */}
              <Button
                type="button"
                variant="primary"
                size="normal"
                disabled={!selectedDay}
                className="w-full justify-center h-12 text-[14.5px]"
              >
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
