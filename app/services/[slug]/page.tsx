import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Header } from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { AppointmentCta } from "@/components/home/appointment-cta";
import { servicesData } from "@/data/services";
import { ServiceHeaderBar } from "@/components/services/service-header-bar";
import { ServiceOverview } from "@/components/services/service-overview";
import { ServiceSidebar } from "@/components/services/service-sidebar";

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Kumar Hospital Kochi`,
    description: service.description,
  };
}

async function ServiceDetailContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = servicesData
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      {/* Top Header Bar with Service Background */}
      <ServiceHeaderBar service={service} />

      {/* Main Clinical Details & Sidebar Layout */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 xl:px-24">
          <div className="grid gap-12 lg:grid-cols-[1.8fr_1fr] items-start">
            <ServiceOverview service={service} />
            <ServiceSidebar service={service} relatedServices={relatedServices} />
          </div>
        </div>
      </section>
    </>
  );
}

export default function ServiceDetailPage({
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
        <ServiceDetailContent params={params} />
      </Suspense>

      <AppointmentCta />
      <Footer />
    </main>
  );
}
