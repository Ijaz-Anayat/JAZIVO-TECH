import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/lib/process";

export function Process() {
  return (
    <section className="border-t border-line bg-raised" aria-labelledby="process-heading">
      <div className="shell grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">Process</p>
          <h2
            id="process-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl"
          >
            How an engagement runs
          </h2>
          <p className="mt-4 max-w-xs text-muted">
            Four steps. No separate account team between you and the repository.
          </p>
        </div>
        <ol className="lg:col-span-7 lg:col-start-6">
          {processSteps.map((step, index) => (
            <li key={step.index}>
              <Reveal delay={index * 0.05}>
                <div className="border-t border-line py-8">
                  <p className="font-mono text-[12px] text-accent">{step.index}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-3 max-w-lg leading-relaxed text-muted">{step.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
