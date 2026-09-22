import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <div className="shell py-28">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">404</p>
      <h1 className="mt-4 max-w-[12ch] font-display text-5xl font-semibold leading-[0.95] tracking-tight">
        That path does not exist.
      </h1>
      <div className="mt-8">
        <ButtonLink href="/">Back home</ButtonLink>
      </div>
    </div>
  );
}
