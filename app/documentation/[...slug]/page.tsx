type PageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function DocumentationPage({
  params,
}: PageProps) {
  const { slug } = await params;

  return (
    <main className="p-6 md:px-8 lg:px-16">
      <h1 className="text-4xl font-bold">
        Documentation
      </h1>

      <p className="mt-6">
        You are viewing:
      </p>

      <p className="mt-2 font-mono">
        {slug.join(" -> ")}
      </p>
    </main>
  );
}