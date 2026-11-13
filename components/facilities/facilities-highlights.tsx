import { Bed, Cpu, Shield, Users } from "lucide-react";

export function FacilitiesHighlights() {
  return (
    <section className="bg-[#F4F5F7] py-12 border-b border-gray-200/80">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 xl:px-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-3.5">
            <Bed size={32} className="text-[#CD9E57] shrink-0" />
            <span className="text-sm font-semibold text-[#061627]">100% Barrier-Free Design</span>
          </div>

          <div className="flex items-center gap-3.5">
            <Cpu size={32} className="text-[#CD9E57] shrink-0" />
            <span className="text-sm font-semibold text-[#061627]">Robotic Gait & Biofeedback</span>
          </div>

          <div className="flex items-center gap-3.5">
            <Shield size={32} className="text-[#CD9E57] shrink-0" />
            <span className="text-sm font-semibold text-[#061627]">Infection-Safe Protocols</span>
          </div>

          <div className="flex items-center gap-3.5">
            <Users size={32} className="text-[#CD9E57] shrink-0" />
            <span className="text-sm font-semibold text-[#061627]">Caregiver Friendly Suites</span>
          </div>
        </div>
      </div>
    </section>
  );
}
