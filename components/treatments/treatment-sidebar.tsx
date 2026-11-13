import Link from "next/link";
import Image from "next/image";
import { TreatmentItem } from "@/data/treatments";
import { SectionLabel } from "@/components/ui/section-label";
import { Button } from "@/components/ui/button";

interface TreatmentSidebarProps {
  treatment: TreatmentItem;
  relatedTreatments: TreatmentItem[];
}

export function TreatmentSidebar({ treatment, relatedTreatments }: TreatmentSidebarProps) {
  return (
    <div className="lg:sticky lg:top-28 space-y-6">
      {/* Book Appointment Card */}
      <div className="rounded-2xl bg-[#061627] text-white p-6 sm:p-8">
        <SectionLabel light>Consultation Desk</SectionLabel>
        <h3 className="mt-2 text-xl font-semibold font-[family-name:var(--font-heading)] text-white">
          Book This Treatment
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
          Schedule an evaluation with our physical medicine specialists in Thammanam, Kochi to discuss personalized protocols for {treatment.title}.
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

      {/* Related Treatments with Thumbnails */}
      {relatedTreatments.length > 0 && (
        <div className="rounded-2xl bg-[#F4F5F7] border border-gray-200 p-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
            Other Specialized Treatments
          </h4>
          <div className="space-y-3">
            {relatedTreatments.map((rel) => (
              <Link
                key={rel.id}
                href={`/treatments/${rel.id}`}
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

