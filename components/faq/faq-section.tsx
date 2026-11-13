"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const allFaqs: FaqItem[] = [
  {
    category: "Back & Neck Pain",
    question: "Do all back pain patients need surgery?",
    answer:
      "Not necessarily. Many back and neck pain conditions can be managed with appropriate non-surgical treatment. Your condition should be evaluated by a specialist before deciding on the most suitable treatment.",
  },
  {
    category: "Stroke Rehabilitation",
    question: "What does stroke rehabilitation involve?",
    answer:
      "Stroke rehabilitation can involve medical assessment, physiotherapy, occupational therapy, speech and swallowing therapy, functional training and other specialised rehabilitation depending on the patient's needs.",
  },
  {
    category: "Back & Neck Pain",
    question: "Do you provide regenerative treatments?",
    answer:
      "Selected patients may be considered for regenerative and injection-based treatments such as Prolotherapy and PRP after appropriate clinical evaluation.",
  },
  {
    category: "General & Inpatient",
    question: "Can I consult a doctor before starting therapy?",
    answer:
      "Yes. Specialist consultation helps the team understand your condition and create an individualised treatment or rehabilitation plan.",
  },
  {
    category: "Stroke Rehabilitation",
    question: "When should stroke rehabilitation begin?",
    answer:
      "Rehabilitation should ideally begin as soon as the patient is medically stable in the hospital (often within 24 to 48 hours). Early intervention maximizes neuroplasticity, reducing long-term disability and restoring motor control faster.",
  },
  {
    category: "Stroke Rehabilitation",
    question: "How long does a stroke recovery program last?",
    answer:
      "The duration varies depending on stroke severity, neurological deficits, and the patient's individual recovery response. Typically, intensive programs range from 4 weeks to 3 months, followed by maintenance and outpatient functional sessions.",
  },
  {
    category: "Back & Neck Pain",
    question: "How does IDD Spinal Decompression therapy work?",
    answer:
      "IDD therapy utilizes computer-regulated distraction forces to isolate and decompress targeted damaged or degenerated discs (such as L4-L5 or C5-C6). This creates negative intradiscal pressure, drawing back herniated material and stimulating nutrient fluid flow for natural healing.",
  },
  {
    category: "Back & Neck Pain",
    question: "Is IDD therapy painful?",
    answer:
      "No. IDD therapy is gentle, safe, and comfortable. Most patients feel a pleasant stretching sensation and many even fall asleep during their 25-minute treatment session.",
  },
  {
    category: "General & Inpatient",
    question: "Are your inpatient rooms wheelchair accessible?",
    answer:
      "Yes, 100% of our inpatient rooms and corridors are ergonomically designed for barrier-free access. Bathrooms are fitted with grab-rails, roll-in showers, emergency alert alarms, and companion resting facilities.",
  },
  {
    category: "General & Inpatient",
    question: "Do you accept health insurance and cashless claims?",
    answer:
      "Yes, we support major health insurance TPAs and corporate reimbursement documentation for inpatient neuro and pain rehabilitation admissions.",
  },
];

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Stroke Rehabilitation", "Back & Neck Pain", "General & Inpatient"];

  const filteredFaqs = allFaqs.filter((f) => {
    if (activeFilter === "All") return true;
    return f.category === activeFilter;
  });

  return (
    <>
      {/* Category Filter Pills */}
      <section className="bg-[#F4F5F7] py-6 border-b border-gray-200/80 z-30 backdrop-blur-md">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 xl:px-24">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${activeFilter === cat
                  ? "bg-[#061627] text-white shadow-xs"
                  : "bg-white text-gray-700 border border-gray-200/90 hover:border-gray-400"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordions Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-12 lg:px-16">
          <div className="divide-y divide-[#DCD9D2]">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <ScrollReveal
                  key={faq.question}
                  direction="up"
                  distance={15}
                  delay={index * 50}
                  className="py-6 first:pt-0"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="group flex w-full items-center justify-between gap-5 text-left cursor-pointer"
                  >
                    <span className="text-[16px] sm:text-[17px] font-semibold text-[#061627] leading-snug">
                      {faq.question}
                    </span>

                    {/* Boxed plus icon that rotates into a close icon */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-300 bg-gray-50 text-[#061627] transition-colors">
                      <Plus
                        size={17}
                        strokeWidth={2}
                        className={`transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"
                          }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] pt-4 pb-2" : "grid-rows-[0fr]"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[900px] text-[14.5px] leading-relaxed text-[#52606B]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Need More Assistance Box */}
          <div className="mt-16 rounded-[24px] bg-[#F4F5F7] border border-gray-200/90 p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-[#061627]">
                Still have questions?
              </h3>
              <p className="mt-1 text-sm text-gray-600 max-w-[500px]">
                Our clinical coordinators are available to guide you regarding appointments, treatments, or inpatient arrangements.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <Button href="/contact" variant="primary" size="normal">
                Contact Team
              </Button>
              <Button href="tel:+919048178888" variant="secondary" size="normal">
                Call +91 90481 78888
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

