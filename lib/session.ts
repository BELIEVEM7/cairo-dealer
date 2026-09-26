import { cookies } from "next/headers";

export async function createSession() {
  const cookieStore = await cookies();

  cookieStore.set("session", "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });
}

export async function getSession() {
  const cookieStore = await cookies();

  const session = cookieStore.get("session");

  return session?.value === "authenticated";
}

export async function deleteSession() {
  const cookieStore = await cookies();

  cookieStore.delete("session");
}