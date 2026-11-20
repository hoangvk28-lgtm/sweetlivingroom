import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { buildMetadata } from "@/lib/seo";
import { RATING_CRITERIA } from "@/lib/brand";

export const metadata: Metadata = buildMetadata({
  title: "How We Rate Living Room Pieces",
  description:
    "How SweetLivingRoom evaluates living room furniture and decor: the Room Score weighting, the specs we verify, and how we handle affiliate links and corrections.",
  path: "/how-we-review",
});

const detail: Record<string, string> = {
  "Room Fit and Footprint": "Overall dimensions measured against real floor plans, not just the headline width: the chaise leg on a sectional, the border a rug leaves, the depth a console needs away from the wall, and the walkway each piece leaves behind.",
  "Comfort and Everyday Use": "Seat depth and height, cushion fill and recovery, how a rug feels underfoot and whether a lamp's output suits the task. Judged for daily use, not a showroom minute.",
  "Materials and Build": "Frame construction and suspension, upholstery weave and cleanability, rug fiber and pile, wood versus laminate, and the warranty a maker is willing to put behind it.",
  "Style Versatility": "How easily a piece sits alongside furniture someone already owns, including finish, leg height, color temperature and how dated the shape is likely to look.",
  "Assembly and Upkeep": "Setup effort and tools, whether the piece can be carried in parts, and the ongoing work: washing covers, vacuuming pile, tightening legs, re-fluffing cushions.",
  "Value for Money": "What a piece delivers relative to the other picks in the same comparison, across its expected service life, not just on delivery day.",
};

export default function HowWeReviewPage() {
  return (
    <>
      <section className="bg-brand text-ink-inverse relative overflow-hidden">
        <div className="absolute inset-0 slr-texture" aria-hidden="true" />
        <Container className="relative py-16 max-w-4xl">
          <p className="slr-label uppercase text-cta mb-3">Methodology</p>
          <h1 className="text-white mb-4">How we rate the pieces we recommend</h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Every guide follows the same documented process. Here is what we look at, how much each factor counts, and what our Room Score does and does not mean.
          </p>
        </Container>
      </section>
      <Container className="py-14 max-w-4xl">
        <h2 className="mb-6">The Room Score</h2>
        <div className="space-y-4 mb-14">
          {RATING_CRITERIA.map((c) => (
            <div key={c.label} className="rounded-card border border-border bg-surface p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg">{c.label}</h3>
                <span className="slr-label text-cta text-sm">{c.weight}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-bg mb-3"><div className="h-1.5 rounded-full bg-cta" style={{ width: `${c.weight * 3.33}%` }} /></div>
              <p className="text-sm text-ink-secondary leading-relaxed">{detail[c.label]}</p>
            </div>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-card border border-border bg-surface p-5">
            <h3 className="text-lg mb-2">Our sources</h3>
            <p className="text-sm text-ink-secondary leading-relaxed">Manufacturer dimension sheets and care labels, published certifications (CertiPUR-US, OEKO-TEX, UL/ETL for lighting), owner feedback patterns and side-by-side comparison of competing models.</p>
          </div>
          <div className="rounded-card border border-border bg-surface p-5">
            <h3 className="text-lg mb-2">What it is not</h3>
            <p className="text-sm text-ink-secondary leading-relaxed">The Room Score is an editorial assessment. We do not claim lab measurements or hands-on testing of every model, and we never publish fake star ratings or prices.</p>
          </div>
          <div className="rounded-card border border-border bg-surface p-5">
            <h3 className="text-lg mb-2">Affiliate independence</h3>
            <p className="text-sm text-ink-secondary leading-relaxed">We earn commissions through Amazon links. Rankings are never sold, and commission rates play no part in which piece we recommend.</p>
          </div>
          <div className="rounded-card border border-border bg-surface p-5">
            <h3 className="text-lg mb-2">Corrections</h3>
            <p className="text-sm text-ink-secondary leading-relaxed">Specs change between model years. If you spot an error, tell us through the contact page and we will verify and update the guide.</p>
          </div>
        </div>
      </Container>
    </>
  );
}
