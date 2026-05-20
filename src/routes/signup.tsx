import { createFileRoute } from "@tanstack/react-router";
import { AuthShell } from "./login";

export const Route = createFileRoute("/signup")({
  component: SignupPage,
  head: () => ({ meta: [{ title: "Sign up — ViralGPT" }] }),
});

function SignupPage() {
  return (
    <AuthShell
      title="Create your account"
      subtitle="Start free. No credit card required."
      cta="Create account"
      signup
      alt={{ text: "Already have an account?", link: "/login", label: "Log in" }}
    />
  );
}
