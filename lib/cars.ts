import { prisma } from "@/lib/prisma";

export async function getCars() {
  return prisma.car.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}
export async function getCarById(id: string) {
  return prisma.car.findUnique({
    where: {
      id,
    },
  });
}