export default function CarsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <aside className="w-64 border-r p-6">
        <h2 className="text-xl font-bold">
          Car Filters
        </h2>

        <p className="mt-4">
          Brand
        </p>

        <p className="mt-4">
          Price
        </p>

        <p className="mt-4">
          Year
        </p>
      </aside>

      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}