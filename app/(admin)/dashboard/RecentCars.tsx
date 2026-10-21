import { getCars } from "@/lib/cars";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function RecentCars() {
  const cars = await getCars();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Cars</CardTitle>
      </CardHeader>

      <CardContent>
        {cars.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No cars have been added yet.
          </p>
        ) : (
          <ul className="space-y-3">
            {cars.slice(0, 5).map((car) => (
              <li
                key={car.id}
                className="flex items-center justify-between gap-4"
              >
                <span>{car.name}</span>
                <span className="text-sm text-muted-foreground">
                  R{car.price.toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}