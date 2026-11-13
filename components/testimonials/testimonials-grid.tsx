import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";

export interface TestimonialItem {
  rating: number;
  quote: string;
  name: string;
  treatment: string;
  avatar: string;
  city?: string;
}

export const fullTestimonials: TestimonialItem[] = [
  {
    rating: 5,
    quote:
      "The rehabilitation process was much easier than I expected. The doctor and staff were very caring throughout, and I can finally walk without hesitation after my recovery.",
    name: "Chinchu Dominic",
    treatment: "Neuro Rehabilitation",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80",
    city: "Kochi, Kerala",
  },
  {
    rating: 5,
    quote:
      "The treatment was thorough, but the doctors' personal care made it smooth. Recovery was faster than expected, and the pain relief has truly been life-changing.",
    name: "Alex K",
    treatment: "Back & Neck Pain Care",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
    city: "Ernakulam, Kerala",
  },
  {
    rating: 5,
    quote:
      "I was dreading the therapy after months of severe pain, but the entire non-surgical decompression procedure was gentle and effective. Everything went wonderfully.",
    name: "Devassy Chittayath",
    treatment: "IDD Spinal Therapy",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
    city: "Aluva, Kerala",
  },
  {
    rating: 5,
    quote:
      "After years of trying different treatments, I finally experienced a significant improvement in my movement, balance, and daily activities with robotic gait training.",
    name: "Meera Nair",
    treatment: "Robotic Gait Training",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
    city: "Thrissur, Kerala",
  },
  {
    rating: 5,
    quote:
      "Getting back to independence was tough at first, but the support from the multidisciplinary therapy team made all the difference. I couldn't be happier with the results.",
    name: "Rahul Menon",
    treatment: "Stroke Recovery",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
    city: "Kochi, Kerala",
  },
  {
    rating: 5,
    quote:
      "My father suffered a severe stroke that left his right side paralyzed. Under the doctor’s guidance and continuous robotic gait training, he has started walking with minimal assistance. We are eternally grateful to Kumar Hospital.",
    name: "Suresh Balakrishnan",
    treatment: "Stroke Rehabilitation (Caregiver)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
    city: "Ernakulam, Kerala",
  },
  {
    rating: 5,
    quote:
      "I was advised spinal surgery by two other hospitals for severe L4-L5 disc protrusion and sciatica. IDD therapy at Kumar Hospital saved me from surgery. I have resumed my IT job completely pain-free.",
    name: "Deepa R.",
    treatment: "IDD Decompression & Spine Care",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80",
    city: "Kochi, Kerala",
  },
  {
    rating: 5,
    quote:
      "The inpatient facility was completely wheelchair accessible and the nurses treated us like family. Daily speech and occupational sessions brought back my mother's confidence.",
    name: "Jomon Varghese",
    treatment: "Neuro Rehabilitation & Speech Therapy",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
    city: "Kottayam, Kerala",
  },
  {
    rating: 5,
    quote:
      "Chronic cervical neck pain and migraines used to disrupt my life. Dr. Sruthi and the physio team pinpointed the exact postural trigger. The laser therapy and exercise routine did wonders.",
    name: "Ananya Pillai",
    treatment: "Class IV Laser & Cervical Care",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
    city: "Thrissur, Kerala",
  },
];

export function TestimonialsGrid() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 xl:px-24">
        <ScrollReveal direction="up" distance={20} duration={600} className="max-w-[720px] mb-12 sm:mb-16">
          <SectionLabel>Recovery Experiences</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-[family-name:var(--font-heading)] text-[#061627] tracking-[-0.03em]">
            Stories told by our patients & their loved ones.
          </h2>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fullTestimonials.map((item, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              distance={20}
              delay={idx * 70}
              duration={600}
              className="flex flex-col justify-between rounded-[24px] border border-gray-200/90 bg-[#F4F5F7] p-7 shadow-xs hover:border-gray-300 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#CD9E57] gap-0.5">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} size={15} fill="#CD9E57" strokeWidth={0} />
                    ))}
                  </div>
                  <Quote size={24} className="text-[#CD9E57]/30 shrink-0" />
                </div>

                <p className="text-[14.5px] leading-relaxed text-[#1F2937] font-medium">
                  “{item.quote}”
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200/80 flex items-center gap-3.5">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-gray-200 border border-gray-200 shadow-xs">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-[14.5px] font-semibold text-[#061627] truncate">
                    {item.name}
                  </h4>
                  <p className="text-[12px] font-medium text-gray-500 truncate">
                    {item.treatment}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

