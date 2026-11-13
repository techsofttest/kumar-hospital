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
      <section className="bg-[#F4F5F7] py-3.5 sm:py-5 border-b border-gray-200 sticky top-[74px] z-30 backdrop-blur-md bg-[#F4F5F7]/95">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1 -mx-4 px-4 sm:mx-0 sm:px-0">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`shrink-0 rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${activeTab === "all"
                ? "bg-[#061627] text-white shadow-xs"
                : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400 active:bg-gray-100"
                }`}
            >
              All Services ({servicesData.length})
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("neuro")}
              className={`shrink-0 rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${activeTab === "neuro"
                ? "bg-[#061627] text-white shadow-xs"
                : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400 active:bg-gray-100"
                }`}
            >
              Stroke & Neuro Rehabilitation (6)
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("spine-pain")}
              className={`shrink-0 rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${activeTab === "spine-pain"
                ? "bg-[#061627] text-white shadow-xs"
                : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400 active:bg-gray-100"
                }`}
            >
              Back & Neck Pain Care (6)
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 sm:py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 lg:gap-3">
            {filteredServices.map((service) => (
              <div
                key={service.slug}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 bg-[#F4F5F7] transition-all hover:border-gray-300 hover:shadow-md"
              >
                <div>
                  {/* Service Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-200">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2 sm:top-3.5 sm:left-3.5 rounded-full bg-[#061627]/85 px-2 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-[11px] font-semibold text-white backdrop-blur-xs max-w-[calc(100%-16px)] truncate">
                      {service.categoryLabel}
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-3 sm:p-5 md:p-6">
                    <h3 className="text-sm sm:text-lg md:text-xl font-semibold font-[family-name:var(--font-heading)] text-[#061627] leading-snug group-hover:text-[#CD9E57] transition-colors line-clamp-2">
                      {service.title}
                    </h3>

                    {/* 3-line description */}
                    <p className="mt-1.5 sm:mt-2.5 md:mt-3 text-[11px] sm:text-xs md:text-sm text-gray-600 leading-relaxed line-clamp-2 sm:line-clamp-3">
                      {service.description}
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
                      href={`/services/${service.slug}`}
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
    </>
  );
}

