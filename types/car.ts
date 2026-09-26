export type Car = {
  id: string;
  name: string;
  price: number;
  year: number;
  sold: boolean;
  featured: boolean;
  description?: string; /*? Means description is optional */
};