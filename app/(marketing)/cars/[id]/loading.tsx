export default function Loading() {
  return (
    <main className="p-6 md:px-8 lg:px-16">
      <div className="h-10 w-72 animate-pulse rounded-md bg-muted" />

      <div className="mt-6 h-6 w-full max-w-xl animate-pulse rounded-md bg-muted" />

      <div className="mt-4 h-8 w-48 animate-pulse rounded-md bg-muted" />
    </main>
  );
}