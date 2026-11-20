import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import { categories } from "@/data/categories";

export const metadata: Metadata = buildMetadata({
  title: "About SweetLivingRoom",
  description:
    "SweetLivingRoom publishes measured buying guides for sofas, rugs, lighting, storage and decor. Here is who we are and how we work.",
  path: "/about-us",
});

const principles = [
  ["Measurements before mood boards", "Every guide starts from the figures that decide the buy: overall footprint, seat depth, pile height, lumens, color temperature. We explain what each number means and which ones listings quietly leave out."],
  ["Materials over styling", "We explain what a piece is made of, hardwood versus engineered frames, wool versus polypropylene pile, solid wood versus laminate, so you can judge any model, not only the ones we list."],
  ["Ownership, not delivery day", "Furniture is a multi-year purchase. We weigh cleaning, cushion recovery, shedding, assembly and warranty terms as heavily as how a piece photographs."],
  ["No paid rankings", "Brands cannot buy a position on SweetLivingRoom. Affiliate commissions fund the site and never change the order of our picks."],
];

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About SweetLivingRoom",
  url: `${SITE_URL}/about-us`,
  publisher: { "@type": "Organization", name: "SweetLivingRoom", url: SITE_URL },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <section className="bg-brand text-ink-inverse relative overflow-hidden">
        <div className="absolute inset-0 slr-texture" aria-hidden="true" />
        <Container className="relative py-16 max-w-4xl">
          <p className="slr-label uppercase text-cta mb-3">About us</p>
          <h1 className="text-white mb-4">We plan rooms before we furnish them.</h1>
          <p className="text-lg text-white/70 max-w-2xl">
            SweetLivingRoom is an independent buying guide site for anyone who wants to know how a piece will fit, feel and wear before paying for it: homeowners, renters and first-time furnishers.
          </p>
        </Container>
      </section>
      <Container className="py-14 max-w-4xl">
        <section className="mb-14 space-y-4 text-[17px] text-ink-secondary leading-relaxed">
          <p>
            Most product roundups stop at a feature list. We think that is where the useful part begins. A sofa listing leads with its width, but the number that decides whether the room still works is the overall footprint with the chaise. A lamp box leads with watts, but what you feel in the evening is lumens and color temperature. We write guides that make those differences obvious.
          </p>
          <p>
            SweetLivingRoom is not a store. We do not sell, stock or ship anything. When you click a product link you go to a retailer, usually Amazon, and we may earn a small commission at no extra cost to you. That commission is how the site is funded, and it never decides which piece we recommend.
          </p>
        </section>
        <section className="mb-14">
          <h2 className="mb-6">How we work</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {principles.map(([t, d], i) => (
              <div key={t} className="rounded-card border border-border bg-surface p-5">
                <span className="slr-label text-cta">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-lg mt-1 mb-2">{t}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-14 rounded-card border border-border bg-surface p-6">
          <h2 className="text-2xl mb-3">What we do not claim</h2>
          <p className="text-ink-secondary leading-relaxed">
            Our guides are edited by <Link prefetch={false} href="/author/elena-hart" className="font-semibold text-cta">Elena Hart</Link>, our Lead Home Editor. We evaluate pieces from manufacturer specifications, technical documentation, owner feedback patterns and comparison against competing models. We do not claim to have hands-on tested every product we write about, and our Room Score is an editorial assessment, not a lab measurement.
          </p>
        </section>
        <section>
          <h2 className="text-2xl mb-4">What we cover</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <Link prefetch={false} key={c.slug} href={`/categories/${c.slug}`} className="px-4 py-2 rounded-btn border border-border bg-surface hover:border-cta hover:text-cta text-sm font-semibold">
                {c.name}
              </Link>
            ))}
            <Link prefetch={false} href="/how-we-review" className="px-4 py-2 rounded-btn bg-cta text-white text-sm font-semibold hover:bg-cta-dark">How we rate pieces →</Link>
          </div>
        </section>
      </Container>
    </>
  );
}
