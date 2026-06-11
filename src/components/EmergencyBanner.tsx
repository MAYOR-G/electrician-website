import { PhoneCall, Siren } from "lucide-react";
import { brand, emergencyHighlights } from "../data/siteContent";

export function EmergencyBanner() {
  return (
    <section className="bg-safety px-5 py-4 text-navy lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy text-safety">
            <Siren className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="font-display text-xl font-extrabold tracking-[-0.04em]">
              Urgent electrical issue? Get a licensed technician on the line.
            </p>
            <p className="mt-1 text-sm font-bold text-navy/70">
              {emergencyHighlights.join(" • ")}
            </p>
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
