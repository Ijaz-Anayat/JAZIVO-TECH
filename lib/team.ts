export type FounderLink = {
  label: string;
  href: string;
};

export type Founder = {
  id: string;
  name: string;
  role: string;
  initials: string;
  photo?: string;
  owns: string;
  paragraphs: string[];
  history?: { when: string; what: string }[];
  skills?: string[];
  links: FounderLink[];
};

export const founders: Founder[] = [
  {
    id: "ijaz",
    name: "Ijaz Anayat",
    role: "Co-Founder & CTO",
    initials: "IA",
    photo: "/team/ijaz-anayat.png",
    owns: "Development, architecture, technical decisions, and code quality.",
    paragraphs: [
      "Ijaz owns the engineering of Jazivo Tech: how a system is structured, which tradeoffs we accept, and what is allowed to merge. He is a full-stack developer across the MERN stack, Next.js, and React Native.",
      "He currently works as a Full Stack Developer at Wise Code Studio. Before that he was a Junior MERN Developer at CFE Solutions, and earlier a Frontend Intern at Nexodus Inc. The studio’s technical standard is the one he is willing to maintain.",
    ],
    history: [
      { when: "Now", what: "Full Stack Developer, Wise Code Studio" },
      { when: "Previously", what: "Junior MERN Developer, CFE Solutions" },
      { when: "Earlier", what: "Frontend Intern, Nexodus Inc" },
    ],
    skills: [
      "JavaScript",
      "React",
      "Next.js",
      "React Native",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "Tailwind CSS",
      "REST APIs",
    ],
    links: [{ label: "GitHub", href: "https://github.com/Ijaz-Anayat" }],
  },
  {
    id: "jasim",
    name: "Jasim Mustafa",
    role: "Co-Founder & CEO / COO",
    initials: "JM",
    photo: "/team/jasim-mustafa.jpg",
    owns: "Client relationships, requirements, proposals, project management — and hands-on development.",
    // TODO: add Jasim's specific bio and links
    paragraphs: [
      "Jasim runs the client side of an engagement: the first conversation, the requirements, the proposal, and the plan that keeps delivery honest. He also builds. His core stack is the same as Ijaz’s — MERN and Next.js — so the person who scopes the work can read the repository.",
    ],
    links: [],
  },
];
