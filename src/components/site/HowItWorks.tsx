import { SectionHeader } from "./Features";
import { Lightbulb, Sparkles, Copy } from "lucide-react";

const steps = [
  { icon: Lightbulb, title: "Enter your topic", desc: "Drop an idea, niche, or rough thought. Even one word works.", num: "01" },
  { icon: Sparkles, title: "AI generates viral content", desc: "Hooks, scripts, titles, and thumbnails optimized for your platform.", num: "02" },
  { icon: Copy, title: "Copy and use instantly", desc: "Export, paste, and post. Ship 10x more content with zero burnout.", num: "03" },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="How it works"
          title={<>From idea to viral in <span className="text-gradient">3 steps</span></>}
          subtitle="No prompts to learn. No setup. Just results."
        />

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[var(--neon-purple)]/30 to-transparent md:block" />

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <div
                key={s.num}
                className="group relative rounded-2xl glass p-6 transition hover:-translate-y-1"
                style={{ animation: `fade-up .6s ease-out ${i * 0.1}s both` }}
              >
                <div className="flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[var(--neon-purple)] to-[var(--neon-blue)] shadow-[0_0_30px_-8px_var(--neon-purple)]">
                    <s.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-display text-4xl font-bold text-gradient opacity-70">{s.num}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
