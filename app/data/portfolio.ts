export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
  companyUrl?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  /** The company site behind the platform. Not a public demo of the product itself. */
  companyUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface SocialLink {
  name: string;
  /** Shown as the link text, so the label always says where the link goes. */
  handle: string;
  url: string;
}

export const personalInfo = {
  name: "Moh Hasanudin Muslim",
  shortName: "Hasanudin",
  title: "Full-Stack Software Engineer",
  tagline:
    "I build payroll and HR platforms for Southeast Asia: multi-country salary calculation, statutory tax and compliance rules, and the APIs that keep them in sync.",
  email: "hasan@hasanudin.dev",
  location: "Malang, Indonesia",
  currentWork: "Singapore",
  availability: "Open to new roles",
};

export const experiences: Experience[] = [
  {
    company: "AYP Group",
    role: "Software Engineer",
    period: "2022 - Present",
    location: "Singapore (Remote)",
    description:
      "Building and maintaining payroll and HR technology platforms serving clients across Southeast Asia.",
    highlights: [
      "Developed and maintained scalable payroll systems processing transactions for multiple countries",
      "Implemented automated testing and CI/CD pipelines improving deployment reliability",
      "Collaborated in Agile teams conducting code reviews and mentoring junior developers",
      "Optimized database queries and API performance reducing response times significantly",
    ],
    technologies: ["PHP", "Laravel", "ReactJS", "MySQL", "AWS Lambda", "Serverless"],
    companyUrl: "https://ayp-group.com",
  },
  {
    company: "Mekari",
    role: "Software Engineer",
    period: "2021 - 2022",
    location: "Jakarta, Indonesia (Remote)",
    description:
      "Contributed to Indonesia's leading SaaS platform for HR, accounting, and business operations.",
    highlights: [
      "Built features for time attendance and employee management modules",
      "Developed RESTful APIs integrating with third-party services",
      "Participated in system architecture discussions and technical documentation",
      "Improved application performance through code optimization and refactoring",
    ],
    technologies: ["PHP", "Laravel", "AngularJS", "MySQL", "REST API"],
    companyUrl: "https://mekari.com",
  },
  {
    company: "HREasily",
    role: "Software Engineer",
    period: "2019 - 2021",
    location: "Singapore (Remote)",
    description:
      "Developed and maintained a multi-client HR and payroll SaaS platform serving businesses across Southeast Asia, supporting a separate payroll configuration per client.",
    highlights: [
      "Built and maintained MY Payroll and ID Payroll modules handling country-specific salary calculations, tax rules, and statutory compliance",
      "Developed the Leave module with configurable leave policies, approval workflows, and balance tracking across multiple clients",
      "Implemented multi-tenant architecture supporting diverse payroll configurations for Malaysian and Indonesian markets",
      "Collaborated with cross-functional teams to deliver client-specific customizations and integrations",
    ],
    technologies: ["PHP", "Yii2", "jQuery", "MySQL", "REST API"],
    companyUrl: "https://hreasily.com",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "frontend",
    skills: ["React", "Next.js", "TypeScript", "AngularJS", "Tailwind CSS", "HTML/CSS"],
  },
  {
    name: "backend",
    skills: ["PHP", "Laravel", "Node.js", "REST API"],
  },
  {
    name: "database",
    skills: ["MySQL", "PostgreSQL", "Oracle", "Redis", "MongoDB"],
  },
  {
    name: "cloud",
    skills: ["AWS Lambda", "Serverless", "Docker", "CI/CD", "Git"],
  },
  {
    name: "mobile",
    skills: ["Android", "React Native", "Kotlin"],
  },
];

/**
 * Projects carrying a companyUrl are shipped platforms behind a client login, so
 * the link goes to the company, never to a demo that does not exist. The rest are
 * internal systems with no public surface and are described only.
 */
export const projects: Project[] = [
  {
    title: "Payroll Management System",
    description:
      "A multi-country payroll platform handling salary calculations, tax computations, and statutory compliance for Southeast Asian markets.",
    technologies: ["Laravel", "ReactJS", "MySQL", "AWS Lambda", "Serverless"],
    companyUrl: "https://ayp-group.com",
  },
  {
    title: "HR & Attendance Platform",
    description:
      "Employee management system with time attendance tracking, leave management, and a workforce analytics dashboard.",
    technologies: ["PHP", "Laravel", "AngularJS", "MySQL", "REST API"],
    companyUrl: "https://mekari.com",
  },
  {
    title: "Multi Country Payroll Management System",
    description:
      "A multi-client payroll platform supporting MY Payroll and ID Payroll with country-specific tax rules, statutory compliance, and leave management modules.",
    technologies: ["PHP", "Yii2", "jQuery", "MySQL", "REST API"],
    companyUrl: "https://hreasily.com",
  },
  {
    title: "Industrial Quality Control System",
    description:
      "Quality control application for an automotive factory: real-time defect tracking, inspection workflows, and quality metrics reporting against production standards.",
    technologies: ["PHP", "Laravel", "MySQL", "jQuery"],
  },
  {
    title: "Kanban Management System",
    description:
      "Production kanban board for an automotive factory, managing work-in-progress limits, production scheduling, and visual workflow tracking across manufacturing stages.",
    technologies: ["PHP", "Laravel", "MySQL", "jQuery"],
  },
  {
    title: "This Site",
    description:
      "Next.js App Router portfolio with a class-based theme toggle and no client-side JavaScript outside the navbar.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    // TODO: point at the repository once it is public; this is the profile, and the label says so.
    githubUrl: "https://github.com/hasanupin",
  },
];

export const education: Education = {
  degree: "Bachelor of Information Systems",
  institution: "STIMIK Pradnya Paramita, Malang",
  period: "2014 - 2021",
  description:
    "Information systems with a focus on software engineering, database management, and web technologies.",
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    handle: "github.com/hasanupin",
    url: "https://github.com/hasanupin",
  },
  {
    name: "LinkedIn",
    handle: "linkedin.com/in/muhammad-hasanudin",
    url: "https://linkedin.com/in/muhammad-hasanudin-070a4112b",
  },
  {
    name: "Email",
    handle: personalInfo.email,
    url: `mailto:${personalInfo.email}`,
  },
];

/** The rail index in each section is taken from this order, so nav and page cannot drift. */
export const navLinks = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "education", href: "#education" },
  { label: "contact", href: "#contact" },
];

/** Zero-padded rail index for a section id, derived from navLinks order. */
export function sectionIndex(href: string): string {
  return String(navLinks.findIndex((l) => l.href === href) + 1).padStart(2, "0");
}
