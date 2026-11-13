import { Header } from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { PageHero } from "@/components/global/page-hero";
import { AppointmentCta } from "@/components/home/appointment-cta";
import { GalleryGrid } from "@/components/gallery/gallery-grid";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white text-[#111827]">
      <Header />

      <PageHero
        label="Hospital Gallery"
        title="Explore our campus, suites and clinical technology."
        backgroundImage="/page-hero/b7.png"
      />

      <GalleryGrid />

      <AppointmentCta />
      <Footer />
    </main>
  );
}
