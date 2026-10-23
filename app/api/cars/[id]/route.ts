//for single car

import { prisma } from "@/lib/prisma";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const car = await prisma.car.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        price: true,
        year: true,
        sold: true,
        featured: true,
        description: true,
        createdAt: true,
      },
    });

    if (!car) {
      return Response.json(
        { error: "Car not found." },
        { status: 404 }
      );
    }

    return Response.json({ car });
  } catch {
    return Response.json(
      { error: "Unable to retrieve car." },
      { status: 500 }
    );
  }
}
