
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";

export async function GET() {
  try {
    const cars = await prisma.car.findMany({
      orderBy: {
        createdAt: "desc",
      },
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

    return Response.json({ cars });
  } catch {
    return Response.json(
      { error: "Unable to retrieve cars." },
      { status: 500 }
    );
  }
}


export async function POST(request: Request) {
  // 1. Verify the user is logged in.
  const user = await getCurrentUser();

    if (!user) {
    return Response.json(
        { error: "Authentication required." },
        { status: 401 }
    );
    }

    if (user.role !== "Admin") {
    return Response.json(
        { error: "Administrator access required." },
        { status: 403 }
    );
    }

  // 3. Parse the request body.
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "Request body must be valid JSON." },
      { status: 400 }
    );
  }

  // 4. Validate the supplied data.
  if (
    typeof body !== "object" ||
    body === null ||
    !("name" in body) ||
    !("price" in body) ||
    !("year" in body)
  ) {
    return Response.json(
      { error: "Name, price and year are required." },
      { status: 400 }
    );
  }

  const { name, price, year } = body;

  const description =
    "description" in body ? body.description : undefined;

  if (typeof name !== "string" || !name.trim()) {
    return Response.json(
      { error: "A valid car name is required." },
      { status: 400 }
    );
  }

  if (
    typeof price !== "number" ||
    !Number.isSafeInteger(price) ||
    price <= 0
  ) {
    return Response.json(
      { error: "Price must be a positive whole number." },
      { status: 400 }
    );
  }

  if (
    typeof year !== "number" ||
    !Number.isInteger(year) ||
    year < 1900 ||
    year > new Date().getFullYear() + 1
  ) {
    return Response.json(
      { error: "Please provide a valid vehicle year." },
      { status: 400 }
    );
  }

  if (
    description !== undefined &&
    typeof description !== "string"
  ) {
    return Response.json(
      { error: "Description must be text." },
      { status: 400 }
    );
  }

  // 5. Create the car using the verified user's ID.
  try {
    const car = await prisma.car.create({
      data: {
        name: name.trim(),
        price,
        year,
        description:
          typeof description === "string"
            ? description.trim()
            : null,
        sold: false,
        featured: false,
        userId: user.id,
      },
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

    return Response.json(
      { car },
      { status: 201 }
    );
  } catch {
    return Response.json(
      { error: "Unable to create car." },
      { status: 500 }
    );
  }
}
