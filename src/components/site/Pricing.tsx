import { SectionHeader } from "./Features";
import { Check } from "lucide-react";
import { Link } from "@tanstack/react-router";

const plans = [
  {
    name: "Free", price: "$0", period: "forever",
    desc: "Try it. Forever.",
    features: ["15 generations / day", "Hook + Title generator", "Basic viral score", "Community support"],
    cta: "Start Free",
  },
  {
    name: "Pro", price: "$19", period: "/ month", featured: true,
    desc: "For creators posting daily.",
    features: ["Unlimited generations", "All 6 AI tools", "Advanced viral score", "Trending hooks feed", "Priority support"],
    cta: "Go Pro",
  },
  {
    name: "Creator Studio", price: "$49", period: "/ month",
    desc: "For teams & faceless empires.",
    features: ["Everything in Pro", "5 brand workspaces", "API access", "Bulk generation", "Custom AI fine-tune"],
    cta: "Scale up",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Pricing"
          title={<>Simple. <span className="text-gradient">Creator-friendly.</span></>}
          subtitle="Start free. Upgrade when you start going viral."
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
          {plans.map((p, i) => (
            <div key={p.name}
                 className={`relative rounded-3xl p-7 transition hover:-translate-y-1 ${p.featured ? "glass-strong glow-ring" : "glass"}`}
                 style={{ animation: `fade-up .6s ease-out ${i * 0.08}s both` }}>
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full btn-gradient px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground">
                  Most popular
                </div>
              )}
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">{p.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold">{p.price}</span>
                <span className="text-sm text-muted-foreground">{p.period}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>

              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--neon-purple)]" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link to="/signup" className={`mt-7 block rounded-xl px-4 py-3 text-center text-sm font-semibold ${
                p.featured ? "btn-gradient text-primary-foreground" : "glass hover:bg-white/5"
              }`}>
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
