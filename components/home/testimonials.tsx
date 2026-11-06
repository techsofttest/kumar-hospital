import { SectionLabel } from "@/components/ui/section-label";

export const testimonials = [
  {
    quote:
      "The treatment helped me regain my strength and return to my normal activities. The doctor and staff were very caring throughout.",
    name: "Chinchu Dominic",
    type: "Patient",
  },
  {
    quote:
      "Very effective treatment. The doctors are caring and the staff are supportive. The treatment was worth the cost.",
    name: "Alex K",
    type: "Patient",
  },
  {
    quote:
      "After years of trying different treatments, I finally experienced a significant improvement in my movement and daily activities.",
    name: "Devassy Chittayath",
    type: "Patient",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-100 py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 xl:px-24">
        <div className="max-w-[650px]">
          <SectionLabel>Patient Stories</SectionLabel>

          <h2 className="text-3xl font-normal font-serif tracking-[-0.03em] sm:text-4xl lg:text-5xl">
            What our patients say.
          </h2>
        </div>

        <div className="mt-12 grid gap-3 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`rounded-2xl p-7 ${
                index === 1
                  ? "bg-black text-white"
                  : "bg-white border border-gray-200"
              }`}
            >
              <div className="flex gap-1 text-[#CD9E57]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star}>★</span>
                ))}
              </div>

              <p
                className={`mt-7 text-[16px] leading-7 ${
                  index === 1 ? "text-white/80" : "text-[#354552]"
                }`}
              >
                “{testimonial.quote}”
              </p>

              <div
                className={`mt-8 border-t pt-5 ${
                  index === 1
                    ? "border-white/15"
                    : "border-[#E7E3DC]"
                }`}
              >
                <p className="text-[14px] font-semibold">
                  {testimonial.name}
                </p>
                <p
                  className={`mt-1 text-[12px] ${
                    index === 1 ? "text-white/50" : "text-[#77818A]"
                  }`}
                >
                  {testimonial.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

