import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <div className="max-w-lg">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          404
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
          Car Not Found
        </h1>

        <p className="mt-6 text-base leading-7 text-muted-foreground md:text-lg">
          Sorry, we couldn't find the vehicle you're looking for.
          It may have been sold, removed, or the URL may be incorrect.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/cars"
            className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Browse Our Cars
          </Link>
        </div>
      </div>
    </main>
  );
}