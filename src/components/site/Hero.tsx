import { ArrowRight, Play, Sparkles, Wand2, Type, Image as ImageIcon, Zap } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
           style={{ background: "var(--gradient-glow)" }} />
      <div className="pointer-events-none absolute top-40 -left-32 h-72 w-72 rounded-full bg-[oklch(0.62_0.22_250/0.25)] blur-3xl animate-blob" />
      <div className="pointer-events-none absolute top-20 -right-32 h-72 w-72 rounded-full bg-[oklch(0.72_0.25_340/0.2)] blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--neon-purple)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--neon-purple)]" />
            </span>
            <span className="text-muted-foreground">New · GPT-5 powered virality engine</span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Generate Viral Shorts<br />
            <span className="text-gradient">Scripts, Hooks & Titles</span><br />
            With AI
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            AI-powered tools for YouTubers, Shorts creators, and faceless channels.
            Go from idea to viral in under 30 seconds.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/signup" className="group inline-flex items-center gap-2 rounded-xl btn-gradient px-6 py-3 text-sm font-semibold text-primary-foreground">
              Start Free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <button className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-medium hover:bg-white/5">
              <Play className="h-4 w-4 fill-current" />
              Watch Demo
            </button>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">Free forever plan · No credit card required</p>
        </div>

        <HeroPreview />
      </div>
    </section>
  );
}

function HeroPreview() {
  const tools = [
    { icon: Wand2, label: "Hook Generator", value: "Nobody talks about this…" },
    { icon: Type, label: "Script Generator", value: "60s viral story arc" },
    { icon: Sparkles, label: "Viral Titles", value: "I tried this for 30 days" },
    { icon: ImageIcon, label: "Thumbnail Text", value: "SHOCKING RESULT" },
  ];

  return (
    <div className="relative mx-auto mt-16 max-w-5xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
      <div className="absolute -inset-px rounded-3xl opacity-60 blur-2xl"
           style={{ background: "var(--gradient-vivid)" }} />
      <div className="relative rounded-3xl glass-strong p-3 md:p-5 glow-ring">
        <div className="flex items-center gap-1.5 px-2 pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          <span className="ml-3 text-xs text-muted-foreground">viralgpt.app/studio</span>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          <div className="md:col-span-2 rounded-2xl bg-black/30 p-5">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Zap className="h-3.5 w-3.5 text-[var(--neon-purple)]" />
              Topic
            </div>
            <p className="mt-2 text-sm">How AI is changing YouTube in 2026</p>
            <div className="mt-4 space-y-2">
              {[
                "🔥 Why YouTubers will be replaced in 12 months…",
                "⚡ The AI hack getting 10M views overnight",
                "💀 What no one is telling you about AI content",
              ].map((line, i) => (
                <div key={i}
                     className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5 text-sm transition hover:bg-white/[0.05]"
                     style={{ animation: `fade-up 0.6s ease-out ${0.4 + i * 0.15}s both` }}>
                  <span>{line}</span>
                  <span className="rounded-md bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-blue)] px-1.5 py-0.5 text-[10px] font-semibold text-white">
                    {98 - i * 3}
                  </span>
                </div>
              ))}
            </div>
            <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg btn-gradient px-4 py-2.5 text-sm font-semibold text-primary-foreground">
              <Sparkles className="h-4 w-4" /> Generate more
            </button>
          </div>

          <div className="space-y-2">
            {tools.map((t, i) => (
              <div key={t.label}
                   className="rounded-2xl glass p-4 transition hover:scale-[1.02]"
                   style={{ animation: `fade-up 0.6s ease-out ${0.3 + i * 0.1}s both` }}>
                <div className="flex items-center gap-2">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[var(--neon-purple)] to-[var(--neon-blue)]">
                    <t.icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-xs font-medium">{t.label}</span>
                </div>
                <p className="mt-2 truncate text-xs text-muted-foreground">{t.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
