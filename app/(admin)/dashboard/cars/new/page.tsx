import { SidebarTrigger } from "@/components/ui/sidebar";

export default function NewCarPage() {
  return (
    <main>
      <header className="flex items-center gap-3 border-b p-4">
        <SidebarTrigger />

        <h1 className="text-xl font-semibold">
          Add New Car
        </h1>
      </header>

      <section className="p-6">
        <p className="text-muted-foreground">
          Add a new vehicle to the Cairo Motors inventory.
        </p>
      </section>
    </main>
  );
}