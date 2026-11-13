import { Header } from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { PageHero } from "@/components/global/page-hero";
import { AppointmentBookingForm } from "@/components/appointment/appointment-booking-form";

export const metadata = {
  title: "Book an Appointment | Kumar Hospital Kochi",
  description:
    "Schedule an outpatient consultation, physical medicine review, or neuro-rehabilitation assessment at Kumar Hospital Thammanam, Kochi.",
};

export default function BookAppointmentPage() {
  return (
    <main className="min-h-screen bg-white text-[#111827]">
      <Header />

      <PageHero
        label="Clinical Scheduling"
        title="Book an Appointment with Our Specialists"
        backgroundImage="/page-hero/b5.png"
      />

      <AppointmentBookingForm />

      <Footer />
    </main>
  );
}

