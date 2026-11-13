import { Header } from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { PageHero } from "@/components/global/page-hero";
import { AppointmentCta } from "@/components/home/appointment-cta";
import { TestimonialsRatings } from "@/components/testimonials/testimonials-ratings";
import { TestimonialsGrid } from "@/components/testimonials/testimonials-grid";

export const metadata = {
  title: "Patient Stories & Reviews | Kumar Hospital Kochi",
  description:
    "Read firsthand recovery experiences and heartfelt testimonials from patients treated for stroke rehabilitation and chronic pain at Kumar Hospital.",
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white text-[#111827]">
      <Header />

      <PageHero
        label="Patient Reviews"
        title="Real journeys of perseverance, healing and restored dignity."
        backgroundImage="/page-hero/b2.png"
      />

      <TestimonialsRatings />
      <TestimonialsGrid />
      <AppointmentCta />
      <Footer />
    </main>
  );
}
