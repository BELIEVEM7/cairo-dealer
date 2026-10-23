"use server";

import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/session";

export type CarActionState = {
  error?: string;
  success?: boolean;
};

export async function createCarAction(
  formData: FormData
): Promise<CarActionState> {
  const user = await requireAdmin();
  // 1. Get values from the form
  const name = formData.get("name") as string;
  const price = Number(formData.get("price"));
  const year = Number(formData.get("year"));
  const description = formData.get("description") as string;

  // 2. Validate required text fields
  if (!name?.trim()) {
    return {
      error: "Car name is required.",
    };
  }

  if (!description?.trim()) {
    return {
      error: "Car description is required.",
    };
  }

  // 3. Validate price
  if (!Number.isFinite(price) || price <= 0) {
    return {
      error: "Price must be a valid number greater than 0.",
    };
  }

  // 4. Validate year
  const currentYear = new Date().getFullYear();

  if (
    !Number.isInteger(year) ||
    year < 1900 ||
    year > currentYear + 1
  ) {
    return {
      error: "Please enter a valid vehicle year.",
    };
  }

  // 5. Create the car in PostgreSQL through Prisma
  await prisma.car.create({
    data: {
      name: name.trim(),
      price,
      year,
      description: description.trim(),
      sold: false,
      featured: false,
      userId: user.id,
    },
  });

  // 6. Return success
  return {
    success: true,
  };
}