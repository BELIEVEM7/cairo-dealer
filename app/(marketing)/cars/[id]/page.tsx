import { notFound } from "next/navigation";
import { getCarById } from "@/lib/cars";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CarPage({ params }: PageProps) {
  const { id } = await params;

  const car = getCarById(id);

  if (!car) {
    notFound();
  }

  return (
    <main className="p-6 md:px-8 lg:px-16">
      <h1 className="text-4xl font-bold">
        {car.name}
      </h1>

      <p className="mt-4 text-lg">
        {car.description}
      </p>

      <p className="mt-4 text-2xl font-semibold">
        R{car.price.toLocaleString()}
      </p>
    </main>
  );
}