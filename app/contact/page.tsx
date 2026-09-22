import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Jazivo Tech. Write to Ijaz Anayat and Jasim Mustafa directly — web, mobile, or custom software.",
};

export default function ContactPage() {
  return (
    <div className="shell grid gap-14 py-16 lg:grid-cols-12 lg:py-24">
      <header className="lg:col-span-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">Contact</p>
        <h1 className="mt-4 font-display text-[clamp(2.6rem,5vw,4.15rem)] font-semibold leading-[0.95] tracking-[-0.03em]">
          Start a project
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
          Tell us what you are trying to ship. We reply ourselves — there is no account manager
          between you and the people who will build it.
        </p>
        <dl className="mt-10 space-y-5 border-t border-line pt-6">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">Email</dt>
            <dd className="mt-1">
              <a href={`mailto:${site.email}`} className="text-lg hover:text-accent">
                {site.email}
              </a>
            </dd>
          </div>
          {site.phone ? (
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">Phone</dt>
              <dd className="mt-1">
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-lg hover:text-accent">
                  {site.phone}
                </a>
              </dd>
            </div>
          ) : null}
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">GitHub</dt>
            <dd className="mt-1">
              <a href={site.github} target="_blank" rel="noreferrer" className="text-lg hover:text-accent">
                Ijaz Anayat
              </a>
            </dd>
          </div>
        </dl>
      </header>
      <div className="lg:col-span-6 lg:col-start-7 lg:pt-16">
        <ContactForm />
      </div>
    </div>
  );
}
