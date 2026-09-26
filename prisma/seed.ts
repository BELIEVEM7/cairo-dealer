import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/lib/generated/prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "admin@cairo-dealer.com" },
    update: {},
    create: {
      name: "Cairo Dealer Admin",
      email: "admin@cairo-dealer.com",
      password: "hashed-password-placeholder",
    },
  });

  await prisma.car.createMany({
    data: [
      {
        name: "BMW M3",
        price: 1200000,
        year: 2024,
        sold: false,
        featured: true,
        description: "High-performance BMW M3.",
        userId: user.id,
      },
      {
        name: "Toyota Supra",
        price: 950000,
        year: 2023,
        sold: false,
        featured: true,
        description: "Sporty Toyota Supra.",
        userId: user.id,
      },
      {
        name: "Mercedes C63",
        price: 1500000,
        year: 2024,
        sold: false,
        featured: false,
        description: "Luxury performance sedan.",
        userId: user.id,
      },
      {
        name: "Audi RS3",
        price: 1100000,
        year: 2024,
        sold: false,
        featured: true,
        description: "Compact Audi performance car.",
        userId: user.id,
      },
      {
        name: "Toyota GR86",
        price: 650000,
        year: 2023,
        sold: false,
        featured: false,
        description: "Lightweight rear-wheel-drive sports car.",
        userId: user.id,
      },
    ],
  });

  console.log("🌱 Database seeded successfully!");
}

main()
  .catch((error) => {
    console.error("❌ Error while seeding database:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
