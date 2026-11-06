import Image from "next/image";
import { Star } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { Button } from "@/components/ui/button";

export const patientTestimonials = [
  {
    rating: 5,
    quote:
      "The rehabilitation process was much easier than I expected. The doctor and staff were very caring throughout, and I can finally walk without hesitation.",
    name: "Chinchu Dominic",
    treatment: "Neuro Rehabilitation",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
  },
  {
    rating: 5,
    quote:
      "The treatment was thorough, but the doctors' care made it smooth. Recovery was faster than expected, and the pain relief has been life-changing.",
    name: "Alex K",
    treatment: "Spine & Pain Care",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
  },
  {
    rating: 5,
    quote:
      "I was dreading the therapy after months of severe back pain, but the entire decompression procedure was gentle and effective. I couldn't believe how smooth everything went.",
    name: "Devassy Chittayath",
    treatment: "IDD Spinal Therapy",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
  },
  {
    rating: 5,
    quote:
      "After years of trying different treatments, I finally experienced a significant improvement in my movement, balance, and daily activities with robotic gait training.",
    name: "Meera Nair",
    treatment: "Robotic Gait Training",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
  },
  {
    rating: 5,
    quote:
      "Getting back to independence was tough at first, but the support from the physiotherapy team made all the difference. I couldn't be happier with the results.",
    name: "Rahul Menon",
    treatment: "Stroke Recovery",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#E9ECF0] py-14 sm:py-16 lg:py-20 border-b border-gray-200">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 xl:px-24">
        {/* Section Header Row with View More Button on the right edge */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between mb-9">
          <div className="max-w-[650px]">
            <SectionLabel>Patient Stories</SectionLabel>
            <h2 className="text-3xl font-medium font-[family-name:var(--font-heading)] tracking-[-0.03em] sm:text-4xl text-[#061627]">
              What our patients say.
            </h2>
          </div>

          {/* View More button aligned to the right edge */}
          <div className="shrink-0">
            <Button href="#appointment" variant="primary" size="normal">
              View More Reviews
            </Button>
          </div>
        </div>

        {/* Bento Grid Matching Reference Image Exactly:
            Top Row: [Col 1-2: Wide Photo Card] [Col 3: Review Card] [Col 4: Review Card]
            Bottom Row: [Col 1: Review Card] [Col 2: Review Card] [Col 3: Review Card] [Col 4: Tall Photo Card]
        */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Top Row - Item 1: Wide Banner Photo (Spans 2 columns on desktop) */}
          <div className="relative min-h-[250px] overflow-hidden rounded-[22px] bg-white sm:col-span-2 shadow-xs">
            <Image
              src="/baner/neuro-rehab.jpg"
              alt="Medical rehabilitation care team with patient"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Top Row - Item 2: Testimonial Card (Chinchu Dominic) */}
          <div className="flex flex-col justify-between rounded-[22px] bg-white p-6 shadow-xs">
            <div>
              <div className="flex items-center gap-1 text-[#111827]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="fill-[#111827]" />
                ))}
              </div>
              <p className="mt-4 text-[13px] leading-relaxed text-[#374151]">
                “{patientTestimonials[0].quote}”
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3 pt-4">
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-gray-200">
                <Image
                  src={patientTestimonials[0].avatar}
                  alt={patientTestimonials[0].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-[13.5px] font-semibold text-[#061627]">
                  {patientTestimonials[0].name}
                </h4>
                <p className="text-[11.5px] text-gray-500">
                  {patientTestimonials[0].treatment}
                </p>
              </div>
            </div>
          </div>

          {/* Top Row - Item 3: Testimonial Card (Alex K) */}
          <div className="flex flex-col justify-between rounded-[22px] bg-white p-6 shadow-xs">
            <div>
              <div className="flex items-center gap-1 text-[#111827]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="fill-[#111827]" />
                ))}
              </div>
              <p className="mt-4 text-[13px] leading-relaxed text-[#374151]">
                “{patientTestimonials[1].quote}”
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3 pt-4">
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-gray-200">
                <Image
                  src={patientTestimonials[1].avatar}
                  alt={patientTestimonials[1].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-[13.5px] font-semibold text-[#061627]">
                  {patientTestimonials[1].name}
                </h4>
                <p className="text-[11.5px] text-gray-500">
                  {patientTestimonials[1].treatment}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Row - Item 4: Testimonial Card (Devassy Chittayath) */}
          <div className="flex flex-col justify-between rounded-[22px] bg-white p-6 shadow-xs">
            <div>
              <div className="flex items-center gap-1 text-[#111827]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="fill-[#111827]" />
                ))}
              </div>
              <p className="mt-4 text-[13px] leading-relaxed text-[#374151]">
                “{patientTestimonials[2].quote}”
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3 pt-4">
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-gray-200">
                <Image
                  src={patientTestimonials[2].avatar}
                  alt={patientTestimonials[2].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-[13.5px] font-semibold text-[#061627]">
                  {patientTestimonials[2].name}
                </h4>
                <p className="text-[11.5px] text-gray-500">
                  {patientTestimonials[2].treatment}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Row - Item 5: Testimonial Card (Meera Nair) */}
          <div className="flex flex-col justify-between rounded-[22px] bg-white p-6 shadow-xs">
            <div>
              <div className="flex items-center gap-1 text-[#111827]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="fill-[#111827]" />
                ))}
              </div>
              <p className="mt-4 text-[13px] leading-relaxed text-[#374151]">
                “{patientTestimonials[3].quote}”
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3 pt-4">
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-gray-200">
                <Image
                  src={patientTestimonials[3].avatar}
                  alt={patientTestimonials[3].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-[13.5px] font-semibold text-[#061627]">
                  {patientTestimonials[3].name}
                </h4>
                <p className="text-[11.5px] text-gray-500">
                  {patientTestimonials[3].treatment}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Row - Item 6: Testimonial Card (Rahul Menon) */}
          <div className="flex flex-col justify-between rounded-[22px] bg-white p-6 shadow-xs">
            <div>
              <div className="flex items-center gap-1 text-[#111827]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="fill-[#111827]" />
                ))}
              </div>
              <p className="mt-4 text-[13px] leading-relaxed text-[#374151]">
                “{patientTestimonials[4].quote}”
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3 pt-4">
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-gray-200">
                <Image
                  src={patientTestimonials[4].avatar}
                  alt={patientTestimonials[4].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-[13.5px] font-semibold text-[#061627]">
                  {patientTestimonials[4].name}
                </h4>
                <p className="text-[11.5px] text-gray-500">
                  {patientTestimonials[4].treatment}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Row - Item 7: Right Side Patient Portrait */}
          <div className="relative min-h-[250px] overflow-hidden rounded-[22px] bg-white shadow-xs">
            <Image
              src="/testimonial/t1.png"
              alt="Happy recovered patient smiling"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
