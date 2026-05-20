import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative overflow-hidden rounded-3xl p-10 text-center md:p-16 glass-strong glow-ring">
          <div className="pointer-events-none absolute inset-0 opacity-40" style={{ background: "var(--gradient-vivid)", filter: "blur(80px)" }} />
          <div className="relative">
            <Sparkles className="mx-auto h-8 w-8 text-[var(--neon-purple)] animate-glow" />
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
              Go viral. <span className="text-gradient">Starting tonight.</span>
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
              Join 50,000+ creators using ViralGPT to ship 10x more content with zero burnout.
            </p>
            <Link to="/signup" className="mt-8 inline-flex items-center gap-2 rounded-xl btn-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground">
              Start Free <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
