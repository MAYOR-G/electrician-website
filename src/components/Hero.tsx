import { CheckCircle2, PhoneCall, ShieldCheck, Zap } from "lucide-react";
import { brand, heroStats, visualMetrics } from "../data/siteContent";
import { ButtonLink } from "./ButtonLink";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-circuit-hero px-5 py-16 text-white lg:px-8 lg:py-20">
      <div className="absolute inset-0 bg-clean-grid bg-[length:72px_72px] opacity-35" />
      <div className="absolute -right-24 top-14 h-80 w-80 rounded-full bg-cyan/20 blur-3xl" />
      <div className="absolute left-0 top-0 h-px w-full origin-left bg-cyan/50 animate-pulseLine" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:min-h-[700px] lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="animate-riseIn">
          <p className="mb-5 inline-flex items-center gap-2 rounded-xl border border-cyan/24 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cyan shadow-insetLine">
            <Zap className="h-4 w-4 fill-cyan" aria-hidden="true" />
            Same-day electrical support
          </p>
          <h1 className="max-w-4xl font-display text-5xl font-extrabold leading-[0.96] tracking-[-0.055em] sm:text-6xl xl:text-[5.8rem]">
            Electrical work that feels safe before the switch turns on.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
            {brand.name} is a premium electrical services template for
            emergency repairs, inspections, lighting, rewiring, commercial
            projects, and smart home upgrades.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="tel:+13125550119" variant="yellow">
              Call emergency support
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Book an inspection
            </ButtonLink>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {heroStats.map((stat, index) => (
              <div
                key={stat.label}
                className="animate-riseIn rounded-xl border border-white/12 bg-white/10 p-4 shadow-insetLine"
                style={{ animationDelay: `${180 + index * 90}ms` }}
              >
                <p className="font-display text-3xl font-extrabold tracking-[-0.04em] text-safety">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.14em] text-white/62">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-riseIn" style={{ animationDelay: "120ms" }}>
          <div className="relative overflow-hidden rounded-[1.4rem] border border-white/14 bg-glass-panel p-5 shadow-glow backdrop-blur">
            <div className="absolute inset-x-0 top-0 h-1 overflow-hidden bg-white/10">
              <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-cyan to-transparent animate-meterSweep" />
            </div>

            <div className="grid gap-4 md:grid-cols-[1fr_0.72fr]">
              <div className="rounded-[1rem] bg-navy/72 p-5 shadow-deep">
                <div className="flex items-center justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-cobalt text-white">
                    <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="rounded-full bg-safety px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-navy">
                    live dispatch
                  </span>
                </div>
                <h2 className="mt-8 font-display text-4xl font-extrabold tracking-[-0.04em]">
                  Safety diagnostics, tidy repairs, clear estimates.
                </h2>
                <div className="mt-7 space-y-3">
                  {["Panel inspection", "Circuit tracing", "Load check"].map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3"
                      >
                        <span className="text-sm font-extrabold text-white/78">
                          {item}
                        </span>
                        <CheckCircle2 className="h-5 w-5 text-cyan" />
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="grid gap-4">
                {visualMetrics.map((metric) => {
                  const Icon = metric.icon;
                  return (
                    <div
                      key={metric.label}
                      className="rounded-[1rem] border border-white/12 bg-white/10 p-4 shadow-insetLine"
                    >
                      <Icon className="h-5 w-5 text-safety" aria-hidden="true" />
                      <p className="mt-4 font-display text-2xl font-extrabold tracking-[-0.04em]">
                        {metric.value}
                      </p>
                      <p className="mt-1 text-xs font-black uppercase tracking-[0.13em] text-white/58">
                        {metric.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-3 rounded-[1rem] border border-cyan/18 bg-cyan/10 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-cyan">
                  Emergency line
                </p>
                <p className="mt-1 text-lg font-extrabold">{brand.emergencyPhone}</p>
              </div>
              <a
                href="tel:+13125550119"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white px-4 text-sm font-extrabold text-navy transition hover:-translate-y-0.5"
              >
                <PhoneCall className="h-4 w-4" />
                Call now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
