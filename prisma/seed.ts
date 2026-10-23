
import "dotenv/config";
import bcrypt from "bcryptjs";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/lib/generated/prisma/client";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL is missing from .env");
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  const adminPassword = process.env.ADMIN_SEED_PASSWORD;
  if (!adminPassword) {
    throw new Error("ADMIN_SEED_PASSWORD is missing from .env");
  }

  const hashedPassword = await bcrypt.hash(adminPassword, 12);

  // Create the administrator or update the existing seed account.
  const admin = await prisma.user.upsert({
    where: { email: "admin@cairo-dealer.com" },
    update: {
      role: "Admin",
    },
    create: {
      name: "Cairo Dealer Admin",
      email: "admin@cairo-dealer.com",
      password: hashedPassword,
      role: "Admin",
    },
  });

  const cars = [
    {
      name: "BMW M3",
      price: 1200000,
      year: 2024,
      featured: true,
      description: "High-performance BMW M3.",
    },
    {
      name: "Toyota Supra",
      price: 950000,
      year: 2023,
      featured: true,
      description: "Sporty Toyota Supra.",
    },
    {
      name: "Mercedes C63",
      price: 1500000,
      year: 2024,
      featured: false,
      description: "Luxury performance sedan.",
    },
    {
      name: "Audi RS3",
      price: 1100000,
      year: 2024,
      featured: true,
      description: "Compact Audi performance car.",
    },
    {
      name: "Toyota GR86",
      price: 650000,
      year: 2023,
      featured: false,
      description: "Lightweight rear-wheel-drive sports car.",
    },
  ];

  let createdCount = 0;
  let skippedCount = 0;

  for (const car of cars) {
    const existingCar = await prisma.car.findFirst({
      where: {
        name: car.name,
        year: car.year,
        userId: admin.id,
      },
    });

    if (existingCar) {
      skippedCount++;
      continue;
    }

    await prisma.car.create({
      data: {
        ...car,
        userId: admin.id,
      },
    });

    createdCount++;
  }

  console.log("Database seeding completed.");
  console.log(`Administrator: ${admin.email}`);
  console.log(`Cars created: ${createdCount}`);
  console.log(`Existing cars skipped: ${skippedCount}`);
}

main()
  .catch((error) => {
    console.error("Database seeding failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
//  To run this seed script, use the following command: 
//  pnpm exec prisma db seed --config prisma7.config.ts