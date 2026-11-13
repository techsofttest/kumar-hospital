"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/data/services";

export function ServicesListing() {
  const [activeTab, setActiveTab] = useState<"all" | "neuro" | "spine-pain">("all");

  const filteredServices = servicesData.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  return (
    <>
      {/* Category Filter Tabs */}
      <section className="bg-[#F4F5F7] py-6 border-b border-gray-200 sticky top-[74px] z-30">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 xl:px-24">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`shrink-0 rounded-full px-5 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === "all"
                  ? "bg-[#061627] text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400"
              }`}
            >
              All Services ({servicesData.length})
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("neuro")}
              className={`shrink-0 rounded-full px-5 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === "neuro"
                  ? "bg-[#061627] text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400"
              }`}
            >
              Stroke & Neuro Rehabilitation (6)
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("spine-pain")}
              className={`shrink-0 rounded-full px-5 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === "spine-pain"
                  ? "bg-[#061627] text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400"
              }`}
            >
              Back & Neck Pain Care (6)
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 xl:px-24">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => (
              <div
                key={service.slug}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 bg-[#F4F5F7] transition-colors hover:border-gray-300"
              >
                <div>
                  {/* Service Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-200">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-3.5 left-3.5 rounded-full bg-[#061627]/85 px-3 py-1 text-[11px] font-semibold text-white">
                      {service.categoryLabel}
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-[#061627] leading-snug group-hover:text-[#CD9E57] transition-colors">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-xs text-[#CD9E57] font-semibold">
                      {service.tagline}
                    </p>

                    <p className="mt-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    {/* Quick highlights */}
                    <ul className="mt-4 space-y-1.5 border-t border-gray-200/80 pt-3.5">
                      {service.clinicalHighlights.slice(0, 2).map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="text-[#CD9E57] font-semibold">•</span>
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="p-6 pt-0">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex w-full items-center justify-center rounded-xl bg-white border border-gray-300 py-2.5 text-xs font-semibold text-[#061627] hover:bg-[#061627] hover:text-white transition-colors"
                  >
                    View Clinical Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

