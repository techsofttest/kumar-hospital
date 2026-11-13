import { Header } from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { PageHero } from "@/components/global/page-hero";
import { AppointmentCta } from "@/components/home/appointment-cta";
import { DoctorsGrid } from "@/components/doctors/doctors-grid";
import { DoctorsStandards } from "@/components/doctors/doctors-standards";

export const metadata = {
  title: "Our Doctors & Specialists | Kumar Hospital Kochi",
  description:
    "Meet our team of physical medicine and rehabilitation consultants, neurologists, and pain specialists at Kumar Hospital Kochi.",
};

export default function DoctorsPage() {
  return (
    <main className="min-h-screen bg-white text-[#111827]">
      <Header />

      <PageHero
        label="Medical Care Team"
        title="Led by dedicated specialists in rehabilitation & pain care."
        backgroundImage="/page-hero/b3.png"
      />

      <DoctorsGrid />
      <DoctorsStandards />
      <AppointmentCta />
      <Footer />
    </main>
  );
}
