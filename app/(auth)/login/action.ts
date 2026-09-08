"use server";

import { users } from "@/lib/users";
import { redirect } from "next/navigation";
import { createSession } from "@/lib/session";

export type LoginState = {
  error?: string;
};

export async function loginAction(
  _previousState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const email = formData.get("email");
  const password = formData.get("password");

  const user = users.find(
    (user) =>
      user.email === email &&
      user.password === password
  );

  if (!user) {
    return {
      error: "Invalid email or password.",
    };
  }

  await createSession();

  redirect("/dashboard");
}