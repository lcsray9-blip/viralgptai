import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Mail, Lock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/login")({
  component: LoginPage,
  head: () => ({ meta: [{ title: "Log in — ViralGPT" }] }),
});

function LoginPage() {
  return <AuthShell title="Welcome back" subtitle="Log in to your ViralGPT studio." cta="Log in" alt={{ text: "New here?", link: "/signup", label: "Create account" }} />;
}

export function AuthShell({ title, subtitle, cta, alt, signup }: { title: string; subtitle: string; cta: string; alt: { text: string; link: string; label: string }; signup?: boolean }) {
  return (
    <div className="relative grid min-h-screen place-items-center px-4 py-16">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full opacity-50 blur-3xl" style={{ background: "var(--gradient-glow)" }} />

      <div className="relative w-full max-w-md">
        <Link to="/" className="mb-8 flex items-center justify-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg btn-gradient">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span className="font-display text-xl font-bold">Viral<span className="text-gradient">GPT</span></span>
        </Link>

        <div className="rounded-3xl glass-strong p-8 glow-ring">
          <h1 className="font-display text-2xl font-bold">{title}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>

          <form className="mt-6 space-y-3" onSubmit={(e) => e.preventDefault()}>
            {signup && (
              <Field icon={<Mail className="h-4 w-4" />} type="text" placeholder="Your name" />
            )}
            <Field icon={<Mail className="h-4 w-4" />} type="email" placeholder="you@email.com" />
            <Field icon={<Lock className="h-4 w-4" />} type="password" placeholder="••••••••" />

            <button type="submit" className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl btn-gradient px-4 py-3 text-sm font-semibold text-primary-foreground">
              {cta} <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground">
            <div className="h-px flex-1 bg-border" /> or <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button className="rounded-xl glass px-3 py-2.5 text-xs font-medium hover:bg-white/5">Continue with Google</button>
            <button className="rounded-xl glass px-3 py-2.5 text-xs font-medium hover:bg-white/5">Continue with Apple</button>
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            {alt.text} <Link to={alt.link} className="text-gradient font-semibold">{alt.label}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function Field({ icon, ...props }: { icon: React.ReactNode } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 focus-within:border-[var(--neon-purple)] focus-within:ring-2 focus-within:ring-[var(--neon-purple)]/30">
      <span className="text-muted-foreground">{icon}</span>
      <input {...props} className="w-full bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none" />
    </div>
  );
}
