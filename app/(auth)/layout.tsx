import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted p-6">
      <div className="w-full max-w-md">
        <Link
          href="/"
          className="text-2xl font-bold"
        >
          Cairo Motors
        </Link>

        <div className="mt-8 rounded-xl border bg-background p-6 shadow-sm">
          {children}
        </div>
      </div>
    </main>
  );
}