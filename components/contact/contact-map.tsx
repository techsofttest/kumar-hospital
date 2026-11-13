export function ContactMap() {
  return (
    <div className="mt-16 sm:mt-20 overflow-hidden rounded-[28px] border border-gray-200/90 bg-gray-100 shadow-xs">
      <div className="p-6 bg-[#F4F5F7] border-b border-gray-200/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-[#061627]">Locate Kumar Hospital on Google Maps</h3>
          <p className="text-xs text-gray-500">Thammanam Road, Kochi, Ernakulam, Kerala</p>
        </div>

        <a
          href="https://maps.google.com/maps?q=Thammanam,%20Kochi,%20Kerala"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#CD9E57] hover:underline"
        >
          <span>Open in Google Maps App</span>
          &rarr;
        </a>
      </div>

      <div className="relative h-[380px] w-full">
        <iframe
          title="Kumar Hospital Kochi Map"
          src="https://maps.google.com/maps?q=Thammanam,%20Kochi,%20Kerala&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="h-full w-full border-0"
          loading="lazy"
        />
      </div>
    </div>
  );
}

