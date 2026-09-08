import { SidebarTrigger } from "@/components/ui/sidebar";

export default function CustomersPage() {
  return (
    <main>
      <header className="flex items-center gap-3 border-b p-4">
        <SidebarTrigger />

        <h1 className="text-xl font-semibold">
          Customers
        </h1>
      </header>

      <section className="p-6">
        <p className="text-muted-foreground">
          Manage Cairo Motors customers.
        </p>
      </section>
    </main>
  );
}