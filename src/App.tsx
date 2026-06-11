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
  pricingPlans,
  processSteps,
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

        <section id="services" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
                <SectionHeader
                  eyebrow="Electrical services"
                  title="Clear service paths for urgent fixes and planned upgrades."
                  description="The structure helps everyday customers quickly understand what you do, while still feeling professional enough for commercial electrical buyers."
                />
                <p className="max-w-xl text-base leading-8 text-steel/72 lg:justify-self-end">
                  Replace these service cards with a contractor's real
                  offerings, response times, certifications, and project
                  specialties.
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
                title="Trust signals where electrical customers need them most."
                description={`${brand.name} is positioned for reliable, safety-first service with clear communication and documented workmanship.`}
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

        <section id="process" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeader
                eyebrow="How it works"
                title="A simple visit flow that reduces uncertainty before work begins."
                description="Good electrical websites need to make the next step obvious: book the visit, inspect the issue, approve the quote, complete the work, and test for safety."
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

        <section className="bg-white px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <Reveal>
              <SectionHeader
                eyebrow="Service areas"
                title="Built for local trust across US and UK service regions."
                description="Use these chips for city pages, coverage areas, route zones, and local SEO pages when customizing the template."
              />
            </Reveal>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {serviceAreas.map((area, index) => (
                <Reveal key={area} delay={index * 45}>
                  <div className="rounded-xl border border-line bg-cloud p-4 shadow-insetLine transition duration-300 hover:-translate-y-1 hover:border-cobalt/30 hover:bg-mist">
                    <p className="text-sm font-black uppercase tracking-[0.14em] text-cobalt">
                      Service area
                    </p>
                    <p className="mt-2 font-display text-2xl font-extrabold tracking-[-0.05em] text-navy">
                      {area}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeader
                eyebrow="Pricing anchors"
                title="Clear starting prices without over-promising final job costs."
                description="Electrical work varies by site conditions, but pricing cards give customers a realistic first step and reduce hesitation."
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
                title="Proof that the work feels organized, safe, and clear."
                description="Reviews focus on the trust factors electrical customers actually care about: response, explanation, tidiness, and safety."
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
