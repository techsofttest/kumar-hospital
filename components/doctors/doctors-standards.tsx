import { Stethoscope, Award, GraduationCap } from "lucide-react";

export function DoctorsStandards() {
  return (
    <section className="bg-[#F4F5F7] py-14 sm:py-16 text-[#061627]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 xl:px-24">
        <div className="grid gap-8 sm:grid-cols-3">
          <div className="flex items-start gap-4">
            <Stethoscope size={36} className="text-[#CD9E57] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-base font-semibold text-[#061627]">Thorough Assessment</h4>
              <p className="mt-1 text-xs sm:text-sm text-gray-600">
                Comprehensive neurological and musculoskeletal evaluation before prescribing any therapy.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Award size={36} className="text-[#CD9E57] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-base font-semibold text-[#061627]">Custom Protocol</h4>
              <p className="mt-1 text-xs sm:text-sm text-gray-600">
                Tailored multi-modal rehabilitation regimens designed around your exact recovery potential.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <GraduationCap size={36} className="text-[#CD9E57] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-base font-semibold text-[#061627]">Continual Monitoring</h4>
              <p className="mt-1 text-xs sm:text-sm text-gray-600">
                Continuous clinical reviews ensuring progress is quantified and treatments adapted safely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
