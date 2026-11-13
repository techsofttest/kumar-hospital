import { Header } from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { PageHero } from "@/components/global/page-hero";
import { AppointmentCta } from "@/components/home/appointment-cta";
import { FaqSection } from "@/components/faq/faq-section";

export const metadata = {
  title: "Frequently Asked Questions | Kumar Hospital Kochi",
  description:
    "Find answers to common questions about stroke rehabilitation, non-surgical spine decompression, doctor consultations, and inpatient admissions at Kumar Hospital Kochi.",
};

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-white text-[#111827]">
      <Header />

      <PageHero
        label="Questions & Answers"
        title="Everything you need to know about our care."
        backgroundImage="/page-hero/b6.png"
      />

      <FaqSection />
      <AppointmentCta />
      <Footer />
    </main>
  );
}
