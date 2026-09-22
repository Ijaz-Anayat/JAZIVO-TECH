import { ArrowUpRight } from "lucide-react";
import type { Founder } from "@/lib/team";

export function FounderProfile({ founder }: { founder: Founder }) {
  return (
    <article id={founder.id} className="grid scroll-mt-24 gap-8 border-t border-line py-12 lg:grid-cols-12 lg:gap-10 lg:py-16">
      <div className="lg:col-span-4">
        {/* Monogram stands in until a portrait file is added. */}
        <div className="flex aspect-[4/5] max-w-xs flex-col justify-between border border-line bg-inset p-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">{founder.role}</p>
          <p className="font-display text-6xl font-semibold tracking-tight" aria-hidden>
            {founder.initials}
          </p>
        </div>
      </div>
      <div className="lg:col-span-7 lg:col-start-6">
        <h2 className="font-display text-4xl font-semibold tracking-tight">{founder.name}</h2>
        <p className="mt-3 text-lg text-muted">{founder.owns}</p>
        <div className="mt-6 space-y-4 text-lg leading-relaxed">
          {founder.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {founder.history ? (
          <ul className="mt-8 space-y-2 border-t border-line pt-6">
            {founder.history.map((item) => (
              <li key={item.what} className="grid gap-1 sm:grid-cols-[7rem_1fr]">
                <span className="font-mono text-[12px] text-accent">{item.when}</span>
                <span className="text-muted">{item.what}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {founder.skills ? (
          <p className="mt-6 font-mono text-[12px] leading-relaxed text-faint">
            {founder.skills.join(" · ")}
          </p>
        ) : null}
        {founder.links.length > 0 ? (
          <ul className="mt-6 flex flex-wrap gap-5">
            {founder.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[13px] text-ink hover:text-accent"
                >
                  {link.label}
                  <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
