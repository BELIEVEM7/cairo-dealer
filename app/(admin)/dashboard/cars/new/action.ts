"use server";

import { prisma } from "@/lib/prisma";

export async function createCarAction(formData: FormData) {
  const name = formData.get("name") as string;
  const price = Number(formData.get("price"));
  const year = Number(formData.get("year"));

  await prisma.car.create({
    data: {
      name,
      price,
      year,
      sold: false,
      featured: false,
    },
  });
}