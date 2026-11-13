import { Header } from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { PageHero } from "@/components/global/page-hero";
import { AppointmentCta } from "@/components/home/appointment-cta";
import { AboutStats } from "@/components/about/about-stats";
import { AboutPhilosophy } from "@/components/about/about-philosophy";
import { AboutPillars } from "@/components/about/about-pillars";
import { AboutMilestones } from "@/components/about/about-milestones";

export const metadata = {
  title: "About Us | Kumar Hospital Kochi",
  description:
    "Learn about Kumar Hospital, our legacy of specialist stroke & neuro rehabilitation and non-surgical pain care in Kochi, Kerala.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#111827]">
      <Header />

      <PageHero
        label="About Kumar Hospital"
        title="Restoring movement, independence and quality of life."
        backgroundImage="/page-hero/b1.png"
      />

      <AboutStats />
      <AboutPhilosophy />
      <AboutPillars />
      <AboutMilestones />
      <AppointmentCta />
      <Footer />
    </main>
  );
}
