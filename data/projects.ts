export interface RelatedArticle {
  id: string;
  title: string;
  source: string;
  href: string;
  summary: string;
  thumbnail: string;
}

export interface ProjectRecord {
  id: string;
  slug: string;
  name: string;
  githubUrl: string;
  status: "Ongoing" | "Production" | "Research";
  role: string;
  stack: string;
  shortDescription: string;
  description: string;
  architectureImage: string;
  architectureAlt: string;
  relatedArticles: RelatedArticle[];
}

export function getProjectBySlug(projectId: string) {
  return projects.find((project) => project.slug === projectId);
}

export const projects: ProjectRecord[] = [
  {
    id: "SYS-01",
    slug: "janus",
    name: "Janus",
    githubUrl: "https://github.com/amodhyh/Janus",
    status: "Ongoing",
    role: "Security Model Service",
    stack: "Go, Docker",
    shortDescription:
      "Command-line security gateway with modular security model services, configuration management, and Docker Compose deployment.",
    description:
      "Janus is a lightweight Go-based security tool designed for command-line operations and model-driven protection layers. It includes dedicated services for security modeling, configuration handling, and containerized deployment via Docker Compose. The architecture supports low-overhead security checks and modular components, making it suitable for protecting CLI workflows or early-stage gateway scenarios in production environments.",
    architectureImage: "/projects/architecture/janus.svg",
    architectureAlt: "Janus architecture showing cmd/janus entrypoint, config layer, and security model service",
    relatedArticles: [
      {
        id: "janus-art-1",
        title: "Building Modular Security Models in Go",
        source: "Dev.to",
        href: "https://dev.to/",
        summary: "Practical patterns for command-line security tools using Go modules and service isolation.",
        thumbnail: "/projects/articles/go-security-model.svg"
      },
      {
        id: "janus-art-2",
        title: "Docker Compose for Security Tooling",
        source: "Medium",
        href: "https://medium.com/",
        summary: "How to containerize Go-based security services for consistent development and deployment.",
        thumbnail: "/projects/articles/docker-security.svg"
      }
    ]
  },
  {
    id: "SYS-02",
    slug: "sazzler-core",
    name: "Sazzler Core",
    githubUrl: "https://github.com/amodhyh/sazzler-core",
    status: "Ongoing",
    role: "Event-Driven Commerce Platform",
    stack: "Java, Spring Boot, Kafka",
    shortDescription:
      "Microservices-based e-commerce backend built on event-sourcing principles and async choreographies.",
    description:
      "Sazzler operates as a heavy-lifting microservices platform handling core commerce domains. It relies on Kafka for asynchronous communication between inventory, ordering, and payment services. The architecture heavily emphasizes idempotent consumers, strict domain boundaries, and eventual consistency to maintain high throughput and reliability under load.",
    architectureImage: "/projects/architecture/sazzler.svg",
    architectureAlt: "Sazzler microservices topology communicating via Kafka event backbone",
    relatedArticles: [
      {
        id: "sazzler-art-1",
        title: "Event-Driven Choreography in Spring Boot",
        source: "Medium",
        href: "https://medium.com/",
        summary: "Managing distributed transactions and eventual consistency without two-phase commit.",
        thumbnail: "/projects/articles/commerce-events.svg"
      },
      {
        id: "sazzler-art-2",
        title: "Designing Idempotent Kafka Consumers",
        source: "Dev.to",
        href: "https://dev.to/",
        summary: "Practical implementation of deduplication keys and retry logic in Java.",
        thumbnail: "/projects/articles/kafka-idempotency.svg"
      }
    ]
  },
  {
    id: "SYS-03",
    slug: "developer-portfolio",
    name: "Engineering Portfolio",
    githubUrl: "https://github.com/amodhyh/portfolio",
    status: "Production",
    role: "Frontend Engineering",
    stack: "Next.js, TypeScript, Vercel",
    shortDescription:
      "Static site engineered to showcase backend architecture, system design case studies, and engineering maturity.",
    description:
      "A high-performance portfolio built with strict TypeScript and Next.js. It focuses on clean UI layout and fast content delivery for technical case studies. The repository demonstrates modern frontend best practices, component reusability, and automated deployment pipelines.",
    architectureImage: "/projects/architecture/portfolio.svg",
    architectureAlt: "Next.js static site generation pipeline",
    relatedArticles: []
  },
  {
    id: "SYS-04",
    slug: "centurion-aiops",
    name: "Centurion AIOps",
    githubUrl: "https://github.com/amodhherath/centurion-aiops",
    status: "Ongoing",
    role: "Autonomous SRE Agent",
    stack: "Go, Temporal, Prometheus",
    shortDescription:
      "Workflow-driven operations agent for incident triage, rollback orchestration, and self-healing execution.",
    description:
      "Centurion automates operational response to telemetry anomalies. It consumes alerts, evaluates runbook strategies, and executes remediations through Temporal workflows. The architecture prioritizes observability, deterministic retries, and controlled escalation paths to human operators.",
    architectureImage: "/projects/architecture/centurion.svg",
    architectureAlt: "Centurion architecture with telemetry ingestion and Temporal orchestration",
    relatedArticles: [
      {
        id: "centurion-art-1",
        title: "Designing Deterministic Incident Workflows",
        source: "Hashnode",
        href: "https://hashnode.com/",
        summary: "An opinionated guide for reliable recovery pipelines using workflow engines.",
        thumbnail: "/projects/articles/incident-workflows.svg"
      },
      {
        id: "centurion-art-2",
        title: "From Alert Fatigue to Actionable Signals",
        source: "Substack",
        href: "https://substack.com/",
        summary: "Techniques for reducing noise and improving SRE response quality using telemetry contracts.",
        thumbnail: "/projects/articles/alert-fatigue.svg"
      }
    ]
  },
];