export const cars = [
  {
    id: "bmw-m3",
    name: "BMW M3",
    price: 1200000,
    year: 2024,
    sold: false,
    featured: true,
    description: "A high-performance sports sedan.",
  },
  {
    id: "toyota-supra",
    name: "Toyota Supra",
    price: 950000,
    year: 2023,
    sold: true,
    featured: true,
    description: "A legendary Japanese performance car.",
  },
  {
    id: "mercedes-c63",
    name: "Mercedes-AMG C63",
    price: 1500000,
    year: 2024,
    sold: false,
    featured: false,
    description: "A luxurious high-performance sedan.",
  },
];

export function getCarById(id: string) {
  return cars.find((car) => car.id === id);
}