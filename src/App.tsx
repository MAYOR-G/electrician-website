import { CTA } from "./components/CTA";
import { EmergencyBanner } from "./components/EmergencyBanner";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { PricingCard } from "./components/PricingCard";
import { ProcessStep } from "./components/ProcessStep";
import { Reveal } from "./components/Reveal";
import { SectionHeader } from "./components/SectionHeader";
import { ServiceCard } from "./components/ServiceCard";
import { TestimonialCard } from "./components/TestimonialCard";
import { TrustBadge } from "./components/TrustBadge";
import {
  brand,
  credentialBadges,
  pricingPlans,
  processSteps,
  projectSignals,
  serviceAreas,
  services,
  testimonials,
  trustPoints,
} from "./data/siteContent";

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-cloud text-ink">
      <Navbar />
      <main>
        <Hero />
        <EmergencyBanner />

        <section className="bg-white px-5 py-8 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-2 xl:grid-cols-4">
            {credentialBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <Reveal key={badge.label} delay={index * 60}>
                  <article className="group flex h-full items-center gap-4 rounded-[1rem] border border-line bg-cloud p-4 shadow-insetLine transition duration-300 hover:-translate-y-1 hover:border-cobalt/30 hover:bg-mist">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-cobalt/10 text-cobalt transition duration-300 group-hover:bg-cobalt group-hover:text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-display text-lg font-extrabold tracking-[-0.04em] text-navy">
                        {badge.label}
                      </p>
                      <p className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-steel/60">
                        {badge.value}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="services" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
                <SectionHeader
                  eyebrow="Electrical services"
                  title="Specialist service routes for urgent faults and planned upgrades."
                  description="Residential, commercial, emergency, inspection, lighting, and smart wiring services are presented with the clarity customers need before they book."
                />
                <p className="max-w-xl text-base leading-8 text-steel/72 lg:justify-self-end">
                  Each service path is written for quick decision-making:
                  what is covered, who it suits, and how VoltEdge keeps the
                  work safe, tidy, and easy to approve.
                </p>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => (
                <Reveal key={service.title} delay={index * 70}>
                  <ServiceCard service={service} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="bg-circuit-hero px-5 py-20 text-white lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <SectionHeader
                eyebrow="Why choose us"
                title="The reassurance customers look for before letting anyone touch the wiring."
                description={`${brand.name} is built around qualified technicians, dispatch clarity, safety documentation, and estimates customers can understand before work begins.`}
                tone="light"
              />
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {trustPoints.map((item, index) => (
                <Reveal key={item.title} delay={index * 80}>
                  <TrustBadge item={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeader
                eyebrow="Project ready"
                title="Built for homes, managed properties, and upgrade-led electrical work."
                description="The template gives every buyer type a clear reason to call, from a single faulty circuit to ongoing commercial maintenance."
              />
            </Reveal>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {projectSignals.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={index * 80}>
                    <article className="group relative h-full overflow-hidden rounded-[1.1rem] border border-line bg-cloud p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-cobalt/30 hover:shadow-blue">
                      <div className="absolute right-0 top-0 h-28 w-28 translate-x-8 -translate-y-8 rounded-full bg-cyan/14 transition duration-500 group-hover:scale-125" />
                      <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-navy text-safety">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="relative mt-6 font-display text-2xl font-extrabold tracking-[-0.04em] text-navy">
                        {item.title}
                      </h3>
                      <p className="relative mt-3 text-[15px] leading-7 text-steel/74">
                        {item.description}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="process" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeader
                eyebrow="How it works"
                title="A clean visit flow that makes the next step obvious."
                description="Customers can see exactly how the job moves from request to inspection, quote approval, repair or installation, and final safety check."
                align="center"
              />
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {processSteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 70}>
                  <ProcessStep step={step} index={index} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-mist px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <Reveal>
              <SectionHeader
                eyebrow="Service areas"
                title="Local coverage presented with the confidence of a serious service company."
                description="Cities can be replaced with real branch coverage, emergency response zones, or location-specific landing pages."
              />
            </Reveal>
            <div className="rounded-[1.35rem] border border-line bg-white p-4 shadow-card sm:p-5">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {serviceAreas.map((area, index) => (
                  <Reveal key={area} delay={index * 45}>
                    <div className="rounded-xl border border-line bg-cloud p-4 shadow-insetLine transition duration-300 hover:-translate-y-1 hover:border-cobalt/30 hover:bg-white">
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-cobalt">
                        Service area
                      </p>
                      <p className="mt-2 font-display text-2xl font-extrabold tracking-[-0.05em] text-navy">
                        {area}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <div className="mt-4 rounded-xl bg-circuit-hero p-5 text-white">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-safety">
                  Coverage note
                </p>
                <p className="mt-2 text-sm font-semibold leading-7 text-white/72">
                  Service areas can be adjusted for real branch coverage,
                  emergency radius, maintenance zones, and local landing pages.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeader
                eyebrow="Pricing anchors"
                title="Starting prices that reduce hesitation without over-promising."
                description="Electrical work depends on site conditions, but clear anchor pricing helps customers understand the likely first step before they call."
                align="center"
              />
            </Reveal>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <Reveal key={plan.name} delay={index * 90}>
                  <PricingCard plan={plan} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-white px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeader
                eyebrow="Customer reviews"
                title="Reviews framed around response, safety, clarity, and clean handoff."
                description="The testimonials support the buying decision with proof that the team communicates well and leaves the property ready to use."
                align="center"
              />
            </Reveal>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Reveal key={testimonial.name} delay={index * 90}>
                  <TestimonialCard testimonial={testimonial} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Reveal>
          <CTA />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}

export default App;
