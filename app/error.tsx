"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <div className="max-w-lg">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Error
        </p>

        <h1 className="mt-3 text-4xl font-bold">
          Something went wrong
        </h1>

        <p className="mt-4 text-muted-foreground">
          We couldn't load the cars right now.
          Please try again.
        </p>

        <button
          onClick={() => reset()}
          className="mt-8 rounded-md bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}