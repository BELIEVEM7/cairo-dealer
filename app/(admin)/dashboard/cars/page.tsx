import { SidebarTrigger } from "@/components/ui/sidebar";

export default function CarsPage() {
  return (
    <main>
      <header className="flex items-center gap-3 border-b p-4">
        <SidebarTrigger />

        <h1 className="text-xl font-semibold">
          Manage Cars
        </h1>
      </header>

      <section className="p-6">
        <p className="text-muted-foreground">
          Manage your vehicle inventory.
        </p>
      </section>
    </main>
  );
}