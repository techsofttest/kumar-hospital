import { Header } from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { PageHero } from "@/components/global/page-hero";
import { AppointmentCta } from "@/components/home/appointment-cta";
import { TreatmentsNav, TreatmentsList } from "@/components/treatments/treatments-content";

export const metadata = {
  title: "Treatments & Clinical Services | Kumar Hospital Kochi",
  description:
    "Explore our advanced treatments in neuro rehabilitation, robotic gait training, IDD spinal decompression, laser therapy, and prolotherapy at Kumar Hospital.",
};

export default function TreatmentsPage() {
  return (
    <main className="min-h-screen bg-white text-[#111827]">
      <Header />

      <PageHero
        label="Clinical Treatments"
        title="Evidence-backed therapies designed for real, lasting recovery."
        backgroundImage="/page-hero/b7.png"
      />

      <TreatmentsNav />
      <TreatmentsList />
      <AppointmentCta />
      <Footer />
    </main>
  );
}
