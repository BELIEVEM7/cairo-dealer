import CarCard from "@/components/CarCard";
import { cars } from "@/lib/cars";

export default function Cars() {
  return (
    <main className="p-6 md:px-8 lg:px-16">
      <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl">
        Our Cars
      </h1>

      <div className="mt-8 grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <CarCard
            key={car.id}
            {...car}
          />
        ))}
      </div>
    </main>
  );
}