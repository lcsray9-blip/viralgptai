import { Wand2, Type, FileText, Image, MessageCircle, Hash } from "lucide-react";

const features = [
  { icon: Wand2, title: "Viral Hook Generator", desc: "Scroll-stopping opening lines tuned to YouTube, Shorts, Reels, and TikTok." },
  { icon: Type, title: "YouTube Title Generator", desc: "Clickable, high-CTR titles backed by viral pattern data." },
  { icon: FileText, title: "Shorts Script Generator", desc: "60-second story arcs with hooks, beats, and CTAs in one click." },
  { icon: Image, title: "Thumbnail Text Generator", desc: "3–5 word punches engineered for maximum stop-rate." },
  { icon: MessageCircle, title: "Caption Generator", desc: "Platform-native captions that drive saves, shares, and comments." },
  { icon: Hash, title: "Hashtag Generator", desc: "Trending + niche hashtag mixes optimized per platform." },
];

export function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Features"
          title={<>Everything you need to <span className="text-gradient">go viral</span></>}
          subtitle="One platform. Every viral asset. Built for creators who post daily."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition duration-300 hover:-translate-y-1"
              style={{ animation: `fade-up .6s ease-out ${i * 0.08}s both` }}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--neon-purple)]/10 opacity-0 blur-3xl transition group-hover:opacity-100" />
              <div className="inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[var(--neon-purple)] to-[var(--neon-blue)] shadow-[0_0_30px_-5px_var(--neon-purple)]">
                <f.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="inline-block rounded-full glass px-3 py-1 text-[11px] uppercase tracking-widest text-muted-foreground">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
