import { SectionHeader } from "./Features";
import { Star } from "lucide-react";

const items = [
  { name: "Maya Chen", handle: "@mayashorts", role: "1.2M YouTube Shorts", quote: "This tool doubled my Shorts views in 2 weeks. The hook generator is unreal.", grad: "from-pink-400 to-purple-500" },
  { name: "Jordan Reyes", handle: "@thejordanr", role: "Faceless Channel · 480K", quote: "Best AI tool for YouTube creators. I went from 1 video/week to 1/day.", grad: "from-blue-400 to-cyan-400" },
  { name: "Aisha Patel", handle: "@aishacreates", role: "TikTok Creator · 2.1M", quote: "The thumbnail text generator alone is worth the price. CTR up 3x.", grad: "from-purple-400 to-indigo-500" },
  { name: "Liam Park", handle: "@liamcuts", role: "Reels Editor", quote: "ViralGPT became my creative co-pilot. I never stare at a blank page anymore.", grad: "from-orange-400 to-pink-500" },
  { name: "Sofia Bianchi", handle: "@sofiavlogs", role: "Vlogger · 320K", quote: "Finally an AI that understands creator language. Outputs feel human.", grad: "from-emerald-400 to-teal-500" },
  { name: "Marcus Hall", handle: "@marcusai", role: "Faceless AI Channel", quote: "I run 4 channels using only ViralGPT. Pure leverage.", grad: "from-violet-400 to-fuchsia-500" },
];

export function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Loved by creators"
          title={<>Trusted by <span className="text-gradient">50,000+ creators</span></>}
          subtitle="From faceless niches to top 1% YouTubers."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <div key={t.name} className="rounded-2xl glass p-6 transition hover:-translate-y-1"
                 style={{ animation: `fade-up .6s ease-out ${i * 0.06}s both` }}>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-[var(--neon-purple)] text-[var(--neon-purple)]" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed">"{t.quote}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className={`grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br ${t.grad} text-sm font-semibold text-white`}>
                  {t.name.split(" ").map(n=>n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold leading-tight">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.handle} · {t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
