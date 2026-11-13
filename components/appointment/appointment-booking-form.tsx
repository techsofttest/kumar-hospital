"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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

export function AppointmentBookingForm() {
  // Step State: 1 = Patient & Treatment Info, 2 = Date Selection & Confirmation
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);

  // Service & Doctor Selection
  const [selectedDoctor, setSelectedDoctor] = useState(doctorsList[0].id);
  const [selectedService, setSelectedService] = useState<"neuro" | "pain">("neuro");
  const [selectedSubService, setSelectedSubService] = useState(
    primaryServices[0].subservices[0]
  );

  // Patient Contact & Clinical Details
  const [patientName, setPatientName] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [location, setLocation] = useState("");
  const [conditionType, setConditionType] = useState("Chronic Back Pain");
  const [message, setMessage] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [stepError, setStepError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Calendar State
  const [currentMonth, setCurrentMonth] = useState(10);
  const [currentYear, setCurrentYear] = useState(2026);
  const [selectedDay, setSelectedDay] = useState<number | null>(15);

  useEffect(() => {
    const today = new Date();
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
    setSelectedDay(today.getDate() + 1);
  }, []);

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setUploadedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleProceedToStep2 = () => {
    if (!patientName.trim()) {
      setStepError("Please provide the patient name.");
      return;
    }
    if (!patientAge.trim()) {
      setStepError("Please provide the patient age.");
      return;
    }
    if (!phoneNumber.trim()) {
      setStepError("Please provide a contact phone number.");
      return;
    }
    if (!location.trim()) {
      setStepError("Please provide your city or district.");
      return;
    }

    setStepError("");
    setCurrentStep(2);
    window.scrollTo({ top: 340, behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDay) {
      setStepError("Please select a date from the calendar.");
      return;
    }
    setIsSubmitted(true);
  };

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();
  const activeService =
    primaryServices.find((s) => s.id === selectedService) || primaryServices[0];
  const activeDoctor = doctorsList.find((d) => d.id === selectedDoctor);

  return (
    <>
      <section className="bg-white py-12 sm:py-16 pb-24 sm:pb-16">
        <div className="mx-auto max-w-[1000px] px-6 sm:px-10 lg:px-12">
          {/* Step Progress Header */}
          {!isSubmitted && (
            <div className="mb-8 flex items-center justify-between border-b border-gray-200 pb-5">
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${currentStep === 1
                    ? "bg-[#061627] text-white"
                    : "bg-[#CD9E57] text-[#061627]"
                    }`}
                >
                  1
                </span>
                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                    Step 1
                  </span>
                  <span
                    className={`text-sm font-semibold ${currentStep === 1 ? "text-[#061627]" : "text-gray-500"
                      }`}
                  >
                    Patient & Treatment Details
                  </span>
                </div>
              </div>

              <div className="hidden sm:block h-[1px] w-16 bg-gray-200" />

              <div className="flex items-center gap-3">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${currentStep === 2
                    ? "bg-[#061627] text-white"
                    : "bg-gray-200 text-gray-500"
                    }`}
                >
                  2
                </span>
                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                    Step 2
                  </span>
                  <span
                    className={`text-sm font-semibold ${currentStep === 2 ? "text-[#061627]" : "text-gray-400"
                      }`}
                  >
                    Preferred Date & Confirmation
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Form Card (Flat, High Contrast, No Shadows) */}
          <div className="rounded-2xl bg-[#F4F5F7] border border-gray-200 p-6 sm:p-10 text-[#061627]">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-14 text-center">
                <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl font-bold">
                  ✓
                </div>
                <h3 className="mt-4 text-2xl font-semibold font-[family-name:var(--font-heading)] text-[#061627]">
                  Appointment Request Received
                </h3>
                <p className="mt-2 max-w-lg text-sm text-gray-700 leading-relaxed">
                  Thank you, <span className="font-semibold text-[#061627]">{patientName || "Patient"}</span>. Your preferred appointment date of{" "}
                  <strong className="text-[#061627]">
                    {selectedDay} {monthNames[currentMonth]} {currentYear}
                  </strong>{" "}
                  with {activeDoctor?.name} for <span className="font-semibold text-[#061627]">{selectedSubService}</span> has been received. Our clinical coordinator will reach out shortly.
                </p>

                <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                  <Button
                    href="/"
                    variant="primary"
                    size="normal"
                  >
                    Go to Homepage
                  </Button>

                  <Button
                    type="button"
                    variant="secondary"
                    size="normal"
                    onClick={() => {
                      setIsSubmitted(false);
                      setCurrentStep(1);
                    }}
                  >
                    Submit Another Request
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {stepError && (
                  <div className="mb-6 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-xs font-semibold text-red-700">
                    {stepError}
                  </div>
                )}

                {/* ================= STEP 1: PATIENT & TREATMENT ================= */}
                {currentStep === 1 && (
                  <div className="space-y-8">
                    {/* 1. Patient Information */}
                    <div>
                      <h3 className="text-base font-semibold font-[family-name:var(--font-heading)] text-[#061627] tracking-tight mb-3">
                        1. Patient Information
                      </h3>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                            Patient Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Full name"
                            value={patientName}
                            onChange={(e) => {
                              setPatientName(e.target.value);
                              if (stepError) setStepError("");
                            }}
                            className="w-full rounded-xl border border-gray-300 bg-white py-2.5 px-3.5 text-sm font-normal text-[#061627] placeholder-gray-500 focus:border-[#061627] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                            Age *
                          </label>
                          <input
                            type="number"
                            required
                            min={1}
                            max={120}
                            placeholder="Years"
                            value={patientAge}
                            onChange={(e) => {
                              setPatientAge(e.target.value);
                              if (stepError) setStepError("");
                            }}
                            className="w-full rounded-xl border border-gray-300 bg-white py-2.5 px-3.5 text-sm font-normal text-[#061627] placeholder-gray-500 focus:border-[#061627] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={phoneNumber}
                            onChange={(e) => {
                              setPhoneNumber(e.target.value);
                              if (stepError) setStepError("");
                            }}
                            className="w-full rounded-xl border border-gray-300 bg-white py-2.5 px-3.5 text-sm font-normal text-[#061627] placeholder-gray-500 focus:border-[#061627] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                            Email Address
                          </label>
                          <input
                            type="email"
                            placeholder="Optional"
                            value={emailAddress}
                            onChange={(e) => setEmailAddress(e.target.value)}
                            className="w-full rounded-xl border border-gray-300 bg-white py-2.5 px-3.5 text-sm font-normal text-[#061627] placeholder-gray-500 focus:border-[#061627] focus:outline-none"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                            Location / City *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Thammanam, Kochi / Kottayam"
                            value={location}
                            onChange={(e) => {
                              setLocation(e.target.value);
                              if (stepError) setStepError("");
                            }}
                            className="w-full rounded-xl border border-gray-300 bg-white py-2.5 px-3.5 text-sm font-normal text-[#061627] placeholder-gray-500 focus:border-[#061627] focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* 2. Clinical Condition & Doctor Preference */}
                    <div>
                      <h3 className="text-base font-semibold font-[family-name:var(--font-heading)] text-[#061627] tracking-tight mb-3">
                        2. Clinical Condition & Doctor Preference
                      </h3>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                            Type of Condition *
                          </label>
                          <select
                            value={conditionType}
                            onChange={(e) => setConditionType(e.target.value)}
                            className="w-full rounded-xl border border-gray-300 bg-white py-2.5 px-3.5 text-sm font-normal text-[#061627] focus:border-[#061627] focus:outline-none cursor-pointer"
                          >
                            <option value="Stroke Recovery">Stroke / Hemiplegia Recovery</option>
                            <option value="Chronic Back Pain">Chronic Back & Spine Pain</option>
                            <option value="Neck & Cervical Spondylosis">Neck & Cervical Spondylosis</option>
                            <option value="Spinal Disc Herniation">Spinal Disc Herniation (Slip Disc)</option>
                            <option value="Post-Surgical Rehab">Post-Surgical Rehabilitation</option>
                            <option value="Parkinson's / Movement Disorder">Parkinson’s / Movement Disorder</option>
                            <option value="Joint & Arthritis Pain">Joint & Osteoarthritis Pain</option>
                            <option value="Other">Other Neurological / Musculoskeletal Condition</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                            Preferred Doctor
                          </label>
                          <select
                            value={selectedDoctor}
                            onChange={(e) => setSelectedDoctor(e.target.value)}
                            className="w-full rounded-xl border border-gray-300 bg-white py-2.5 px-3.5 text-sm font-normal text-[#061627] focus:border-[#061627] focus:outline-none cursor-pointer"
                          >
                            {doctorsList.map((doc) => (
                              <option key={doc.id} value={doc.id}>
                                {doc.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* 3. Choose Department & Preferred Treatment */}
                    <div>
                      <h3 className="text-base font-semibold font-[family-name:var(--font-heading)] text-[#061627] tracking-tight mb-3">
                        3. Department & Preferred Treatment
                      </h3>

                      <div className="grid gap-3 sm:grid-cols-2 mb-3.5">
                        {primaryServices.map((service) => {
                          const isSelected = selectedService === service.id;

                          return (
                            <div
                              key={service.id}
                              onClick={() => handleServiceChange(service.id as "neuro" | "pain")}
                              className={`group relative flex items-center gap-3 rounded-xl p-3 cursor-pointer border-2 transition-colors select-none ${isSelected
                                ? "border-[#CD9E57] bg-white"
                                : "border-gray-300 bg-white/70 hover:border-gray-400"
                                }`}
                            >
                              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg bg-gray-100 border border-gray-200">
                                <Image
                                  src={service.image}
                                  alt={service.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>

                              <div className="flex-1 min-w-0">
                                <span className="text-sm font-semibold text-[#061627] block truncate">
                                  {service.title}
                                </span>
                              </div>

                              <div
                                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${isSelected
                                  ? "border-[#CD9E57] bg-[#CD9E57]"
                                  : "border-gray-400 bg-transparent"
                                  }`}
                              >
                                {isSelected && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <select
                        value={selectedSubService}
                        onChange={(e) => setSelectedSubService(e.target.value)}
                        className="w-full rounded-xl border border-gray-300 bg-white py-2.5 px-3.5 text-sm font-semibold text-[#061627] focus:border-[#061627] focus:outline-none cursor-pointer"
                      >
                        {activeService.subservices.map((sub) => (
                          <option key={sub} value={sub}>
                            {sub}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* 4. Medical Reports Upload & Patient Notes */}
                    <div>
                      <h3 className="text-base font-semibold font-[family-name:var(--font-heading)] text-[#061627] tracking-tight mb-3">
                        4. Medical Reports & Notes
                      </h3>

                      <div className="rounded-xl border-2 border-dashed border-gray-300 bg-white p-4 text-center">
                        <input
                          type="file"
                          id="file-upload"
                          multiple
                          accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                        <label
                          htmlFor="file-upload"
                          className="flex flex-col items-center justify-center cursor-pointer"
                        >
                          <span className="text-sm font-semibold text-[#061627]">
                            Upload MRI, CT Scans, or Prescriptions
                          </span>
                          <span className="mt-0.5 text-xs text-gray-500">
                            PDF, PNG, JPG up to 25MB (optional)
                          </span>
                        </label>
                      </div>

                      {uploadedFiles.length > 0 && (
                        <div className="mt-2.5 space-y-1.5">
                          {uploadedFiles.map((f, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between rounded-lg bg-white border border-gray-300 px-3 py-1.5 text-xs"
                            >
                              <span className="font-normal text-[#061627] truncate">
                                {f.name} ({(f.size / 1024 / 1024).toFixed(1)} MB)
                              </span>
                              <button
                                type="button"
                                onClick={() => removeFile(i)}
                                className="text-xs font-semibold text-gray-500 hover:text-red-600 px-2 cursor-pointer"
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="mt-3.5">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                          Symptoms & Specific Requests
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Describe symptoms, duration, prior treatments, or assistance needed..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full rounded-xl border border-gray-300 bg-white p-3 text-sm font-normal text-[#061627] placeholder-gray-500 focus:border-[#061627] focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Step 1 CTA */}
                    <div className="pt-2 flex justify-end">
                      <Button
                        type="button"
                        variant="primary"
                        size="normal"
                        onClick={handleProceedToStep2}
                        className="w-full sm:w-auto px-7 justify-center h-11 text-sm font-semibold"
                      >
                        Select Appointment Date
                      </Button>
                    </div>
                  </div>
                )}

                {/* ================= STEP 2: PREFERRED DATE & CONFIRMATION ================= */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                      <div>
                        <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-[#061627] tracking-tight">
                          Select Preferred Date
                        </h3>
                        <p className="mt-0.5 text-xs text-gray-600">
                          Consultation with {activeDoctor?.name.split("(")[0]}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="text-xs font-semibold text-[#061627] hover:underline cursor-pointer py-1.5 px-3 rounded-lg border border-gray-300 bg-white"
                      >
                        ← Edit Details
                      </button>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr] items-start">
                      {/* Calendar Card */}
                      <div className="rounded-xl bg-white border border-gray-200 p-5">
                        <div className="flex items-center justify-between py-1.5 border-b border-gray-200">
                          <span className="text-sm font-semibold text-[#061627]">
                            {monthNames[currentMonth]} {currentYear}
                          </span>

                          <div className="flex items-center gap-1">
                            <button
                              type="button"
                              onClick={prevMonth}
                              aria-label="Previous month"
                              className="h-7 px-2.5 flex items-center justify-center rounded border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-100 cursor-pointer"
                            >
                              ‹ Prev
                            </button>
                            <button
                              type="button"
                              onClick={nextMonth}
                              aria-label="Next month"
                              className="h-7 px-2.5 flex items-center justify-center rounded border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-100 cursor-pointer"
                            >
                              Next ›
                            </button>
                          </div>
                        </div>

                        {/* Weekday headers */}
                        <div className="mt-3 grid grid-cols-7 gap-1 text-center text-xs font-semibold text-gray-500">
                          {dayNames.map((d) => (
                            <div key={d} className="py-1">
                              {d}
                            </div>
                          ))}
                        </div>

                        {/* Calendar Grid */}
                        <div className="mt-1 grid grid-cols-7 gap-1">
                          {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                            <div key={`empty-${i}`} className="h-8" />
                          ))}

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
                                className={`flex h-8 w-full items-center justify-center rounded text-xs font-semibold transition-colors ${isSunday
                                  ? "text-gray-300 cursor-not-allowed"
                                  : isSelected
                                    ? "bg-[#061627] text-white"
                                    : "text-gray-700 hover:bg-gray-100 cursor-pointer"
                                  }`}
                              >
                                {dayNum}
                              </button>
                            );
                          })}
                        </div>

                        <div className="mt-4 border-t border-gray-200 pt-3 text-center text-xs text-gray-600">
                          Chosen Date:{" "}
                          <strong className="text-[#061627] font-semibold">
                            {selectedDay} {monthNames[currentMonth]} {currentYear}
                          </strong>
                        </div>
                      </div>

                      {/* Summary & Submit */}
                      <div className="space-y-4">
                        <div className="rounded-xl bg-white border border-gray-200 p-5 text-sm text-gray-800 space-y-3">
                          <h4 className="text-xs font-semibold text-gray-500">
                            Appointment Summary
                          </h4>

                          <div className="flex justify-between border-b border-gray-100 py-2">
                            <span className="text-gray-500">Patient:</span>
                            <span className="font-semibold text-[#061627] text-right">{patientName} ({patientAge} yrs)</span>
                          </div>

                          <div className="flex justify-between border-b border-gray-100 pb-2">
                            <span className="text-gray-500">Phone:</span>
                            <span className="font-semibold text-[#061627] text-right">{phoneNumber}</span>
                          </div>

                          <div className="flex justify-between border-b border-gray-100 pb-2">
                            <span className="text-gray-500">Doctor:</span>
                            <span className="font-semibold text-[#061627] text-right truncate max-w-[200px]">
                              {activeDoctor?.name.split("(")[0]}
                            </span>
                          </div>

                          <div className="flex justify-between border-b border-gray-100 pb-2">
                            <span className="text-gray-500">Condition:</span>
                            <span className="font-semibold text-[#061627] text-right">
                              {conditionType}
                            </span>
                          </div>

                          <div className="flex justify-between border-b border-gray-100 pb-2">
                            <span className="text-gray-500">Treatment:</span>
                            <span className="font-semibold text-[#061627] text-right truncate max-w-[200px]">
                              {selectedSubService}
                            </span>
                          </div>

                          <div className="flex justify-between pt-0.5">
                            <span className="text-gray-500">Date:</span>
                            <span className="font-semibold text-base text-[#CD9E57]">
                              {selectedDay} {monthNames[currentMonth]} {currentYear}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">

                          <Button
                            type="submit"
                            variant="primary"
                            size="normal"
                            disabled={!selectedDay}
                            className="flex-[1.8] justify-center h-11 text-xs sm:text-sm font-semibold"
                          >
                            Confirm Appointment
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Prominent Call Now and WhatsApp Bar on Mobile */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-gray-300 p-3 flex gap-3">
        <a
          href="tel:+919048178888"
          className="flex-1 flex items-center justify-center rounded-xl bg-[#061627] text-white py-3 px-4 text-xs font-semibold"
        >
          Call Now
        </a>

        <a
          href="https://wa.me/919048178888?text=Hello%20Kumar%20Hospital,%20I%20would%20like%20to%20book%20an%20appointment."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center rounded-xl bg-[#25D366] text-white py-3 px-4 text-xs font-semibold"
        >
          WhatsApp
        </a>
      </div>
    </>
  );
}
