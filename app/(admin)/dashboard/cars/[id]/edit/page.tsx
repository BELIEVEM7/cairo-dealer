import { SidebarTrigger } from "@/components/ui/sidebar";

export default function EditCarPage() {
  return (
    <main>
      <header className="flex items-center gap-3 border-b p-4">
        <SidebarTrigger />

        <h1 className="text-xl font-semibold">
          Edit Car
        </h1>
      </header>

      <section className="p-6">
        <p className="text-muted-foreground">
          Edit vehicle details in the Cairo Motors inventory.
        </p>
      </section>
    </main>
  );
}