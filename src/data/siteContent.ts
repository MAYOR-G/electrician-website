import {
  BadgeCheck,
  BatteryCharging,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Home,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  PlugZap,
  ShieldCheck,
  Siren,
  Smartphone,
  Sparkles,
  Star,
  TimerReset,
  Wrench,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  tag: string;
};

export type TrustPoint = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProcessStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  initials: string;
  location: string;
};

export const brand = {
  name: "VoltEdge Electrical",
  tagline: "Licensed electrical work, fast response, and safety-first service for homes and businesses.",
  phone: "+1 312 555 0167",
  emergencyPhone: "+1 312 555 0119",
  email: "service@voltedgeelectrical.com",
  address: "128 West Lake Street, Chicago, IL 60606",
  hours: "Mon-Sat 7:00 AM-7:00 PM, emergency support available 24/7",
  serviceAreas:
    "Chicago, Brooklyn, New York, Los Angeles, London, Manchester, and Birmingham.",
};

export const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Why us", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
];

export const heroStats = [
  { value: "24/7", label: "emergency support" },
  { value: "4.9", label: "average rating" },
  { value: "10k+", label: "jobs completed" },
];

export const emergencyHighlights = [
  "Fault finding and urgent repairs",
  "Same-day inspection windows",
  "Licensed, insured technicians",
  "Clear estimates before work starts",
];

export const services: Service[] = [
  {
    title: "Residential Electrical",
    description:
      "Repairs, outlet upgrades, breaker troubleshooting, appliance circuits, and code-safe home improvements.",
    icon: Home,
    tag: "Homes",
  },
  {
    title: "Commercial Electrical",
    description:
      "Reliable electrical support for offices, retail spaces, hospitality venues, and light commercial properties.",
    icon: Building2,
    tag: "Business",
  },
  {
    title: "Emergency Repairs",
    description:
      "Fast response for outages, tripped breakers, burning smells, faulty panels, and unsafe wiring concerns.",
    icon: Siren,
    tag: "24/7",
  },
  {
    title: "Lighting Installation",
    description:
      "Interior lighting, exterior security lighting, recessed fixtures, dimmers, and energy-efficient upgrades.",
    icon: Lightbulb,
    tag: "Lighting",
  },
  {
    title: "Electrical Inspections",
    description:
      "Safety checks, buyer inspections, landlord certificates, panel reviews, and repair recommendations.",
    icon: ClipboardCheck,
    tag: "Safety",
  },
  {
    title: "Smart Home Wiring",
    description:
      "Smart switches, EV-ready circuits, low-voltage planning, network points, and connected-home upgrades.",
    icon: Smartphone,
    tag: "Smart",
  },
];

export const trustPoints: TrustPoint[] = [
  {
    title: "Licensed technicians",
    description:
      "Every visit is handled by trained electrical professionals who work to modern safety standards.",
    icon: BadgeCheck,
  },
  {
    title: "Fast response windows",
    description:
      "Emergency jobs are triaged quickly, with clear arrival windows and updates from dispatch.",
    icon: TimerReset,
  },
  {
    title: "Transparent pricing",
    description:
      "You get a clear estimate before work begins, with options explained in plain language.",
    icon: CheckCircle2,
  },
  {
    title: "Warranty-backed work",
    description:
      "Repairs and installations are documented, tested, and backed by service warranty options.",
    icon: ShieldCheck,
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Request a visit",
    description:
      "Call, email, or request an appointment with your issue, preferred time, and property type.",
    icon: CalendarCheck,
  },
  {
    title: "On-site inspection",
    description:
      "A technician checks the circuit, panel, fixture, or wiring and explains the likely cause.",
    icon: ClipboardCheck,
  },
  {
    title: "Clear quote",
    description:
      "You receive a practical repair or installation estimate before approving the work.",
    icon: Sparkles,
  },
  {
    title: "Repair or install",
    description:
      "The approved electrical work is completed with tidy workmanship and minimal disruption.",
    icon: Wrench,
  },
  {
    title: "Final safety check",
    description:
      "We test the work, clean the area, and confirm everything is operating safely.",
    icon: ShieldCheck,
  },
];

export const serviceAreas = [
  "Chicago",
  "Brooklyn",
  "New York",
  "Los Angeles",
  "London",
  "Manchester",
  "Birmingham",
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Emergency Callout",
    price: "$95 callout",
    description:
      "For urgent electrical faults, unsafe wiring concerns, tripped breakers, and outage troubleshooting.",
    features: [
      "Priority dispatch",
      "Fault diagnosis",
      "Safety recommendations",
      "Repair estimate before work",
    ],
  },
  {
    name: "Safety Inspection",
    price: "$180 inspection",
    description:
      "A practical electrical health check for homes, apartments, rentals, and small business spaces.",
    features: [
      "Panel and circuit review",
      "Outlet and fixture checks",
      "Written findings summary",
      "Upgrade recommendations",
    ],
    highlighted: true,
  },
  {
    name: "Panel Upgrade Estimate",
    price: "$450 estimate",
    description:
      "Planning support for panel replacements, increased capacity, EV circuits, or major rewiring.",
    features: [
      "Load assessment",
      "Upgrade pathway",
      "Permit guidance notes",
      "Project estimate range",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "VoltEdge explained the problem clearly, fixed the breaker issue the same day, and left everything tidy.",
    name: "Rachel Adams",
    title: "Homeowner",
    initials: "RA",
    location: "Chicago, IL",
  },
  {
    quote:
      "We use them for our retail locations because they communicate well and keep safety documentation organized.",
    name: "Marcus Reed",
    title: "Operations Manager",
    initials: "MR",
    location: "Brooklyn, NY",
  },
  {
    quote:
      "The inspection was thorough without being confusing. We knew exactly what needed attention before buying.",
    name: "Eleanor Walsh",
    title: "Property buyer",
    initials: "EW",
    location: "London, UK",
  },
];

export const contactCards = [
  { label: brand.emergencyPhone, title: "Emergency line", icon: Siren },
  { label: brand.phone, title: "Main office", icon: Phone },
  { label: brand.email, title: "Email", icon: Mail },
  { label: brand.address, title: "Office", icon: MapPin },
  { label: brand.hours, title: "Hours", icon: Clock3 },
];

export const footerLinks = [
  { label: "Residential electrical", href: "#services" },
  { label: "Emergency repairs", href: "#services" },
  { label: "Pricing estimates", href: "#pricing" },
  { label: "Book inspection", href: "#contact" },
];

export const visualMetrics = [
  { label: "Response window", value: "< 60 min", icon: Zap },
  { label: "Safety tested", value: "100%", icon: ShieldCheck },
  { label: "EV ready circuits", value: "Available", icon: BatteryCharging },
  { label: "Smart upgrades", value: "Planned", icon: PlugZap },
];
