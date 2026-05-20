import { useState } from "react";
import { SectionHeader } from "./Features";
import { Sparkles, Copy, Check, Loader2 } from "lucide-react";

type Tool = "hooks" | "script" | "titles" | "thumbnail";

const presets: Record<Tool, { label: string; placeholder: string; extra?: string; outputs: (topic: string) => string[] }> = {
  hooks: {
    label: "Viral Hook Generator",
    placeholder: "Enter topic e.g. 'morning routine'",
    outputs: (t) => [
      `Nobody talks about this side of ${t || "this"}…`,
      `This changed everything about ${t || "my life"}.`,
      `You won't believe what happened when I tried ${t || "this"}.`,
      `I quit ${t || "this"} for 30 days. Here's what happened.`,
    ],
  },
  script: {
    label: "Shorts Script Generator",
    placeholder: "Topic e.g. 'AI side hustle'",
    extra: "Tone: Energetic",
    outputs: (t) => [
      `HOOK (0-3s): Most people get ${t || "this"} completely wrong.\n\nBEAT 1 (3-15s): Here's the truth nobody shares — the 1% know this rule.\n\nBEAT 2 (15-40s): Step 1: identify the pattern. Step 2: flip it. Step 3: repeat daily.\n\nPAYOFF (40-55s): Try this for 7 days. Watch what happens.\n\nCTA (55-60s): Follow for part 2.`,
    ],
  },
  titles: {
    label: "YouTube Title Generator",
    placeholder: "Topic e.g. 'investing for beginners'",
    outputs: (t) => [
      `I Tried ${t || "This"} For 30 Days (Shocking Results)`,
      `Why Everyone Is Wrong About ${t || "This"}`,
      `The Truth About ${t || "This"} Nobody Tells You`,
      `${t || "This"} Changed My Life — Here's How`,
    ],
  },
  thumbnail: {
    label: "Thumbnail Text Generator",
    placeholder: "Topic e.g. 'crypto crash'",
    outputs: () => ["IT'S OVER", "$0 TO $10K", "DON'T DO THIS", "100% WORKS"],
  },
};

const tabs: { id: Tool; label: string }[] = [
  { id: "hooks", label: "Hooks" },
  { id: "script", label: "Script" },
  { id: "titles", label: "Titles" },
  { id: "thumbnail", label: "Thumbnail" },
];

export function ToolsShowcase() {
  const [active, setActive] = useState<Tool>("hooks");
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<string[]>([]);
  const [copied, setCopied] = useState<number | null>(null);

  const tool = presets[active];

  const generate = () => {
    setLoading(true);
    setResults([]);
    setTimeout(() => {
      setResults(tool.outputs(topic.trim()));
      setLoading(false);
    }, 900);
  };

  const copy = (text: string, i: number) => {
    navigator.clipboard.writeText(text);
    setCopied(i);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <section id="tools" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="AI Tools"
          title={<>Try it. <span className="text-gradient">Live.</span></>}
          subtitle="Real outputs from the real engine. Generate hooks, scripts, titles, and thumbnail text in seconds."
        />

        <div className="mx-auto mt-14 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2 rounded-2xl glass p-2">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => { setActive(t.id); setResults([]); }}
                className={`flex-1 rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                  active === t.id ? "btn-gradient text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="mt-4 rounded-3xl glass-strong p-5 md:p-7">
            <h3 className="text-lg font-semibold">{tool.label}</h3>

            <div className="mt-4 flex flex-col gap-3 md:flex-row">
              <input
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder={tool.placeholder}
                className="flex-1 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-[var(--neon-purple)] focus:outline-none focus:ring-2 focus:ring-[var(--neon-purple)]/30"
              />
              <button
                onClick={generate}
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-xl btn-gradient px-6 py-3 text-sm font-semibold text-primary-foreground disabled:opacity-70"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                {loading ? "Generating…" : "Generate"}
              </button>
            </div>
            {tool.extra && <p className="mt-2 text-xs text-muted-foreground">{tool.extra}</p>}

            <div className="mt-5 min-h-[120px] space-y-2">
              {loading && (
                <div className="space-y-2">
                  {[0,1,2].map(i => (
                    <div key={i} className="h-12 rounded-xl bg-gradient-to-r from-white/5 via-white/10 to-white/5 bg-[length:1000px_100%] animate-shimmer" />
                  ))}
                </div>
              )}
              {!loading && results.length === 0 && (
                <p className="text-sm text-muted-foreground">Enter a topic and press Generate.</p>
              )}
              {!loading && results.map((r, i) => (
                <div
                  key={i}
                  className="group flex items-start justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:bg-white/[0.06]"
                  style={{ animation: `fade-up .4s ease-out ${i * 0.08}s both` }}
                >
                  <p className="whitespace-pre-line text-sm">{r}</p>
                  <button onClick={() => copy(r, i)} className="shrink-0 rounded-lg glass p-2 text-muted-foreground transition hover:text-foreground">
                    {copied === i ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
