import type { Car } from "@/types/car";
import { Button } from '@/components/ui/button';

export default function CarCard({
  name,
  price,
  year,
  sold,
  featured,
}: Car) {
  return (
    <article className="overflow-hidden rounded-xl border bg-white p-6 shadow-sm">
      {featured ? (
        <span className="text-sm font-semibold">
          ⭐ Featured
        </span>
      ): (
        <p className="text-sm font-semibold"> Not featured</p>
      )}

      <h2 className="mt-3 text-2xl font-bold">
        {name}
      </h2>

      <p className="mt-2 text-gray-600">
        {year}
      </p>

      <p className="mt-4 text-xl font-semibold">
        R{price.toLocaleString()}
      </p>

      {sold ? (
        <p className="mt-3 font-bold">
          SOLD
        </p>
      ) : (
        <p className="mt-3 text-gray-600">
          Available
        </p>
      )}

      <Button variant="destructive">
        View Cars
      </Button>

    
    </article>
  );
}