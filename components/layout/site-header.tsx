"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { nav } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas">
      <div className="shell flex h-16 items-center justify-between gap-4">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight">
          Jazivo
          <span className="ml-2 font-mono text-[11px] font-medium tracking-[0.18em] text-accent">
            TECH
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`inline-flex items-center gap-2 font-mono text-[13px] tracking-wide transition-colors ${
                  active ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {active ? <span className="h-1.5 w-1.5 bg-accent" aria-hidden /> : null}
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden sm:block">
            <ButtonLink href="/contact">Start a project</ButtonLink>
          </div>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            {open ? <X size={18} strokeWidth={1.75} /> : <Menu size={18} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" className="border-t border-line md:hidden" aria-label="Mobile">
          <div className="shell">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block border-b border-line py-4 font-display text-3xl tracking-tight"
              >
                {item.label}
              </Link>
            ))}
            <div className="py-4 sm:hidden">
              <ButtonLink href="/contact">Start a project</ButtonLink>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
