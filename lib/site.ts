/**
 * Studio-wide constants.
 *
 * Tagline options (swap `tagline` to change the live line):
 * 1. Software built by the people who will still be here after launch.
 * 2. Full-stack products, shipped by the engineers who designed them.
 * 3. Web, mobile, and custom software — written to a standard we would maintain ourselves.
 */

type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
  /** Leave empty to hide the phone row. */
  phone: string;
  github: string;
};

export const site: SiteConfig = {
  name: "Jazivo Tech",
  tagline: "Full-stack products, shipped by the engineers who designed them.",
  description:
    "Jazivo Tech is a software studio run by Ijaz Anayat and Jasim Mustafa. We design and build web apps, mobile apps, and custom software with Next.js, the MERN stack, and React Native.",
  // TODO: set NEXT_PUBLIC_SITE_URL to the production domain before launch.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://jazivotech.com",
  // TODO: replace with the real studio inbox.
  email: "hello@jazivotech.com",
  // TODO: add a public phone number (leave empty to hide the row).
  phone: "",
  // TODO: add company social profiles. Ijaz's GitHub is the only public link we have.
  github: "https://github.com/Ijaz-Anayat",
};

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
