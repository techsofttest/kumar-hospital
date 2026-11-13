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
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 xl:px-24 space-y-16 lg:space-y-24">
        {detailedTreatments.map((item, idx) => {
          const Icon = item.icon;
          const isReversed = idx % 2 === 1;

          return (
            <div
              key={item.id}
              id={item.id}
              className={`grid gap-10 lg:grid-cols-2 lg:gap-16 items-center ${isReversed ? "lg:grid-flow-dense" : ""
                }`}
            >
              {/* Image */}
              <ScrollReveal
                direction={isReversed ? "right" : "left"}
                distance={30}
                duration={650}
                className={isReversed ? "lg:col-start-2" : ""}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] bg-gray-100 border border-gray-200/90 shadow-xs">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>

              {/* Content */}
              <ScrollReveal
                direction="up"
                distance={20}
                duration={600}
                className={isReversed ? "lg:col-start-1" : ""}
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#CD9E57]">
                  <Icon size={16} />
                  <span>{item.category}</span>
                </div>

                <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-medium font-[family-name:var(--font-heading)] text-[#061627] tracking-[-0.03em] leading-tight">
                  {item.title}
                </h2>

                <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-[#52606B]">
                  {item.description}
                </p>

                <div className="mt-6 space-y-2.5">
                  {item.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-3 text-sm text-[#061627]">
                      <CheckCircle2 size={16} className="text-[#CD9E57] mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button href="/book-appointment" variant="primary" size="normal">
                    Consult a Specialist
                  </Button>

                  <Button href={`/treatments/${item.id}`} variant="ternary" size="normal">
                    View Details
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}

