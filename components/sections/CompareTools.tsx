import Link from "next/link";
import { categories } from "@/data/categories";

const iconMap: Record<string, React.ReactNode> = {
  "sofas-seating": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3M3 11a2 2 0 0 1 2 2v4h14v-4a2 2 0 1 1 2-2M6 17v2m12-2v2" />
    </svg>
  ),
  "rugs-flooring": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <rect x="3" y="6" width="18" height="12" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9h12M6 15h12" />
    </svg>
  ),
  "lighting": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 10 12 3l4 7H8ZM12 10v9M9 21h6" />
    </svg>
  ),
  "storage-media": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <rect x="3" y="5" width="18" height="10" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 19h8M12 15v4" />
    </svg>
  ),
  "decor-styling": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <rect x="4" y="4" width="16" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m7 16 3.5-4 2.5 3 2-2.5L17 16" />
    </svg>
  ),
};

export function CompareTools() {
  return (
    <section className="py-14 border-t border-border">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand">Compare</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-ink mt-2 tracking-tight">
            Side-by-Side Comparisons
          </h2>
          <p className="text-ink-secondary mt-2 leading-relaxed max-w-2xl">
            Every comparison uses the same Room Score criteria: room fit, comfort, materials, style and value, so results stay comparable across categories.
          </p>
        </div>
        <Link prefetch={false}
          href="/compare"
          className="text-sm font-semibold text-brand hover:text-brand-dark transition-colors shrink-0 flex items-center gap-1"
        >
          Full comparison page
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((cat) => (
          <div
            key={cat.slug}
            className="relative flex flex-col gap-4 p-5 rounded-card border bg-bg border-border opacity-70"
          >
            {/* Icon */}
            <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-border text-ink-muted">
              {iconMap[cat.slug]}
            </div>

            {/* Tag */}
            <span className="self-start text-xs font-semibold px-2.5 py-0.5 rounded-badge bg-bg text-ink-muted border border-border">
              Coming soon
            </span>

            <div className="flex-1">
              <h3 className="font-bold text-ink text-sm mb-2">Compare {cat.name}</h3>
              <p className="text-xs text-ink-secondary leading-relaxed">{cat.shortDescription}</p>
            </div>

            <span className="mt-auto text-sm text-ink-muted font-medium">Comparisons in research</span>
          </div>
        ))}
      </div>
    </section>
  );
}
