import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { founders } from "@/lib/team";

export function FoundersPreview() {
  return (
    <section className="border-t border-line" aria-labelledby="founders-heading">
      <div className="shell py-16 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">Founders</p>
            <h2
              id="founders-heading"
              className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl"
            >
              The people on the work
            </h2>
          </div>
          <Link href="/about" className="font-mono text-[13px] text-muted transition-colors hover:text-accent">
            Full bios
          </Link>
        </div>

        <div className="mt-10 grid gap-px border border-line bg-line md:grid-cols-5">
          {founders.map((founder, index) => (
            <Reveal
              key={founder.id}
              className={index === 0 ? "h-full md:col-span-3" : "h-full md:col-span-2"}
            >
              <article className="h-full bg-canvas p-6 md:p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">{founder.initials}</p>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">{founder.name}</h3>
                <p className="mt-1 text-sm text-muted">{founder.role}</p>
                <p className="mt-5 leading-relaxed text-muted">{founder.owns}</p>
                {founder.links[0] ? (
                  <a
                    href={founder.links[0].href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 font-mono text-[12px] text-ink hover:text-accent"
                  >
                    {founder.links[0].label}
                    <ArrowUpRight size={13} strokeWidth={1.75} aria-hidden />
                  </a>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
