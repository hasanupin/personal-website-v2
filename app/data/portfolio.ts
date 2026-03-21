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
  liveUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
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
  url: string;
  icon: string;
}

export const personalInfo = {
  name: "Moh Hasanudin Muslim",
  shortName: "Hasanudin",
  title: "Full-Stack Software Engineer",
  tagline:
    "Building scalable web applications with modern technologies. Passionate about clean code, great user experiences, and turning complex problems into elegant solutions.",
  email: "hasanudin.muslim@gmail.com",
  location: "Malang, Indonesia",
  currentWork: "Singapore",
};

export const stats = [
  { label: "Years Experience", value: "8+" },
  { label: "Companies", value: "4+" },
  { label: "Projects Delivered", value: "12+" },
  { label: "Technologies", value: "15+" },
];

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
      "Developed and maintained multi-client HR and payroll SaaS platform serving businesses across Southeast Asia, similar to Mekari's model but supporting multiple client configurations.",
    highlights: [
      "Built and maintained MY Payroll and ID Payroll modules handling country-specific salary calculations, tax rules, and statutory compliance",
      "Developed Leave Module with configurable leave policies, approval workflows, and balance tracking across multiple clients",
      "Implemented multi-tenant architecture supporting diverse payroll configurations for Malaysian and Indonesian markets",
      "Collaborated with cross-functional teams to deliver client-specific customizations and integrations",
    ],
    technologies: ["PHP", "Yii2", "jQuery", "MySQL", "REST API"],
    companyUrl: "https://hreasily.com",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "code",
    skills: ["React", "Next.js", "TypeScript", "AngularJS", "Tailwind CSS", "HTML/CSS"],
  },
  {
    name: "Backend",
    icon: "server",
    skills: ["PHP", "Laravel", "Node.js", "REST API"],
  },
  {
    name: "Database",
    icon: "database",
    skills: ["MySQL", "PostgreSQL", "Oracle", "Redis", "MongoDB"],
  },
  {
    name: "DevOps & Cloud",
    icon: "cloud",
    skills: ["AWS Lambda", "Serverless", "Docker", "CI/CD", "Git"],
  },
  {
    name: "Mobile",
    icon: "smartphone",
    skills: ["Android", "React Native", "Kotlin"],
  },
];

export const projects: Project[] = [
  {
    title: "Payroll Management System",
    description:
      "A comprehensive multi-country payroll platform handling salary calculations, tax computations, and compliance for Southeast Asian markets.",
    technologies: ["Laravel", "ReactJS", "MySQL", "AWS Lambda", "Serverless"],
    liveUrl: "https://ayp-group.com",
  },
  {
    title: "HR & Attendance Platform",
    description:
      "Employee management system with time attendance tracking, leave management, and workforce analytics dashboard.",
    technologies: ["PHP", "Laravel", "AngularJS", "MySQL", "REST API"],
    liveUrl: "https://mekari.com",
  },
  {
    title: "Multi Country - Payroll Management System",
    description:
      "A multi-client payroll platform supporting MY Payroll and ID Payroll with country-specific tax rules, statutory compliance, and leave management modules.",
    technologies: ["PHP", "Yii2", "jQuery", "MySQL", "REST API"],
    liveUrl: "https://hreasily.com",
  },
  {
    title: "Industrial Quality Control System",
    description:
      "Custom quality control application for an automotive factory, enabling real-time defect tracking, inspection workflows, and quality metrics reporting to ensure production standards compliance.",
    technologies: ["PHP", "Laravel", "MySQL", "jQuery"],
  },
  {
    title: "Kanban Management System",
    description:
      "Production kanban board system for an automotive factory, managing work-in-progress limits, production scheduling, and visual workflow tracking across manufacturing stages.",
    technologies: ["PHP", "Laravel", "MySQL", "jQuery"],
  },
  {
    title: "Personal Portfolio",
    description:
      "Modern developer portfolio built with Next.js and Tailwind CSS, featuring dark mode, smooth animations, and responsive design.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/hasanupin",
  },
];

export const education: Education = {
  degree: "Bachelor of Information Systems",
  institution: "STIMIK Pradnya Paramita, Malang",
  period: "2014 - 2021",
  description:
    "Studied information systems with focus on software engineering, database management, and web technologies.",
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/hasanupin",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/muhammad-hasanudin-070a4112b",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:hasan@hasanudin.dev",
    icon: "mail",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
