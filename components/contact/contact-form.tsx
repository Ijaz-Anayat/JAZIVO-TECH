"use client";

import { FormEvent, useState, type ReactNode } from "react";
import { site } from "@/lib/site";

const projectTypes = [
  "Web application",
  "Mobile application",
  "Custom software / API",
  "Not sure yet",
] as const;

type Fields = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

const empty: Fields = { name: "", email: "", projectType: "", message: "" };

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [sent, setSent] = useState(false);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: wire form submission — Route Handler, Resend, or Formspree.
    // `fields` holds name, email, projectType, and message.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-line p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Noted locally</p>
        <p className="mt-4 text-lg leading-relaxed">
          This form is not connected to a server yet, so the message stayed in your browser. Email{" "}
          <a href={`mailto:${site.email}`} className="text-accent underline decoration-accent/40 underline-offset-4">
            {site.email}
          </a>{" "}
          and it will reach Ijaz and Jasim.
        </p>
        <button
          type="button"
          onClick={() => {
            setFields(empty);
            setSent(false);
          }}
          className="mt-6 font-mono text-[13px] text-muted hover:text-ink"
        >
          Write another note
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-7">
      <Field label="Name" htmlFor="name">
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          value={fields.name}
          onChange={(event) => update("name", event.target.value)}
          className={inputClass}
        />
      </Field>
      <Field label="Email" htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={fields.email}
          onChange={(event) => update("email", event.target.value)}
          className={inputClass}
        />
      </Field>
      <Field label="Project type" htmlFor="project-type">
        <select
          id="project-type"
          name="projectType"
          required
          value={fields.projectType}
          onChange={(event) => update("projectType", event.target.value)}
          className={`${inputClass} bg-canvas`}
        >
          <option value="" disabled>
            Select
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Message" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={fields.message}
          onChange={(event) => update("message", event.target.value)}
          className={`${inputClass} resize-y`}
        />
      </Field>
      <button
        type="submit"
        className="bg-accent px-4 py-2.5 font-mono text-[13px] tracking-wide text-accent-ink transition-colors hover:bg-ink hover:text-canvas"
      >
        Send message
      </button>
    </form>
  );
}

const inputClass =
  "w-full border-b border-line bg-transparent py-2 text-ink outline-none transition-colors placeholder:text-faint focus:border-accent";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">{label}</span>
      <span className="mt-2 block">{children}</span>
    </label>
  );
}
