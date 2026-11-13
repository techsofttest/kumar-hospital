import { MapPin, Phone, Clock3 } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function ContactInfo() {
  return (
    <ScrollReveal direction="up" distance={20} duration={600}>
      <SectionLabel>Hospital Help Desk</SectionLabel>
      <h2 className="text-3xl sm:text-4xl font-medium font-[family-name:var(--font-heading)] text-[#061627] tracking-[-0.03em]">
        Reach our clinical team directly.
      </h2>
      <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-[#52606B]">
        Whether you are seeking advice on post-stroke rehabilitation, chronic disc decompression, or scheduling a consultation with our doctors, our team is at your service.
      </p>

      {/* Cards for Info */}
      <div className="mt-8 space-y-4">
        <div className="flex items-start gap-4 rounded-2xl border border-gray-200/90 bg-[#F4F5F7] p-5">
          <MapPin size={32} className="text-[#CD9E57] shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-semibold text-[#061627]">Hospital Location</h3>
            <p className="mt-0.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
              Kumar Hospital, H.O. Thammanam, Kochi-682032, Ernakulam District, Kerala, India
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-2xl border border-gray-200/90 bg-[#F4F5F7] p-5">
          <Phone size={32} className="text-[#CD9E57] shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-semibold text-[#061627]">Phone & Emergency Support</h3>
            <p className="mt-0.5 text-xs sm:text-sm text-gray-600">
              Primary Helpline:{" "}
              <a href="tel:+919048178888" className="font-semibold text-[#061627] underline">
                +91 90481 78888
              </a>
            </p>
            <p className="mt-0.5 text-xs text-gray-500">Available 7 days a week: 7:00 AM – 10:00 PM</p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-2xl border border-gray-200/90 bg-[#F4F5F7] p-5">
          <Clock3 size={32} className="text-[#CD9E57] shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-semibold text-[#061627]">Outpatient Consultation Hours</h3>
            <p className="mt-0.5 text-xs sm:text-sm text-gray-600">
              Monday to Saturday: 08:00 – 17:00 hrs
            </p>
            <p className="mt-0.5 text-xs text-gray-500">Sunday: Closed for routine OP (Emergency rehabilitation support open)</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
