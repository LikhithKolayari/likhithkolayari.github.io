export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "deriv",
    role: "Full Stack Developer",
    company: "Deriv",
    location: "Dubai",
    period: "Jan 2022 – Present",
    highlights: [
      "Architected a back-office application and led a team of five developers to streamline operations and boost efficiency",
      "Designed and delivered a KYC application in OutSystems, reducing development time by 40% and accelerating compliance rollout.",
      "Refactored frontend in React, reducing bundle size by 70% and improving LCP by 3s, directly boosting customer onboarding speed.",
      "Re-architected state management using React Query + Hooks, lowering technical debt and improving application scalability and maintainability.",
      "Built secure REST APIs with Buildship/Xano and implemented role-based access (JWT, AWS Cognito), ensuring compliance with regulatory and security standards.",
      "Automated CI/CD pipelines with GitHub Actions and Vercel, enabling zero-downtime deployments and faster release cycles.",
      "Mentored junior developers through pair programming, code reviews, and workshops, increasing team productivity and knowledge-sharing.",
      "Advocated for responsive design, accessibility, and performance tuning, improving usability across web and mobile platforms.",
    ],
  },
  {
    id: "motorola",
    role: "Software Developer",
    company: "Motorola Solutions",
    location: "Bangalore",
    period: "May 2020 – Jan 2022",
    highlights: [
      "Developed an Angular + Node.js application for configuring radio systems, enhancing UI/UX and workflow productivity by 2%.",
      "Secured webhook integrations with HMAC signatures and implemented service-to-service authentication, improving system security and reliability.",
      "Improved sprint velocity by ~15% through Agile best practices, accelerating delivery of business-critical features.",
      "Collaborated with UX and backend teams to align features with consistent design standards and enhanced responsiveness.",
    ],
  },
  {
    id: "infosys",
    role: "Systems Engineer",
    company: "Infosys Ltd",
    location: "Bangalore",
    period: "Aug 2017 – May 2020",
    highlights: [
      "Built operational dashboards, automating workflows and reducing support team workload by 60%.",
      "Implemented unit testing for RxJS observables with Jasmine-marbles, achieving 98% test coverage and strengthening system reliability.",
      "Delivered onboarding tools for 1,000+ trainees, streamlining developer training and increasing adoption speed.",
      "Automated deployments with custom scripts, reducing manual interventions across multiple projects.",
      "Developed enterprise web modules in Agile sprints, integrating APIs with backend systems for business-critical solutions.",
    ],
  },
];
