import { SectionHeader } from "./Features";
import { TrendingUp, Flame, BarChart3, Sparkles } from "lucide-react";

const recent = [
  { type: "Hook", text: "Nobody is talking about this AI hack…", score: 96 },
  { type: "Title", text: "I Made $10K With AI in 7 Days", score: 92 },
  { type: "Script", text: "Faceless channel: morning routine arc", score: 88 },
  { type: "Thumb", text: "DON'T DO THIS", score: 84 },
];

const trending = [
  "POV: you discovered…",
  "I tried this for 30 days",
  "Nobody talks about…",
  "Wait until the end",
  "Here's what they don't tell you",
];

export function DashboardPreview() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Studio"
          title={<>Your viral <span className="text-gradient">command center</span></>}
          subtitle="Track every generation, viral score, and trending hook in one futuristic dashboard."
        />

        <div className="relative mx-auto mt-14 max-w-6xl">
          <div className="absolute -inset-px rounded-3xl opacity-50 blur-2xl" style={{ background: "var(--gradient-vivid)" }} />
          <div className="relative rounded-3xl glass-strong p-3 md:p-5 glow-ring">
            <div className="grid gap-3 lg:grid-cols-12">
              {/* Stats */}
              <div className="grid gap-3 sm:grid-cols-3 lg:col-span-12 lg:grid-cols-4">
                <StatCard icon={Sparkles} label="Generations" value="1,284" trend="+24%" />
                <StatCard icon={Flame} label="Avg Viral Score" value="91.2" trend="+7.4" />
                <StatCard icon={TrendingUp} label="Top Hook CTR" value="14.8%" trend="+2.1%" />
                <StatCard icon={BarChart3} label="Saved Drafts" value="62" trend="+12" />
              </div>

              {/* Recent */}
              <div className="rounded-2xl bg-black/30 p-5 lg:col-span-7">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold">Recent generations</h4>
                  <span className="text-xs text-muted-foreground">last 24h</span>
                </div>
                <div className="mt-4 space-y-2">
                  {recent.map((r, i) => (
                    <div key={i} className="flex items-center justify-between gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3">
                      <div className="flex items-center gap-3">
                        <span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">{r.type}</span>
                        <span className="text-sm truncate">{r.text}</span>
                      </div>
                      <ScorePill score={r.score} />
                    </div>
                  ))}
                </div>

                {/* fake chart */}
                <div className="mt-5">
                  <p className="text-xs text-muted-foreground">Content analytics · views (7d)</p>
                  <div className="mt-2 flex h-28 items-end gap-1.5">
                    {[30, 55, 40, 70, 60, 85, 100].map((h, i) => (
                      <div key={i} className="flex-1 rounded-md bg-gradient-to-t from-[var(--neon-blue)] to-[var(--neon-purple)] opacity-80"
                           style={{ height: `${h}%`, animation: `fade-up .6s ease-out ${i * 0.05}s both` }} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Trending */}
              <div className="rounded-2xl bg-black/30 p-5 lg:col-span-5">
                <div className="flex items-center gap-2">
                  <Flame className="h-4 w-4 text-[var(--neon-pink)]" />
                  <h4 className="text-sm font-semibold">Trending hooks today</h4>
                </div>
                <div className="mt-4 space-y-2">
                  {trending.map((t, i) => (
                    <div key={t} className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5 text-sm">
                      <span>{t}</span>
                      <span className="text-xs text-emerald-400">▲ {(20 - i * 3)}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon: Icon, label, value, trend }: { icon: any; label: string; value: string; trend: string }) {
  return (
    <div className="rounded-2xl bg-black/30 p-4">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{label}</span>
        <Icon className="h-4 w-4 text-[var(--neon-purple)]" />
      </div>
      <p className="mt-2 font-display text-2xl font-bold">{value}</p>
      <p className="mt-1 text-xs text-emerald-400">{trend}</p>
    </div>
  );
}

function ScorePill({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 w-16 overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-blue)]" style={{ width: `${score}%` }} />
      </div>
      <span className="text-xs font-semibold">{score}</span>
    </div>
  );
}
