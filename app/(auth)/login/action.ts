"use server";

import { redirect } from "next/navigation";
import { authenticateUser } from "@/lib/auth";
import { createSession } from "@/lib/session";

export type LoginState = {
  error?: string;
};

export async function loginAction(
  _previousState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const user = await authenticateUser(
    email,
    password
  );

  if (!user) {
    return {
      error: "Invalid email or password.",
    };
  }

  await createSession();

  redirect("/dashboard");
}