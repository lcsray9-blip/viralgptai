import { Sparkles, Twitter, Youtube, Instagram, Github } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 mt-32">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-lg btn-gradient">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="font-display text-lg font-bold">
                Viral<span className="text-gradient">GPT</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              The AI co-pilot for creators. Hooks, scripts, titles, and thumbnails that actually go viral.
            </p>
            <div className="mt-5 flex gap-3">
              {[Twitter, Youtube, Instagram, Github].map((Icon, i) => (
                <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-lg glass transition hover:text-gradient">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Product</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground">Features</a></li>
              <li><a href="#tools" className="hover:text-foreground">AI Tools</a></li>
              <li><a href="#pricing" className="hover:text-foreground">Pricing</a></li>
              <li><Link to="/dashboard" className="hover:text-foreground">Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Contact</a></li>
              <li><a href="#" className="hover:text-foreground">Terms</a></li>
              <li><a href="#" className="hover:text-foreground">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground">Affiliates</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/50 pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} ViralGPT. All rights reserved.</p>
          <p>Built for creators who go viral.</p>
        </div>
      </div>
    </footer>
  );
}
