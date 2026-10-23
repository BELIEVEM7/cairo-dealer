
"use server";

import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/session";

export async function createCarAction(formData: FormData) {
  const user = await requireAdmin();

  const name = String(formData.get("name") ?? "").trim();
  const price = Number(formData.get("price"));
  const year = Number(formData.get("year"));

  if (!name) {
    throw new Error("Car name is required.");
  }

  if (!Number.isFinite(price) || price <= 0) {
    throw new Error("Price must be greater than zero.");
  }

  if (!Number.isInteger(year) || year < 1900 ||
      year > new Date().getFullYear() + 1) {
    throw new Error("Please enter a valid vehicle year.");
  }

  await prisma.car.create({
    data: {
      name,
      price,
      year,
      sold: false,
      featured: false,
      userId: user.id,
    },
  });
}
