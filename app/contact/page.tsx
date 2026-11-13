import { Header } from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { PageHero } from "@/components/global/page-hero";
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactMap } from "@/components/contact/contact-map";

export const metadata = {
  title: "Contact Us & Appointments | Kumar Hospital Kochi",
  description:
    "Get in touch with Kumar Hospital in Thammanam, Kochi. Book physical medicine appointments, neuro-rehab admissions, and pain clinic consultations.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#111827]">
      <Header />

      <PageHero
        label="Get In Touch"
        title="We are here to support your recovery every step of the way."
        description="Reach out to our clinical care desk in Thammanam, Kochi for outpatient specialist appointments, neuro-rehab admissions, or non-surgical pain inquiries."
        backgroundImage="/page-hero/b2.png"
      />

      {/* Main Contact Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 xl:px-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 items-start">
            <ContactInfo />
            <ContactForm />
          </div>

          <ContactMap />
        </div>
      </section>

      <Footer />
    </main>
  );
}
