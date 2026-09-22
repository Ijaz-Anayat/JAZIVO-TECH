import type { Metadata } from "next";
import { WorkIndex } from "@/components/work/work-index";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Software shipped by Jazivo Tech: gym SaaS, commerce, real-time dashboards, React Native apps, and PHP operations systems.",
};

export default function WorkPage() {
  return (
    <>
      <header className="shell grid gap-6 pb-10 pt-16 lg:grid-cols-12 lg:pt-24">
        <h1 className="font-display text-[clamp(2.6rem,5vw,4.15rem)] font-semibold leading-[0.95] tracking-[-0.03em] lg:col-span-7">
          Work
        </h1>
        <p className="text-lg leading-relaxed text-muted lg:col-span-5 lg:pt-4">
          Nine systems we have designed and built, from multi-tenant SaaS to hostel admin. Filter by
          the stack if you are matching a project to a technology.
        </p>
      </header>
      <WorkIndex />
    </>
  );
}
