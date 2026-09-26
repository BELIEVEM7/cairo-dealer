import { redirect } from "next/navigation";

import { getSession } from "@/lib/session";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default async function DashboardPage() {
  const isAuthenticated = await getSession();

  if (!isAuthenticated) {
    redirect("/login");
  }

  return (
    <main>
      <header className="flex items-center gap-3 border-b p-4">
        <SidebarTrigger />

        <h1 className="text-xl font-semibold">
          Cairo Motors Dashboard
        </h1>
      </header>

      <section className="p-6">
        <h2 className="text-4xl font-bold">
          Dashboard
        </h2>

        <p className="mt-4 text-muted-foreground">
          Welcome to the admin dashboard.
        </p>
      </section>
    </main>
  );
}