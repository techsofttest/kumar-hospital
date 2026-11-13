import { Header } from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { PageHero } from "@/components/global/page-hero";
import { AppointmentCta } from "@/components/home/appointment-cta";
import { ServicesListing } from "@/components/services/services-listing";

export const metadata = {
  title: "Clinical Services & Treatments | Kumar Hospital Kochi",
  description:
    "Explore specialized physical medicine, stroke and neuro-rehabilitation, non-surgical spine care, IDD decompression, and interventional pain management at Kumar Hospital.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#111827]">
      <Header />

      <PageHero
        label="Clinical Specialties"
        title="Comprehensive Rehabilitation & Pain Medicine Services"
        backgroundImage="/page-hero/b6.png"
      />

      <ServicesListing />

      <AppointmentCta />
      <Footer />
    </main>
  );
}

