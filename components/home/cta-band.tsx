import { ButtonLink } from "@/components/ui/button-link";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="border-t border-line" aria-labelledby="cta-heading">
      <div className="shell grid gap-10 py-16 lg:grid-cols-12 lg:items-end lg:py-24">
        <div className="border-l-2 border-accent pl-6 lg:col-span-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">Contact</p>
          <h2
            id="cta-heading"
            className="mt-3 font-display text-3xl font-semibold leading-[1.05] tracking-tight md:text-5xl"
          >
            If you have a system to build, write to us directly.
          </h2>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <a href={`mailto:${site.email}`} className="font-mono text-sm text-accent hover:text-ink">
            {site.email}
          </a>
          <div className="mt-6">
            <ButtonLink href="/contact">Start a project</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
