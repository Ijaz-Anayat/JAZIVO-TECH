export type Project = {
  title: string;
  blurb: string;
  summary: string;
  stack: string[];
  kind: "Web" | "Mobile" | "Systems";
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "SaaS Gym Portal",
    blurb: "Multi-tenant gym software with Stripe billing and role-based dashboards.",
    summary:
      "A platform where each gym is its own tenant: members, plans, and a dashboard scoped by role. Stripe runs subscriptions. JWT keeps staff and members on the routes they are allowed to see.",
    stack: ["Next.js", "React", "Node.js", "MongoDB", "Stripe", "JWT"],
    kind: "Web",
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    blurb: "A MERN storefront with cart, Stripe checkout, and an admin for inventory.",
    summary:
      "A full store on the MERN stack — catalog, cart, and Stripe checkout — plus an admin dashboard for the people running inventory. Redux holds the buying flow together on the client.",
    stack: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe"],
    kind: "Web",
    featured: true,
  },
  {
    title: "Social Media Dashboard",
    blurb: "Live notifications and messaging, with a Next.js dashboard on top.",
    summary:
      "An operations view for a social product. Notifications and messages arrive over Socket.io, MongoDB stores the stream, and Next.js keeps the dashboard usable as the events pile up.",
    stack: ["Next.js", "MongoDB", "Socket.io"],
    kind: "Web",
    featured: true,
  },
  {
    title: "Task Management App",
    blurb: "A team task board with drag-and-drop and JWT accounts.",
    summary:
      "A task board a small team can leave open all day: drag-and-drop ordering, JWT accounts, and a Tailwind interface that stays quiet. Node and MongoDB hold the board.",
    stack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "JWT"],
    kind: "Web",
    featured: true,
  },
  {
    title: "Committee Management App",
    blurb: "Committee operations on React Native, backed by MySQL and REST.",
    summary:
      "A React Native app for running committee work from a phone. MySQL stores the records. REST APIs carry them. Built for operators, not as a miniature desktop admin.",
    stack: ["React Native", "MySQL", "REST APIs"],
    kind: "Mobile",
    featured: true,
  },
  {
    title: "Restaurant Dining App",
    blurb: "A dining app in React Native, with Firebase and REST behind the floor.",
    summary:
      "Ordering and service flow for a restaurant floor, in React Native. Firebase and REST APIs back the app. The interface is for staff and guests in the room, not a generic delivery marketplace.",
    stack: ["React Native", "Firebase", "REST APIs"],
    kind: "Mobile",
    featured: true,
  },
  {
    title: "Learning Management System",
    blurb: "Courses, learners, and the admin screens to run them.",
    summary:
      "A learning system in PHP and MySQL: courses, learners, and staff screens styled with Bootstrap. Structured so the people running the program can operate it without a developer in the room.",
    stack: ["PHP", "MySQL", "Bootstrap"],
    kind: "Systems",
    featured: false,
  },
  {
    title: "Library Management System",
    blurb: "Catalog, lending, and member records, with an API under the pages.",
    summary:
      "Catalog, lending, and member records for a library. PHP and MySQL hold the data, Bootstrap covers the staff interface, and REST APIs keep the records from being trapped inside the pages.",
    stack: ["PHP", "MySQL", "Bootstrap", "REST APIs"],
    kind: "Systems",
    featured: false,
  },
  {
    title: "Hostel Management System",
    blurb: "Rooms, residents, and the daily admin of a hostel.",
    summary:
      "Rooms, residents, and the daily administration of a hostel — PHP, MySQL, and Bootstrap. A practical operations system, not a brochure with a login form.",
    stack: ["PHP", "MySQL", "Bootstrap"],
    kind: "Systems",
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const workFilters = [
  "All",
  "Next.js",
  "React Native",
  "Node.js",
  "MongoDB",
  "PHP",
] as const;

export type WorkFilter = (typeof workFilters)[number];
