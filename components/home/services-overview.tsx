import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/lib/services";

export function ServicesOverview() {
  return (
    <section className="border-t border-line" aria-labelledby="services-heading">
      <div className="shell grid gap-10 py-16 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">Services</p>
          <h2
            id="services-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl"
          >
            What we build
          </h2>
          <p className="mt-4 max-w-xs text-muted">
            Three lines of work. The same two people are on all of them.
          </p>
        </div>
        <div className="lg:col-span-8">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.05}>
              <article className="grid gap-3 border-t border-line py-7 sm:grid-cols-[4.5rem_1fr] sm:gap-6">
                <p className="font-mono text-[12px] text-accent">{service.index}</p>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight">
                    <Link href={`/services#${service.id}`} className="hover:text-accent">
                      {service.title}
                    </Link>
                  </h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-muted">{service.home}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
