"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    department: "Stroke & Neuro Rehabilitation",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="sticky top-28 z-20">
      <div className="rounded-[28px] bg-[#061627] p-8 sm:p-10 text-white shadow-xl border border-white/5">
        <div className="mb-6">
          <h3 className="mt-1 text-2xl font-semibold font-[family-name:var(--font-heading)] text-white">
            Send a Message to Our Medical Desk
          </h3>
        </div>

        {formSubmitted ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
              <CheckCircle2 size={32} />
            </div>
            <h4 className="mt-4 text-xl font-semibold text-white">Thank You!</h4>
            <p className="mt-1 text-xs text-gray-300 max-w-sm">
              Your enquiry has been securely received by Kumar Hospital. Our patient care officer will call you shortly.
            </p>
            <button
              type="button"
              onClick={() => setFormSubmitted(false)}
              className="mt-6 text-xs font-semibold uppercase tracking-wider text-[#CD9E57] hover:underline cursor-pointer"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Anand Menon"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-xl border border-white/15 bg-[#10243C] px-4 py-3 text-sm font-medium text-white placeholder-gray-400 focus:border-[#CD9E57] focus:outline-none transition-colors"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-xl border border-white/15 bg-[#10243C] px-4 py-3 text-sm font-medium text-white placeholder-gray-400 focus:border-[#CD9E57] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                  Department
                </label>
                <select
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="w-full rounded-xl border border-white/15 bg-[#10243C] px-4 py-3 text-sm font-medium text-white focus:border-[#CD9E57] focus:outline-none transition-colors cursor-pointer"
                >
                  <option value="Stroke & Neuro Rehabilitation" className="bg-[#061627]">Stroke & Neuro Rehab</option>
                  <option value="Back & Neck Pain Care" className="bg-[#061627]">Back & Neck Pain Care</option>
                  <option value="Robotic Gait Training" className="bg-[#061627]">Robotic Gait Training</option>
                  <option value="IDD Decompression Therapy" className="bg-[#061627]">IDD Decompression</option>
                  <option value="Inpatient Admission" className="bg-[#061627]">Inpatient Admission</option>
                  <option value="Other Consultation" className="bg-[#061627]">Other Inquiries</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                Patient Condition / Message
              </label>
              <textarea
                rows={4}
                placeholder="Please describe symptoms, prior diagnosis, or appointment preferences..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-xl border border-white/15 bg-[#10243C] px-4 py-3 text-sm font-medium text-white placeholder-gray-400 focus:border-[#CD9E57] focus:outline-none transition-colors"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="normal"
              className="w-full justify-center h-12 text-sm"
            >
              Send Message
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
