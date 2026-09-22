import type { Metadata } from "next";
import { FounderProfile } from "@/components/team/founder-profile";
import { founders } from "@/lib/team";

export const metadata: Metadata = {
  title: "About",
  description:
    "Jazivo Tech is Ijaz Anayat and Jasim Mustafa — two full-stack developers who opened their own studio so the people who promise the work also write it.",
};

export default function AboutPage() {
  return (
    <>
      <header className="shell grid gap-10 pb-16 pt-16 lg:grid-cols-12 lg:pb-8 lg:pt-24">
        <div className="lg:col-span-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">About</p>
          <h1 className="mt-4 font-display text-[clamp(2.6rem,5vw,4.15rem)] font-semibold leading-[0.95] tracking-[-0.03em]">
            Two developers. One standard for the code.
          </h1>
        </div>
        <div className="space-y-5 text-lg leading-relaxed lg:col-span-6 lg:col-start-7 lg:pt-16">
          <p>
            Jazivo Tech started because the two of us were already doing this work inside other
            studios — architecture, client conversations, and the code in between. Ijaz was shipping
            full-stack product at Wise Code Studio, after MERN work at CFE Solutions and a frontend
            internship at Nexodus Inc. Jasim works the same stack, and he is the one who turns a
            conversation into a scope, a proposal, and a date we will actually keep.
          </p>
          <p className="text-muted">
            We opened our own practice so the person who promises a timeline is also in the
            repository. Clients get a short path: one conversation about the product, one standard
            for the code, and two founders who both still write it.
          </p>
        </div>
      </header>

      <div className="shell pb-8">
        {founders.map((founder) => (
          <FounderProfile key={founder.id} founder={founder} />
        ))}
      </div>
    </>
  );
}
