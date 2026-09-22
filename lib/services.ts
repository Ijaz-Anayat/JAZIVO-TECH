export type Service = {
  id: string;
  index: string;
  title: string;
  home: string;
  lead: string;
  points: string[];
  stack: string[];
};

export const services: Service[] = [
  {
    id: "web",
    index: "01",
    title: "Web development",
    home: "Product sites and web applications in Next.js and the MERN stack — authenticated dashboards, billing, and the admin tools operators actually use.",
    lead: "We build the web product itself: the public site when it needs to sell, and the logged-in application when the business runs on it.",
    points: [
      "Marketing sites and authenticated product applications",
      "Multi-tenant SaaS, Stripe billing, and role-based dashboards",
      "Admin tools shaped around the people who will use them daily",
    ],
    stack: ["Next.js", "React", "Node.js", "Express", "MongoDB", "MySQL", "Tailwind CSS"],
  },
  {
    id: "mobile",
    index: "02",
    title: "Mobile app development",
    home: "React Native apps for iOS and Android, backed by REST APIs. The phone is the product, not a thin companion to a website.",
    lead: "One React Native codebase for iOS and Android, talking to APIs we design with the screens — not bolted on after a desktop admin exists.",
    points: [
      "React Native for iOS and Android from a shared codebase",
      "REST APIs, and Firebase where the product needs it",
      "Shipped examples: committee operations and restaurant dining",
    ],
    stack: ["React Native", "Firebase", "REST APIs", "MySQL"],
  },
  {
    id: "custom",
    index: "03",
    title: "Custom software",
    home: "Internal systems and APIs when a template will not fit: access control, payments, real-time messaging, and the data model underneath.",
    lead: "When the work is an API, a back office, or a system with rules a starter kit cannot express, we design the model and build it.",
    points: [
      "Auth with JWT, real-time with Socket.io, payments with Stripe",
      "MongoDB or MySQL, chosen for the data rather than the trend",
      "Interfaces for staff, plus the API so the data is not trapped in the pages",
    ],
    stack: ["Node.js", "Express", "MongoDB", "MySQL", "Socket.io", "Stripe", "JWT"],
  },
];
