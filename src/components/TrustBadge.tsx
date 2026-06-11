import type { TrustPoint } from "../data/siteContent";

type TrustBadgeProps = {
  item: TrustPoint;
};

export function TrustBadge({ item }: TrustBadgeProps) {
  const Icon = item.icon;

  return (
    <article className="rounded-[1rem] border border-white/12 bg-white/[0.08] p-5 shadow-insetLine transition duration-300 hover:-translate-y-1 hover:bg-white/[0.12]">
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-safety text-navy">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-display text-xl font-extrabold tracking-[-0.04em] text-white">
        {item.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-white/66">{item.description}</p>
    </article>
  );
}
