import Image from "next/image";
import { ServiceItem } from "@/data/services";

interface ServiceOverviewProps {
  service: ServiceItem;
}

export function ServiceOverview({ service }: ServiceOverviewProps) {
  return (
    <div className="space-y-12">

      {/* Clinical Overview Paragraphs */}
      <div>
        <h2 className="text-2xl font-semibold font-[family-name:var(--font-heading)] text-[#061627] tracking-tight mb-4">
          Clinical Overview & Philosophy
        </h2>
        <div className="space-y-3.5 text-sm sm:text-base text-gray-700 leading-relaxed">
          {service.overview.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>

      {/* Featured Visual */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gray-100 border border-gray-200">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Key Clinical Modalities */}
      <div className="rounded-2xl bg-[#F4F5F7] border border-gray-200 p-6 sm:p-8">
        <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-[#061627] tracking-tight mb-4">
          Clinical Modalities & Technology
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {service.clinicalHighlights.map((highlight, i) => (
            <div
              key={i}
              className="flex items-start gap-2.5 rounded-xl bg-white border border-gray-200 p-3.5"
            >
              <span className="text-[#CD9E57] font-semibold">•</span>
              <span className="text-xs sm:text-sm font-medium text-[#061627]">
                {highlight}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Step-by-Step Clinical Protocol Pathway */}
      <div>
        <h2 className="text-2xl font-semibold font-[family-name:var(--font-heading)] text-[#061627] tracking-tight mb-6">
          Structured Treatment Pathway
        </h2>
        <div className="space-y-4">
          {service.protocolSteps.map((step) => (
            <div
              key={step.step}
              className="flex items-start gap-5 rounded-2xl border border-gray-200 p-5 sm:p-6 bg-white"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#061627] text-white text-sm font-semibold">
                {step.step}
              </span>
              <div>
                <h4 className="text-base font-semibold text-[#061627]">
                  {step.title}
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indications & Recovery Milestones */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 p-6 bg-white">
          <h3 className="text-base font-semibold font-[family-name:var(--font-heading)] text-[#061627] tracking-tight mb-3">
            Who Is This For? (Indications)
          </h3>
          <ul className="space-y-2">
            {service.indications.map((ind, i) => (
              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                <span className="text-emerald-600 font-semibold">✓</span>
                <span>{ind}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 p-6 bg-white">
          <h3 className="text-base font-semibold font-[family-name:var(--font-heading)] text-[#061627] tracking-tight mb-3">
            Key Recovery Milestones
          </h3>
          <ul className="space-y-2">
            {service.recoveryGoals.map((goal, i) => (
              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                <span className="text-[#CD9E57] font-semibold">★</span>
                <span>{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

