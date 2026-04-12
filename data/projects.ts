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

export const projects: ProjectRecord[] = [
  {
    id: "SYS-01",
    slug: "janus-security-gateway",
    name: "Janus Security Gateway",
    githubUrl: "https://github.com/amodhherath/janus-security-gateway",
    status: "Ongoing",
    role: "LLM Security Gateway",
    stack: "Go, Python, Docker",
    shortDescription:
      "Edge proxy that sanitizes prompts, detects prompt injection, and redacts sensitive entities before model execution.",
    description:
      "Janus is an edge-deployed gateway for high-risk AI workloads. Incoming prompts are routed through policy checks, injection detection pipelines, and PII redaction workers. The service is designed around low-latency request handling so production model endpoints can be protected without disrupting user experience.",
    architectureImage: "/projects/architecture/janus.svg",
    architectureAlt: "Janus architecture with API gateway, policy engine, and model sidecars",
    relatedArticles: [
      {
        id: "janus-art-1",
        title: "Prompt Injection Defense Patterns in Production",
        source: "Medium",
        href: "https://medium.com/",
        summary: "Breakdown of layered prompt defenses and runtime policy gates for enterprise LLM workloads.",
        thumbnail: "/projects/articles/prompt-defense.svg"
      },
      {
        id: "janus-art-2",
        title: "PII Redaction with Small Language Models",
        source: "Dev.to",
        href: "https://dev.to/",
        summary: "How lightweight local models can perform reliable redaction with predictable latency.",
        thumbnail: "/projects/articles/pii-redaction.svg"
      }
    ]
  },
  {
    id: "SYS-02",
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
  {
    id: "SYS-03",
    slug: "sazzler-core",
    name: "Sazzler Core",
    githubUrl: "https://github.com/amodhherath/sazzler-core",
    status: "Production",
    role: "Event-Driven Commerce Platform",
    stack: "Java, Spring Boot, Kafka",
    shortDescription:
      "Microservice platform for order lifecycle management with event sourcing and async transaction choreography.",
    description:
      "Sazzler Core powers the backend of a commerce system where inventory, payments, and fulfillment are coordinated through Kafka events. Services are isolated by domain, contracts are versioned, and idempotent consumers ensure eventual consistency under high-throughput load.",
    architectureImage: "/projects/architecture/sazzler.svg",
    architectureAlt: "Sazzler architecture with domain services connected over Kafka",
    relatedArticles: [
      {
        id: "sazzler-art-1",
        title: "Transactional Boundaries in Event-Driven Commerce",
        source: "Medium",
        href: "https://medium.com/",
        summary: "A practical look at choreography-based flows and failure handling in order pipelines.",
        thumbnail: "/projects/articles/commerce-events.svg"
      },
      {
        id: "sazzler-art-2",
        title: "Idempotency Strategies for Kafka Consumers",
        source: "Dev.to",
        href: "https://dev.to/",
        summary: "Patterns for dedupe keys, replay-safe processors, and consistency guarantees.",
        thumbnail: "/projects/articles/kafka-idempotency.svg"
      }
    ]
  }
];

export function getProjectBySlug(projectId: string) {
  return projects.find((project) => project.slug === projectId);
}
