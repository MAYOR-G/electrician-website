import { PhoneCall, Siren } from "lucide-react";
import { brand, emergencyHighlights } from "../data/siteContent";

export function EmergencyBanner() {
  return (
    <section className="bg-safety px-5 py-5 text-navy lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-start gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy text-safety">
            <Siren className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="font-display text-xl font-extrabold tracking-[-0.04em]">
              Urgent electrical issue? Get a licensed technician on the line.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {emergencyHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-navy/12 bg-white/35 px-3 py-1 text-xs font-black uppercase tracking-[0.1em] text-navy/72"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <a
          href="tel:+13125550119"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-navy px-5 text-[15px] font-extrabold text-white transition hover:-translate-y-0.5"
        >
          <PhoneCall className="h-4 w-4" />
          {brand.emergencyPhone}
        </a>
      </div>
    </section>
  );
}
