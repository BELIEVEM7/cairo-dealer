import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">
        Cairo Motors
      </h1>

      <p className="mt-4">
        Welcome to Cairo Motors.
      </p>

      
      <Link
        href="/cars"
        className="mt-6 inline-block rounded bg-black px-4 py-2 text-white"
      >
        View Cars
      </Link>
    </main>
  );
}