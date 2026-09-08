import { SidebarTrigger } from "@/components/ui/sidebar";

export default function SettingsPage() {
  return (
    <main>
      <header className="flex items-center gap-3 border-b p-4">
        <SidebarTrigger />

        <h1 className="text-xl font-semibold">
          Settings
        </h1>
      </header>

      <section className="p-6">
        <p className="text-muted-foreground">
          Manage Cairo Motors settings.
        </p>
      </section>
    </main>
  );
}