import type { Metadata } from "next";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, React Native mobile apps, and custom software from Jazivo Tech. Next.js, the MERN stack, and the APIs underneath.",
};

export default function ServicesPage() {
  return (
    <>
      <header className="shell pb-8 pt-16 lg:pt-24">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">Services</p>
        <div className="mt-4 grid gap-8 lg:grid-cols-12 lg:items-end">
          <h1 className="font-display text-[clamp(2.6rem,5vw,4.15rem)] font-semibold leading-[0.95] tracking-[-0.03em] lg:col-span-7">
            Web, mobile, and the systems behind them.
          </h1>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 lg:col-span-5 lg:justify-end" aria-label="On this page">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="font-mono text-[12px] text-muted hover:text-accent"
              >
                {service.index} {service.title}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {services.map((service, index) => {
        const reversed = index === 1;
        return (
          <section key={service.id} id={service.id} className="border-t border-line scroll-mt-24">
            <div className="shell grid gap-10 py-14 lg:grid-cols-12 lg:py-20">
              <div className={reversed ? "lg:col-span-6 lg:col-start-7 lg:row-start-1" : "lg:col-span-7"}>
                <p className="font-mono text-[12px] text-accent">{service.index}</p>
                <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight">{service.title}</h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{service.lead}</p>
                <ul className="mt-8 max-w-xl space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="border-t border-line pt-3 leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={reversed ? "lg:col-span-4 lg:col-start-1 lg:row-start-1" : "lg:col-span-4 lg:col-start-9"}>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">Stack</p>
                <ul className="mt-4 border-t border-line">
                  {service.stack.map((item) => (
                    <li key={item} className="border-b border-line py-2.5 font-mono text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
