import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { featuredProjects, projects } from "@/lib/projects";

export function FeaturedWork() {
  return (
    <section className="border-t border-line" aria-labelledby="work-heading">
      <div className="shell py-16 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">Selected work</p>
            <h2
              id="work-heading"
              className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl"
            >
              Systems we have shipped
            </h2>
          </div>
          <Link
            href="/work"
            className="font-mono text-[13px] text-muted transition-colors hover:text-accent"
          >
            {String(featuredProjects.length).padStart(2, "0")} of {String(projects.length).padStart(2, "0")} — all projects
          </Link>
        </div>

        <div className="mt-10">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.04}>
              <article className="group grid gap-3 border-t border-line py-7 md:grid-cols-12 md:items-baseline md:gap-6">
                <p className="font-mono text-[12px] text-faint md:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="md:col-span-6">
                  <h3 className="font-display text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-md text-muted">{project.blurb}</p>
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent md:col-span-2">
                  {project.kind}
                </p>
                <p className="font-mono text-[12px] leading-relaxed text-faint md:col-span-3 md:text-right">
                  {project.stack.slice(0, 3).join(" · ")}
                </p>
              </article>
            </Reveal>
          ))}
          <div className="border-t border-line" />
        </div>
      </div>
    </section>
  );
}
