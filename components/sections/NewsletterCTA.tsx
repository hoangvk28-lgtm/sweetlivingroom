"use client";

import type { HomepageSettings } from "@/lib/site-types";

type NewsletterConfig = HomepageSettings["newsletter"];

interface Props {
  config?: NewsletterConfig;
}

const DEFAULT: NewsletterConfig = {
  enabled: true,
  eyebrow: "Stay Updated",
  title: "Get new living room buying guides.",
  description:
    "New guides, updated picks, and buying tips for compact living - no spam, no sponsored content, no fluff.",
  inputPlaceholder: "you@example.com",
  buttonText: "Notify me",
  disclaimer: "No account required. Unsubscribe anytime. We'll never share your email.",
};

export function NewsletterCTA({ config }: Props) {
  const c = config ?? DEFAULT;
  if (!c.enabled) return null;

  return (
    <section
      className="py-16"
      style={{ background: "linear-gradient(135deg, #2F4739 0%, #22342A 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D2A24C" }}>
            {c.eyebrow}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-4 tracking-tight">
            {c.title}
          </h3>
          <p className="text-white/80 leading-relaxed mb-8">{c.description}</p>

          <form
            className="flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Newsletter signup"
          >
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder={c.inputPlaceholder}
              autoComplete="email"
              className="flex-1 min-w-0 px-4 py-3 rounded-btn bg-white/10 border border-white/15 text-white placeholder:text-white/35 text-sm focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-colors"
              style={{ ["--tw-ring-color" as string]: "#7C9A80" }}
            />
            <button
              type="submit"
              className="px-6 py-3 font-semibold rounded-btn transition-colors text-sm shrink-0"
              style={{ background: "#7C9A80", color: "#fff" }}
            >
              {c.buttonText}
            </button>
          </form>

          {c.disclaimer && (
            <p className="text-xs text-white/50 mt-4">{c.disclaimer}</p>
          )}
        </div>
      </div>
    </section>
  );
}
