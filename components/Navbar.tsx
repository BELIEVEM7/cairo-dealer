"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/cars",
    label: "Cars",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contact",
    label: "Contact",
  }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between border-b p-6">
      <Link
        href="/"
        className="text-2xl font-bold"
      >
        Cairo Motors
      </Link>

      {/* Desktop navigation */}
      <div className="hidden gap-6 md:flex">
        {links.map((link) => {
          const active =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={
                active
                  ? "font-bold underline"
                  : "text-muted-foreground transition-colors hover:text-black"
              }
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      {/* Mobile navigation */}
      <Sheet>
        <SheetTrigger
          render={
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu />
            </Button>
          }
        />

        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Cairo Motors</SheetTitle>
          </SheetHeader>

          <nav className="mt-8 flex flex-col gap-4">
            {links.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    active
                      ? "rounded-md bg-muted px-4 py-3 font-semibold"
                      : "rounded-md px-4 py-3 hover:bg-muted"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  );
}