import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Cairo Motors | Find Your Next Drive",
  description:
    "Explore the Cairo Motors collection, compare vehicle details, and find a car that feels right for you.",
};

const editorialFont = {
  fontFamily:
    'Perpetua, "Palatino Linotype", "Book Antiqua", Georgia, serif',
};

const steps = [
  {
    number: "01",
    title: "Explore",
    description:
      "Start with the vehicles available and see what catches your eye.",
  },
  {
    number: "02",
    title: "Compare",
    description:
      "Take a closer look at the details, year, and price of each car.",
  },
  {
    number: "03",
    title: "Choose your next step",
    description:
      "When something feels right, get in touch and continue the conversation.",
  },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#f4f1eb] text-[#171816]">
      {/* Hero Section */}
      <section className="relative isolate min-h-[680px] bg-[#111311] text-[#f6f3ed] sm:min-h-[740px] lg:min-h-[calc(100svh-5rem)]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-[position:58%_center] opacity-80"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(10, 12, 11, .94) 0%, rgba(10, 12, 11, .78) 38%, rgba(10, 12, 11, .18) 100%), linear-gradient(0deg, rgba(10, 12, 11, .56), transparent 55%), url("https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=85")',
          }}
        />

        <div className="relative mx-auto flex min-h-[680px] max-w-[1440px] flex-col justify-end px-6 pb-16 pt-24 sm:min-h-[740px] sm:px-10 sm:pb-20 lg:min-h-[calc(100svh-5rem)] lg:px-16 lg:pb-24">
          <div className="max-w-3xl">
            <p className="mb-7 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-[#c5ad7d] sm:text-xs">
              <span className="h-px w-9 bg-[#c5ad7d]" />
              Cairo Motors · Find your next drive
            </p>

            <h1
              className="text-[3.5rem] font-normal leading-[0.94] tracking-[-0.045em] sm:text-7xl lg:text-[6.5rem]"
              style={editorialFont}
            >
              A finer way
              <br />
              to find your{" "}
              <span className="text-[#c5ad7d] italic">next car.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              Good journeys start with the right choice. Explore the cars,
              compare what matters, and find the one that feels like yours.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/cars"
                className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#c5ad7d] px-6 text-sm font-semibold text-[#171816] transition-colors hover:bg-[#d4c29d]"
              >
                Explore available cars
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex min-h-12 items-center justify-center border border-white/35 px-6 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Discover Cairo Motors
              </Link>
            </div>
          </div>

          <div className="mt-16 flex items-end justify-between border-t border-white/20 pt-5 text-[10px] uppercase tracking-[0.24em] text-white/60 sm:mt-24 sm:text-xs">
            <span>Considered choices. Better drives.</span>
            <span className="hidden sm:inline">Scroll to discover</span>
          </div>
        </div>
      </section>

      {/* A More Considered Search Section */}
      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8d7954]">
              A more considered search
            </p>
            <h2
              className="mt-5 max-w-xl text-4xl font-normal leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl"
              style={editorialFont}
            >
              The right car is about more than getting there.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-[#62625d]">
              Whether you know exactly what you want or are still finding your
              way, take the time to explore the details and make a choice that
              suits your life.
            </p>
            <Link
              href="/cars"
              className="mt-8 inline-flex items-center gap-3 border-b border-[#8d7954] pb-2 text-sm font-semibold transition-colors hover:text-[#8d7954]"
            >
              Browse the collection
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>

          <div className="relative min-h-[420px] overflow-hidden bg-[#242623] sm:min-h-[520px]">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  'linear-gradient(0deg, rgba(14, 16, 15, .65), transparent 65%), url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85")',
              }}
            />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10">
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#d1bd94]">
                The Cairo Motors approach
              </p>
              <p
                className="mt-3 max-w-sm text-3xl leading-tight sm:text-4xl"
                style={editorialFont}
              >
                Take your time. Find your fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="border-y border-[#ded9ce] bg-[#eeebe4] px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8d7954]">
              A simple place to begin
            </p>
            <h2
              className="mt-5 text-4xl font-normal leading-tight tracking-[-0.03em] sm:text-5xl"
              style={editorialFont}
            >
              From first look to first drive.
            </h2>
          </div>

          <div className="mt-12 grid gap-0 md:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className={`border-t border-[#cfc9bd] py-7 md:pr-10 ${
                  index > 0 ? "md:border-l md:pl-10" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-[0.2em] text-[#8d7954]">
                    {step.number}
                  </span>
                  <Check
                    aria-hidden="true"
                    className="size-4 text-[#8d7954]"
                    strokeWidth={1.5}
                  />
                </div>
                <h3
                  className="mt-7 text-2xl font-normal sm:text-3xl"
                  style={editorialFont}
                >
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-[#62625d]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="bg-[#171a18] px-6 py-20 text-[#f6f3ed] sm:px-10 sm:py-24 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c5ad7d]">
              Your next chapter
            </p>
            <h2
              className="mt-5 text-4xl font-normal leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl"
              style={editorialFont}
            >
              Make room for a better drive.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-white/65">
              Take a look at what is available and find a car worth looking
              forward to.
            </p>
          </div>

          <Link
            href="/cars"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 bg-[#c5ad7d] px-6 text-sm font-semibold text-[#171816] transition-colors hover:bg-[#d4c29d]"
          >
            Find your car
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
