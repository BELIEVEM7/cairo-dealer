export default function Loading() {
  return (
    <main className="p-6 md:px-8 lg:px-16">
      <div className="h-12 w-48 animate-pulse rounded-md bg-muted" />

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="h-64 animate-pulse rounded-xl bg-muted" />
        <div className="h-64 animate-pulse rounded-xl bg-muted" />
        <div className="h-64 animate-pulse rounded-xl bg-muted" />
      </div>
    </main>
  );
}