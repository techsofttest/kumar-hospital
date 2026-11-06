"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { Button } from "@/components/ui/button";

export const faqs = [
  {
    question: "Do all back pain patients need surgery?",
    answer:
      "Not necessarily. Many back and neck pain conditions can be managed with appropriate non-surgical treatment. Your condition should be evaluated by a specialist before deciding on the most suitable treatment.",
  },
  {
    question: "What does stroke rehabilitation involve?",
    answer:
      "Stroke rehabilitation can involve medical assessment, physiotherapy, occupational therapy, speech and swallowing therapy, functional training and other specialised rehabilitation depending on the patient's needs.",
  },
  {
    question: "Do you provide regenerative treatments?",
    answer:
      "Selected patients may be considered for regenerative and injection-based treatments such as Prolotherapy and PRP after appropriate clinical evaluation.",
  },
  {
    question: "Can I consult a doctor before starting therapy?",
    answer:
      "Yes. Specialist consultation helps the team understand your condition and create an individualised treatment or rehabilitation plan.",
  },
];

export function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-28 lg:py-32">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 sm:px-12 lg:px-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div>
          <SectionLabel>Frequently Asked Questions</SectionLabel>

          <h2 className="text-3xl font-normal font-serif tracking-[-0.03em] sm:text-4xl">
            Have questions before you visit?
          </h2>

          <p className="mt-5 text-[15px] leading-7 text-[#5B6872]">
            Here are some common questions. Our team can provide more
            information based on your individual condition.
          </p>

          <div className="mt-7">
            <Button
              href="#contact"
              variant="ternary"
              size="small"
              className="px-0 hover:bg-transparent hover:underline !gap-2"
            >
              Ask our team
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>

        <div>
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <div
                key={faq.question}
                className="border-b border-[#DCD9D2]"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-5 py-6 text-left"
                >
                  <span className="text-[15px] font-semibold">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={19}
                    className={`shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all ${
                    isOpen
                      ? "grid-rows-[1fr] pb-6"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[700px] text-[14px] leading-6 text-[#63707A]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

