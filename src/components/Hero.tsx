import {
  Activity,
  ArrowUpRight,
  Clock3,
  PhoneCall,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { brand, heroStats } from "../data/siteContent";
import { ButtonLink } from "./ButtonLink";

const serviceTimeline = [
  {
    title: "Rapid triage",
    detail: "Dispatch confirms risk level, property type, and access notes.",
    icon: PhoneCall,
  },
  {
    title: "Precision diagnosis",
    detail: "A licensed technician tests the circuit before quoting work.",
    icon: Activity,
  },
  {
    title: "Safe handoff",
    detail: "Repairs are documented, tested, and explained before we leave.",
    icon: ShieldCheck,
  },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-navy px-5 pb-16 pt-12 text-white sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20"
    >
      <img
        src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1800&q=90"
        alt="Professional electrician inspecting an electrical panel"
        className="absolute inset-0 h-full w-full object-cover opacity-38"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,22,47,0.98)_0%,rgba(7,22,47,0.94)_44%,rgba(7,22,47,0.72)_72%,rgba(7,22,47,0.9)_100%)]" />
      <div className="absolute inset-0 bg-clean-grid bg-[length:80px_80px] opacity-20" />
      <div className="absolute -right-28 top-20 h-[30rem] w-[30rem] rounded-full bg-cyan/20 blur-3xl" />
      <div className="absolute -bottom-44 left-1/3 h-[28rem] w-[28rem] rounded-full bg-safety/12 blur-3xl" />
      <div className="absolute left-0 top-0 h-px w-full origin-left bg-cyan/50 animate-pulseLine" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:min-h-[730px] lg:grid-cols-[1fr_0.94fr] lg:items-center">
        <div className="animate-riseIn">
          <p className="mb-5 inline-flex items-center gap-2 rounded-xl border border-cyan/24 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cyan shadow-insetLine">
            <Zap className="h-4 w-4 fill-cyan" aria-hidden="true" />
            Licensed electrical contractors
          </p>
          <h1 className="max-w-4xl font-display text-5xl font-extrabold leading-[0.96] tracking-[-0.055em] sm:text-6xl xl:text-[5.9rem]">
            Modern electrical work, handled with precision.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
            {brand.name} helps homeowners, property managers, and commercial
            teams solve faults, inspections, lighting, rewiring, and upgrades
            with clear pricing, careful testing, and documented safety checks.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contact" variant="yellow">
              Book an inspection
            </ButtonLink>
            <ButtonLink href="tel:+13125550119" variant="secondary">
              Call emergency support
            </ButtonLink>
          </div>

          <div className="mt-10 grid overflow-hidden rounded-[1.35rem] border border-white/12 bg-white/[0.08] shadow-insetLine backdrop-blur sm:grid-cols-2 xl:grid-cols-4">
            {heroStats.map((stat, index) => (
              <div
                key={stat.label}
                className="animate-riseIn border-b border-white/10 p-5 sm:border-r sm:last:border-r-0 xl:border-b-0"
                style={{ animationDelay: `${180 + index * 90}ms` }}
              >
                <p className="font-display text-3xl font-extrabold tracking-[-0.05em] text-safety">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.14em] text-white/64">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-riseIn" style={{ animationDelay: "120ms" }}>
          <div className="absolute -left-8 top-12 hidden h-24 w-24 rounded-full border border-cyan/30 bg-cyan/10 blur-sm lg:block" />
          <div className="absolute -right-8 bottom-10 hidden h-32 w-32 rounded-full border border-safety/30 bg-safety/10 blur-sm lg:block" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/14 bg-glass-panel p-4 shadow-glow backdrop-blur-2xl sm:p-5">
            <div className="absolute inset-0 bg-clean-grid bg-[length:46px_46px] opacity-35" />
            <div className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-cyan/70 to-transparent" />
            <div className="absolute bottom-10 left-8 right-8 h-px bg-gradient-to-r from-transparent via-safety/50 to-transparent" />

            <div className="relative overflow-hidden rounded-[1.55rem] bg-navy shadow-deep">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=88"
                alt="Electrician testing a circuit with professional equipment"
                className="absolute inset-0 h-full w-full object-cover opacity-34"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(7,22,47,0.98)_0%,rgba(7,22,47,0.84)_48%,rgba(12,107,255,0.46)_100%)]" />

              <div className="relative min-h-[520px] p-5 sm:p-7 lg:min-h-[600px]">
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-safety px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-navy">
                    <Clock3 className="h-4 w-4" aria-hidden="true" />
                    24/7 dispatch
                  </span>
                  <span className="hidden rounded-full border border-cyan/24 bg-cyan/12 px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-cyan sm:inline-flex">
                    Live safety log
                  </span>
                </div>

                <div className="mt-20 max-w-md sm:mt-28">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan">
                    Service command view
                  </p>
                  <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.055em] text-white sm:text-5xl">
                    Inspection, quote, repair, and final test in one clean visit.
                  </h2>
                  <p className="mt-4 text-[15px] leading-7 text-white/68">
                    A modern electrician template should make safety and next
                    steps feel obvious before a customer ever calls.
                  </p>
                </div>

                <div className="absolute bottom-5 left-5 right-5 rounded-[1.25rem] border border-white/12 bg-white/[0.1] p-4 shadow-insetLine backdrop-blur-xl sm:bottom-7 sm:left-7 sm:right-7 sm:p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-safety">
                        Active response window
                      </p>
                      <p className="mt-1 font-display text-2xl font-extrabold tracking-[-0.04em]">
                        Under 60 minutes
                      </p>
                    </div>
                    <a
                      href="tel:+13125550119"
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white px-4 text-sm font-extrabold text-navy transition hover:-translate-y-0.5"
                    >
                      <PhoneCall className="h-4 w-4" />
                      Call now
                    </a>
                  </div>
                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/12">
                    <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-safety via-cyan to-cobalt animate-meterSweep" />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-4 grid gap-3 sm:grid-cols-3">
              {serviceTimeline.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="rounded-[1rem] border border-white/12 bg-white/[0.08] p-4 shadow-insetLine backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/[0.12]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan/12 text-cyan">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="font-display text-2xl font-extrabold tracking-[-0.06em] text-white/18">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 text-sm font-extrabold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs font-semibold leading-5 text-white/58">
                      {step.detail}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="relative mt-4 flex flex-col gap-3 rounded-[1rem] border border-cyan/18 bg-cyan/10 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-cyan">
                  Emergency line
                </p>
                <p className="mt-1 text-lg font-extrabold">{brand.emergencyPhone}</p>
              </div>
              <a
                href="#services"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/14 bg-white/[0.08] px-4 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.14]"
              >
                See service options
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
