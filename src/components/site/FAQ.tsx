import { useState } from "react";
import { SectionHeader } from "./Features";
import { Plus } from "lucide-react";

const faqs = [
  { q: "How does ViralGPT work?", a: "Tell it your topic. Our viral engine — trained on millions of high-performing shorts, titles, and hooks — generates platform-native content in seconds." },
  { q: "Is it free?", a: "Yes. The Free plan gives you 15 generations a day forever. Upgrade only when you want unlimited and advanced tools." },
  { q: "Can I use it for YouTube Shorts?", a: "Absolutely. ViralGPT is optimized for Shorts, Reels, and TikTok — and longer YouTube uploads too." },
  { q: "Does it support multiple languages?", a: "Yes — generate hooks, scripts, and titles in 30+ languages including Spanish, Hindi, Portuguese, and Arabic." },
  { q: "Will the content sound like me?", a: "Pro plans let you train a voice profile so every output matches your tone and style." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="FAQ"
          title={<>Questions, <span className="text-gradient">answered</span></>}
        />
        <div className="mx-auto mt-12 max-w-2xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="rounded-2xl glass">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-sm font-medium md:text-base">{f.q}</span>
                  <Plus className={`h-4 w-4 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45 text-[var(--neon-purple)]" : "text-muted-foreground"}`} />
                </button>
                <div className={`grid overflow-hidden px-5 transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden text-sm text-muted-foreground">{f.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
