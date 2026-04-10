// data/projects.ts
export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  isOngoing?: boolean;
}

export const projects: Project[] = [
  {
    title: "Janus",
    description: "AI Security Gateway focusing on prompt injection defense and PII redaction using Go and Python.",
    tech: ["Go", "Python", "LLMs", "Docker"],
    link: "https://github.com/amodhyh/janus",
    isOngoing: true,
  },
  {
    title: "Sazzler",
    description: "Scalable e-commerce microservices platform built with Spring Boot and Kafka.",
    tech: ["Java", "Spring Boot", "Kafka", "PostgreSQL"],
    link: "https://github.com/amodhyh/sazzler",
  },
];