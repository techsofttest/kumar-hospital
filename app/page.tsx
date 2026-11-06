import { Header } from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { Hero } from "@/components/home/hero";
import { PrimaryServices } from "@/components/home/primary-services";
import { About } from "@/components/home/about";
import { WhyChoose } from "@/components/home/why-choose";
import { NeuroRehab } from "@/components/home/neuro-rehab";
import { BackAndNeckPain } from "@/components/home/back-and-neck-pain";
import { Treatments } from "@/components/home/treatments";
import { Facilities } from "@/components/home/facilities";
import { Doctors } from "@/components/home/doctors";
import { Testimonials } from "@/components/home/testimonials";
import { Faq } from "@/components/home/faq";
import { AppointmentCta } from "@/components/home/appointment-cta";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#111827]">
      <Header />
      <Hero />
      <PrimaryServices />
      <About />
      <WhyChoose />
      <NeuroRehab />
      <BackAndNeckPain />
      <Treatments />
      <Facilities />
      <Doctors />
      <Testimonials />
      <Faq />
      <AppointmentCta />
      <Footer />
    </main>
  );
}
