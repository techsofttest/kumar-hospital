import Image from "next/image";
import Link from "next/link";
import {
  Dumbbell,
  Brain,
  Zap,
  Activity,
  Syringe,
  HeartPulse,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const detailedTreatments = [
  {
    id: "stroke-rehab",
    icon: Brain,
    category: "Neurological Care",
    title: "Stroke & Neuro Rehabilitation",
    description:
      "A holistic, multidisciplinary recovery programme tailored for survivors of ischemic stroke, hemorrhagic stroke, traumatic brain injury, and spinal cord injuries.",
    features: [
      "Motor relearning & neuroplasticity stimulation",
      "Functional upper & lower limb training",
      "Balance, coordination & transfer training",
      "Spasticity management protocols",
    ],
    image: "/categories/Neural Pathways in Focus.png",
  },
  {
    id: "robotic-gait",
    icon: Zap,
    category: "Advanced Technology",
    title: "Robotic Gait Training & Biofeedback",
    description:
      "Computer-assisted robotic gait rehabilitation designed to help neurological and orthopaedic patients re-learn natural walking mechanics safely.",
    features: [
      "Dynamic body-weight suspension",
      "High-repetition physiological gait patterns",
      "Real-time sensorised biomechanical feedback",
      "Reduced therapist fatigue with heightened precision",
    ],
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "idd-therapy",
    icon: Activity,
    category: "Non-Surgical Spine",
    title: "IDD Spinal Decompression Therapy",
    description:
      "Intervertebral Differential Dynamics (IDD) therapy delivers computer-targeted distraction forces to decompress injured lumbar and cervical discs without surgical incision.",
    features: [
      "Precision negative intradiscal pressure generation",
      "Relief for herniated, bulging or degenerated discs",
      "Targeted sciatica and trapped nerve decompression",
      "Safe alternative to spinal fusion or laminectomy",
    ],
    image: "/categories/3d-render-male-figure-leaning-with-spine-highlighted.jpg",
  },
  {
    id: "physiotherapy",
    icon: Dumbbell,
    category: "Physical Medicine",
    title: "Specialised Musculoskeletal Physiotherapy",
    description:
      "Targeted movement, joint mobilisation, manual therapy, and therapeutic exercise regimes tailored to alleviate pain and restore joint articulation.",
    features: [
      "Pre & post-operative orthopaedic rehabilitation",
      "Spinal core strengthening & ergonomic correction",
      "Chronic lower back & neck stiffness relief",
      "Joint range-of-motion enhancement",
    ],
    image: "/categories/3d-skeleton-neck-pain.jpg",
  },
  {
    id: "laser-therapy",
    icon: HeartPulse,
    category: "Interventional Pain",
    title: "Class IV High-Intensity Laser Therapy",
    description:
      "Deep tissue photobiomodulation delivering concentrated therapeutic light photons deep into damaged nerves, ligaments, and tendons to trigger rapid cellular repair.",
    features: [
      "Accelerated anti-inflammatory cascade",
      "Instant analgesic pain-dampening action",
      "Soft tissue and tendon injury repair",
      "Completely painless and non-invasive procedure",
    ],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "prp-therapy",
    icon: Syringe,
    category: "Regenerative Medicine",
    title: "Prolotherapy & PRP Regenerative Injections",
    description:
      "Autologous platelet-rich plasma and prolotherapy solutions injected directly under clinical guidance into degenerated joints, ligaments, and chronic pain foci.",
    features: [
      "Knee osteoarthritis joint preservation",
      "Chronic tendinitis and ligamentous laxity repair",
      "Biologic stimulus for collagen synthesis",
      "Outpatient minimally invasive protocol",
    ],
    image: "/categories/brain-spine-design.jpg",
  },
];

export function TreatmentsNav() {
  return (
    <section className="bg-[#F4F5F7] py-6 border-b border-gray-200/80 sticky z-30 backdrop-blur-md">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 xl:px-24">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
          {/* <span className="text-xs font-bold uppercase tracking-wider text-[#061627] mr-2 shrink-0">
            Jump To:
          </span> */}
          {detailedTreatments.map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              className="shrink-0 rounded-full bg-white border border-gray-200/90 px-3.5 py-1.5 text-xs font-semibold text-gray-700 hover:text-[#061627] hover:border-[#061627] transition-all"
            >
              {t.title.split("&")[0]}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TreatmentsList() {
  return (
    <section className="py-10 sm:py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 lg:gap-3">
          {detailedTreatments.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 bg-[#F4F5F7] transition-all hover:border-gray-300 hover:shadow-md"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 sm:top-3.5 sm:left-3.5 rounded-full bg-[#061627]/85 px-2 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-[11px] font-semibold text-white backdrop-blur-xs max-w-[calc(100%-16px)] truncate">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-5 md:p-6">
                  <h3 className="text-sm sm:text-lg md:text-xl font-semibold font-[family-name:var(--font-heading)] text-[#061627] leading-snug group-hover:text-[#CD9E57] transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-1.5 sm:mt-2.5 md:mt-3 text-[11px] sm:text-xs md:text-sm text-gray-600 leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Buttons: Contact Us & View Details */}
              <div className="p-3 pt-0 sm:p-5 sm:pt-0 md:p-6 md:pt-0">
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2.5 md:gap-3 pt-1 sm:pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg sm:rounded-xl bg-[#CD9E57] px-1 sm:px-2.5 md:px-3 py-2 sm:py-2.5 text-[10px] sm:text-xs md:text-sm font-semibold text-[#061627] hover:bg-[#B88942] active:scale-[0.98] transition-all shadow-xs text-center whitespace-nowrap"
                  >
                    Contact Us
                  </Link>

                  <Link
                    href={`/treatments/${item.id}`}
                    className="inline-flex items-center justify-center rounded-lg sm:rounded-xl bg-white border border-gray-300 px-1 sm:px-2.5 md:px-3 py-2 sm:py-2.5 text-[10px] sm:text-xs md:text-sm font-semibold text-[#061627] hover:bg-gray-100 active:scale-[0.98] transition-all text-center whitespace-nowrap"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

