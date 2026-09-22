import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="blueprint pointer-events-none absolute inset-0" aria-hidden />
      <div className="shell relative grid gap-14 pb-16 pt-14 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-20">
        <div className="lg:col-span-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            Software studio · Web, mobile, custom
          </p>
          <h1 className="mt-6 max-w-[11em] font-display text-[clamp(2.7rem,6.4vw,4.6rem)] font-semibold leading-[0.94] tracking-[-0.035em]">
            {site.tagline}
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            Jazivo Tech is Ijaz Anayat and Jasim Mustafa. We design and build web apps, mobile
            apps, and custom software — MERN, Next.js, and React Native — and we stay responsible
            for the code after it ships.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/contact">
              Start a project
              <ArrowUpRight size={15} strokeWidth={1.75} aria-hidden />
            </ButtonLink>
            <ButtonLink href="/work" variant="line">
              See our work
            </ButtonLink>
          </div>
        </div>

        <aside className="border border-line lg:col-span-5 lg:mt-10">
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">Capabilities</p>
            <p className="font-mono text-[11px] text-accent">03</p>
          </div>
          <ul>
            {services.map((service) => (
              <li key={service.id} className="grid grid-cols-[2.5rem_1fr] gap-2 border-b border-line px-4 py-4 last:border-b-0">
                <span className="font-mono text-[11px] text-accent">{service.index}</span>
                <div>
                  <p className="font-display text-lg font-semibold tracking-tight">{service.title}</p>
                  <p className="mt-1 font-mono text-[12px] leading-relaxed text-faint">
                    {service.stack.slice(0, 4).join(" · ")}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
