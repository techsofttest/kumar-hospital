import { Star, CheckCircle2 } from "lucide-react";

export function TestimonialsRatings() {
  return (
    <section className="bg-[#F4F5F7] py-10 border-b border-gray-200/80">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 xl:px-24">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex text-[#CD9E57]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="#CD9E57" strokeWidth={0} />
              ))}
            </div>
            <div>
              <span className="text-xl font-bold text-[#061627]">4.9 / 5.0</span>
              <span className="text-xs text-gray-500 ml-2">(Over 800+ Verified Patient Reviews)</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-gray-600">
            <CheckCircle2 size={16} className="text-[#CD9E57]" />
            <span>Independent Clinical Outcome Follow-ups</span>
          </div>
        </div>
      </div>
    </section>
  );
}

