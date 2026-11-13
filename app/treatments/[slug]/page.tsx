import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Header } from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { AppointmentCta } from "@/components/home/appointment-cta";
import { treatmentsData } from "@/data/treatments";
import { TreatmentHeaderBar } from "@/components/treatments/treatment-header-bar";
import { TreatmentOverview } from "@/components/treatments/treatment-overview";
import { TreatmentSidebar } from "@/components/treatments/treatment-sidebar";

export async function generateStaticParams() {
  return treatmentsData.map((item) => ({
    slug: item.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const treatment = treatmentsData.find((t) => t.id === slug);
  if (!treatment) return { title: "Treatment Not Found" };

  return {
    title: `${treatment.title} | Kumar Hospital Kochi`,
    description: treatment.description,
  };
}

async function TreatmentDetailContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const treatment = treatmentsData.find((t) => t.id === slug);

  if (!treatment) {
    notFound();
  }

  const relatedTreatments = treatmentsData
    .filter((t) => t.id !== treatment.id)
    .slice(0, 3);

  return (
    <>
      {/* Top Header Bar with Treatment Background */}
      <TreatmentHeaderBar treatment={treatment} />

      {/* Main Clinical Details & Sidebar Layout */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 xl:px-24">
          <div className="grid gap-12 lg:grid-cols-[1.8fr_1fr] items-start">
            <TreatmentOverview treatment={treatment} />
            <TreatmentSidebar treatment={treatment} relatedTreatments={relatedTreatments} />
          </div>
        </div>
      </section>
    </>
  );
}

export default function TreatmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <main className="min-h-screen bg-white text-[#111827]">
      <Header />

      <Suspense
        fallback={
          <div className="min-h-[500px] flex items-center justify-center bg-white">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-[#CD9E57]" />
          </div>
        }
      >
        <TreatmentDetailContent params={params} />
      </Suspense>

      <AppointmentCta />
      <Footer />
    </main>
  );
}

