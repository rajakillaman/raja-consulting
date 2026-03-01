import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import SignOutButton from "./sign-out-button";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("credits, created_at")
    .eq("id", user.id)
    .single();

  const credits = profile?.credits ?? 0;
  const memberSince = profile?.created_at
    ? new Date(profile.created_at).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : "—";

  return (
    <div className="min-h-screen px-6 pt-24 pb-16">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
            <p className="mt-1 text-sm text-muted">{user.email}</p>
          </div>
          <SignOutButton />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Credit balance */}
          <div className="rounded-xl border border-card-border bg-card/50 p-6">
            <p className="mb-1 text-sm text-muted">Credit Balance</p>
            <p className="text-4xl font-bold tabular-nums">{credits}</p>
          </div>

          {/* Member since */}
          <div className="rounded-xl border border-card-border bg-card/50 p-6">
            <p className="mb-1 text-sm text-muted">Member Since</p>
            <p className="text-lg font-semibold">{memberSince}</p>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-card-border bg-card/50 p-6">
          <h2 className="mb-4 text-lg font-semibold">Quick Actions</h2>
          <div className="flex flex-wrap gap-3">
            <a
              href="/#pricing"
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-accent-hover"
            >
              Buy Credits
            </a>
            <a
              href="/#services"
              className="rounded-lg border border-card-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-muted/40"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
