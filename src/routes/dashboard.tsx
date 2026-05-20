import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, LayoutDashboard, Wand2, Type, FileText, Image as ImageIcon, Hash, Settings, LogOut, Send, Copy, Check, Loader2, Flame, TrendingUp, BarChart3 } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
  head: () => ({ meta: [{ title: "Studio — ViralGPT" }] }),
});

const nav = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: Wand2, label: "Hooks" },
  { icon: Type, label: "Titles" },
  { icon: FileText, label: "Scripts" },
  { icon: ImageIcon, label: "Thumbnails" },
  { icon: Hash, label: "Hashtags" },
];

type Msg = { role: "user" | "ai"; text: string };

function DashboardPage() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "ai", text: "Hey creator 👋 What are we making viral today? Give me a topic." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState<number | null>(null);

  const send = () => {
    if (!input.trim()) return;
    const topic = input.trim();
    setMessages((m) => [...m, { role: "user", text: topic }]);
    setInput("");
    setLoading(true);
    setTimeout(() => {
      const out = [
        `🔥 Hook: "Nobody talks about ${topic} — here's why."`,
        `⚡ Title: "I Tried ${topic} For 30 Days (Insane Results)"`,
        `💡 Thumbnail: "DON'T DO THIS"`,
        `📝 Hook 2: "${topic} changed everything. Watch this."`,
      ].join("\n");
      setMessages((m) => [...m, { role: "ai", text: out }]);
      setLoading(false);
    }, 1100);
  };

  const copy = (text: string, i: number) => {
    navigator.clipboard.writeText(text);
    setCopied(i);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />
      <div className="relative mx-auto flex max-w-[1500px] gap-5 p-4 md:p-6">
        {/* Sidebar */}
        <aside className="hidden w-60 shrink-0 lg:block">
          <div className="sticky top-6 rounded-2xl glass p-4">
            <Link to="/" className="flex items-center gap-2 px-2 py-1">
              <div className="grid h-8 w-8 place-items-center rounded-lg btn-gradient">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="font-display text-base font-bold">Viral<span className="text-gradient">GPT</span></span>
            </Link>
            <nav className="mt-6 space-y-1">
              {nav.map((n) => (
                <button key={n.label} className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${n.active ? "btn-gradient text-primary-foreground" : "text-muted-foreground hover:bg-white/5 hover:text-foreground"}`}>
                  <n.icon className="h-4 w-4" />
                  {n.label}
                </button>
              ))}
            </nav>
            <div className="mt-6 border-t border-border/50 pt-4 space-y-1">
              <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground">
                <Settings className="h-4 w-4" /> Settings
              </button>
              <Link to="/" className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground">
                <LogOut className="h-4 w-4" /> Log out
              </Link>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="min-w-0 flex-1 space-y-5">
          {/* Top bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl glass p-4">
            <div>
              <h1 className="font-display text-xl font-bold">Studio</h1>
              <p className="text-xs text-muted-foreground">Welcome back. Let's make something go viral.</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full glass px-3 py-1 text-xs">Pro plan</span>
              <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-pink-400 to-purple-500 text-xs font-semibold text-white">VG</div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Stat icon={Sparkles} label="Generations" value="1,284" trend="+24%" />
            <Stat icon={Flame} label="Avg Viral Score" value="91.2" trend="+7.4" />
            <Stat icon={TrendingUp} label="Top Hook CTR" value="14.8%" trend="+2.1%" />
            <Stat icon={BarChart3} label="Drafts" value="62" trend="+12" />
          </div>

          {/* Chat generator */}
          <div className="grid gap-5 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-2xl glass-strong p-5">
              <div className="flex items-center gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-lg btn-gradient">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">AI Generator</h3>
                  <p className="text-xs text-muted-foreground">Chat mode · GPT-5 viral engine</p>
                </div>
              </div>

              <div className="mt-5 h-[420px] space-y-3 overflow-y-auto pr-1">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`group max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-3 text-sm ${
                      m.role === "user"
                        ? "btn-gradient text-primary-foreground"
                        : "glass relative"
                    }`}>
                      {m.text}
                      {m.role === "ai" && (
                        <button onClick={() => copy(m.text, i)} className="absolute right-2 top-2 rounded-md glass p-1.5 opacity-0 transition group-hover:opacity-100">
                          {copied === i ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="rounded-2xl glass px-4 py-3">
                      <Loader2 className="h-4 w-4 animate-spin text-[var(--neon-purple)]" />
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-black/30 p-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && send()}
                  placeholder="Type a topic… e.g. 'AI side hustle for beginners'"
                  className="w-full bg-transparent px-3 text-sm placeholder:text-muted-foreground focus:outline-none"
                />
                <button onClick={send} disabled={loading} className="inline-flex items-center gap-1 rounded-lg btn-gradient px-3 py-2 text-sm font-semibold text-primary-foreground disabled:opacity-70">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Side panel: trending */}
            <div className="rounded-2xl glass p-5">
              <div className="flex items-center gap-2">
                <Flame className="h-4 w-4 text-[var(--neon-pink)]" />
                <h4 className="text-sm font-semibold">Trending hooks</h4>
              </div>
              <div className="mt-4 space-y-2">
                {["POV: you discovered…", "I tried this for 30 days", "Nobody talks about…", "Wait until the end", "Here's what they don't tell you"].map((t, i) => (
                  <div key={t} className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5 text-xs">
                    <span>{t}</span>
                    <span className="text-emerald-400">▲ {20 - i * 3}%</span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold">Content analytics</h4>
                <p className="text-xs text-muted-foreground">Views · last 7 days</p>
                <div className="mt-3 flex h-24 items-end gap-1.5">
                  {[30, 55, 40, 70, 60, 85, 100].map((h, i) => (
                    <div key={i} className="flex-1 rounded-md bg-gradient-to-t from-[var(--neon-blue)] to-[var(--neon-purple)] opacity-80" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function Stat({ icon: Icon, label, value, trend }: { icon: any; label: string; value: string; trend: string }) {
  return (
    <div className="rounded-2xl glass p-4">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{label}</span>
        <Icon className="h-4 w-4 text-[var(--neon-purple)]" />
      </div>
      <p className="mt-2 font-display text-2xl font-bold">{value}</p>
      <p className="mt-1 text-xs text-emerald-400">{trend}</p>
    </div>
  );
}
