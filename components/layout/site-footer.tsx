import Link from "next/link";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="shell grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="font-display text-xl font-semibold tracking-tight">
            Jazivo
            <span className="ml-2 font-mono text-[11px] font-medium tracking-[0.18em] text-accent">
              TECH
            </span>
          </p>
          <p className="mt-4 max-w-sm text-muted">
            Web apps, mobile apps, and custom software. Built by Ijaz Anayat and Jasim Mustafa.
          </p>
        </div>
        <nav className="md:col-span-3" aria-label="Footer">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">Index</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted transition-colors hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">Direct</p>
          <ul className="mt-4 space-y-2">
            <li>
              <a href={`mailto:${site.email}`} className="text-muted transition-colors hover:text-ink">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.github}
                className="text-muted transition-colors hover:text-ink"
                target="_blank"
                rel="noreferrer"
              >
                Ijaz on GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="shell flex flex-col gap-2 py-4 font-mono text-[11px] tracking-wide text-faint sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Jazivo Tech</p>
          <p>MERN · Next.js · React Native</p>
        </div>
      </div>
    </footer>
  );
}
