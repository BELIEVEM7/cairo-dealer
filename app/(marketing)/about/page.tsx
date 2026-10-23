
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Search, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Cairo Motors",
  description:
    "Learn about Cairo Motors and our approach to helping visitors explore available vehicles.",
};

const principles = [
  {
    icon: Search,
    title: "Explore with clarity",
    description:
      "We make it straightforward to browse available cars and review their details.",
  },
  {
    icon: Compass,
    title: "Choose your direction",
    description:
      "Use the information available to decide which vehicles are right for you.",
  },
  {
    icon: Users,
    title: "Put your needs first",
    description:
      "Start with your priorities, whether that means practicality, comfort, or budget.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="px-6 py-16 md:px-8 md:py-24 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            ABOUT CAIRO MOTORS
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Helping you find the right car for your journey.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Choosing a car is a personal decision. Cairo Motors
            gives visitors a place to explore available vehicles,
            review important details, and decide what to consider
            next.
          </p>

          <Link
            href="/cars"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Explore available cars
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="border-y bg-muted/40 px-6 py-16 md:px-8 md:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight">
            What guides our approach
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.title}
                  className="rounded-2xl border bg-background p-6 sm:p-8"
                >
                  <Icon
                    aria-hidden="true"
                    className="size-7"
                  />

                  <h3 className="mt-5 text-xl font-semibold">
                    {principle.title}
                  </h3>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    {principle.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
