"use client";

import { useActionState } from "react";
import { registerAction } from "@/app/(auth)/register/action";


import Link from "next/link";
import AuthForm from "@/components/AuthForm";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";




export default function RegisterPage() {
  
  const [state, formAction] = useActionState(
  registerAction,
  {}
);
  return (
    <AuthForm
      title="Create an account"
      description="Join Cairo Motors."
    >
      <form 
        action={formAction}
        className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">
            Full Name
          </Label>

          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            Email
          </Label>

          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">
            Password
          </Label>

          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Create a password"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirm-password">
            Confirm Password
          </Label>

          <Input
            id="confirm-password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
          />
        </div>

        <div className="flex items-center gap-2">
          <Checkbox id="terms" />

          <Label
            htmlFor="terms"
            className="text-sm font-normal"
          >
            I agree to the{" "}
            <Link
              href="/terms"
              className="text-primary hover:underline"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="text-primary hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </Label>
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
          Create Account
        </Button>

        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-primary hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </AuthForm>
  );
}