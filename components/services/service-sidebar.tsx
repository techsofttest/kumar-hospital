import Link from "next/link";
import Image from "next/image";
import { ServiceItem } from "@/data/services";
import { SectionLabel } from "@/components/ui/section-label";
import { Button } from "@/components/ui/button";

interface ServiceSidebarProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export function ServiceSidebar({ service, relatedServices }: ServiceSidebarProps) {
  return (
    <div className="lg:sticky lg:top-28 space-y-6">
      {/* Book Appointment Card */}
      <div className="rounded-2xl bg-[#061627] text-white p-6 sm:p-8">
        <SectionLabel light>Start Your Recovery</SectionLabel>
        <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-white">
          Schedule an Evaluation
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
          Meet our physiatrists and rehabilitation specialists in Thammanam, Kochi to discuss custom protocols for {service.title}.
        </p>

        <div className="mt-6 space-y-3">
          <Button
            href="/book-appointment"
            variant="primary"
            size="normal"
            className="w-full justify-center text-xs sm:text-sm"
          >
            Book Consultation Online
          </Button>

          <Button
            href="tel:+919048178888"
            variant="secondary"
            size="normal"
            className="w-full justify-center text-xs sm:text-sm border-white/20 hover:border-white/40"
          >
            Call Help Desk: +91 90481 78888
          </Button>
        </div>
      </div>

      {/* Related Services in Same Category with Thumbnail Images */}
      {relatedServices.length > 0 && (
        <div className="rounded-2xl bg-[#F4F5F7] border border-gray-200 p-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
            Other {service.categoryLabel} Services
          </h4>
          <div className="space-y-3">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="group flex items-center gap-3 rounded-xl bg-white border border-gray-200 p-3 hover:border-gray-400 transition-colors"
              >
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-gray-100 border border-gray-200">
                  <Image
                    src={rel.image}
                    alt={rel.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h5 className="text-xs sm:text-sm font-semibold text-[#061627] group-hover:text-[#CD9E57] transition-colors leading-snug line-clamp-1">
                    {rel.title}
                  </h5>
                  <p className="mt-0.5 text-[11px] text-gray-500 line-clamp-1">
                    {rel.tagline}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
