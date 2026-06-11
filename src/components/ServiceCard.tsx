import type { Service } from "../data/siteContent";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article className="group h-full rounded-[1rem] border border-line bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-cobalt/30 hover:shadow-blue">
      <div className="mb-6 flex items-center justify-between gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-cobalt/10 text-cobalt transition duration-300 group-hover:bg-cobalt group-hover:text-white">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="rounded-full bg-mist px-3 py-1 text-[11px] font-black uppercase tracking-[0.15em] text-cobalt">
          {service.tag}
        </span>
      </div>
      <h3 className="font-display text-2xl font-extrabold tracking-[-0.04em] text-navy">
        {service.title}
      </h3>
      <p className="mt-3 text-[15px] leading-7 text-steel/74">
        {service.description}
      </p>
    </article>
  );
}
