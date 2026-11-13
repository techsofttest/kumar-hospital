import { Header } from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { PageHero } from "@/components/global/page-hero";
import { AppointmentCta } from "@/components/home/appointment-cta";
import { FacilitiesHighlights } from "@/components/facilities/facilities-highlights";
import { FacilitiesGrid } from "@/components/facilities/facilities-grid";

export const metadata = {
  title: "Hospital Facilities & Technology | Kumar Hospital Kochi",
  description:
    "Explore Kumar Hospital's barrier-free inpatient suites, specialized robotic gait training arena, IDD decompression units, and modern therapy gymnasium.",
};

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen bg-white text-[#111827]">
      <Header />

      <PageHero
        label="Infrastructure & Technology"
        title="Purpose-built for accessibility, safety and patient recovery."
        backgroundImage="/page-hero/b4.png"
      />

      <FacilitiesHighlights />
      <FacilitiesGrid />
      <AppointmentCta />
      <Footer />
    </main>
  );
}
