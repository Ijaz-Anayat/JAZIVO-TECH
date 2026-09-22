"use client";

import { useMemo, useState } from "react";
import { projects, workFilters, type WorkFilter } from "@/lib/projects";

export function WorkIndex() {
  const [filter, setFilter] = useState<WorkFilter>("All");

  const visible = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((project) => project.stack.includes(filter));
  }, [filter]);

  return (
    <div>
      <div className="sticky top-16 z-30 border-y border-line bg-canvas">
        <div className="shell flex gap-1 overflow-x-auto py-3" role="toolbar" aria-label="Filter projects by technology">
          {workFilters.map((item) => {
            const count =
              item === "All" ? projects.length : projects.filter((project) => project.stack.includes(item)).length;
            const active = filter === item;
            return (
              <button
                key={item}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(item)}
                className={`shrink-0 px-3 py-1.5 font-mono text-[12px] tracking-wide transition-colors ${
                  active ? "bg-ink text-canvas" : "text-muted hover:text-ink"
                }`}
              >
                {item}
                <span className={active ? "opacity-70" : "text-faint"}> {String(count).padStart(2, "0")}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="shell py-6">
        {visible.length === 0 ? (
          <p className="py-16 text-muted">No projects in that stack.</p>
        ) : (
          <ul>
            {visible.map((project) => {
              const index = projects.indexOf(project) + 1;
              return (
                <li key={project.title} className="grid gap-4 border-b border-line py-8 md:grid-cols-12 md:gap-6">
                  <p className="font-mono text-[12px] text-faint md:col-span-1">
                    {String(index).padStart(2, "0")}
                  </p>
                  <div className="md:col-span-7">
                    <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{project.title}</h2>
                    <p className="mt-3 max-w-xl leading-relaxed text-muted">{project.summary}</p>
                  </div>
                  <div className="md:col-span-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">{project.kind}</p>
                    <p className="mt-3 font-mono text-[12px] leading-relaxed text-faint">
                      {project.stack.join(" · ")}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
