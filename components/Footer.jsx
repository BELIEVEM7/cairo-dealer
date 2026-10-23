
import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/cars", label: "Browse cars" },
  { href: "/about", label: "About us" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-8 lg:px-16">
        <div>
          <Link
            href="/"
            className="font-bold tracking-tight"
          >
            Cairo Motors
          </Link>

          <p className="mt-2 text-sm text-muted-foreground">
            Find your next car with confidence.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Cairo Motors
        </p>
      </div>
    </footer>
  );
}
