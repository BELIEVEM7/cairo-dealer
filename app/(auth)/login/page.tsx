"use client";

import { useActionState } from "react";
import Link from "next/link";

import AuthForm from "@/components/AuthForm";
import { 
  loginAction,
  type LoginState,
 }from "@/app/(auth)/login/action";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const initialState: LoginState = {};
  const [state, formAction] = useActionState(
    loginAction,
    initialState);
  return (
    <AuthForm
      title="Welcome back"
      description="Sign in to manage Cairo Motors."
    >
      <form
      action={formAction}
        className="space-y-4"
      >
        <div className="space-y-2">
          <Label htmlFor="email">
            Email
          </Label>

          <Input
            id="email"
            type="email"
            name="email"
            placeholder="you@example.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">
            Password
          </Label>

          <Input
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>

        {state.error && (
          <p className="text-sm text-destructive">
            {state.error}
          </p>
        )}

        <Button
          type="submit"
          className="w-full"
        >
          Sign In
        </Button>

        <p className="text-sm text-muted-foreground">
          <Link
            href="/forgot-password"
            className="text-primary hover:underline"
          >
            Forgot your password?
          </Link>
        </p>

        <p className="text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-primary hover:underline"
          >
            Register
          </Link>
        </p>
      </form>
    </AuthForm>
  );
}