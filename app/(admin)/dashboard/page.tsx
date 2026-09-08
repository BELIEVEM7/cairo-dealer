import { SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardPage() {
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