import Link from "next/link";
import type { ReactNode } from "react";

const variants = {
  solid:
    "bg-accent text-accent-ink hover:bg-ink hover:text-canvas",
  line: "border border-line text-ink hover:border-ink",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 px-4 py-2.5 font-mono text-[13px] tracking-wide transition-colors ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}
