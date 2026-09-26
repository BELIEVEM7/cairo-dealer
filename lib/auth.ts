import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function authenticateUser(
  email: string,
  password: string
) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return null;
  }

  const passwordMatches = await bcrypt.compare(
    password,
    user.password
  );

  if (!passwordMatches) {
    return null;
  }

  return user;
}