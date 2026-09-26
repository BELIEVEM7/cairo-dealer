import { notFound } from "next/navigation";
import { getCarById } from "@/lib/cars";

export default async function CarPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const car = await getCarById(id);

  if (!car) {
    notFound();
  }

  return (
    <main>
      <h1>{car.name}</h1>

      <p>
        R{car.price.toLocaleString()}
      </p>

      <p>{car.year}</p>

      <p>{car.description}</p>
    </main>
  );
}