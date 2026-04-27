export interface RelatedArticle {
  id: string;
  title: string;
  source: string;
  href: string;
  summary: string;
  thumbnail: string;
}

export interface ProjectRecord {
  id: string ;
  slug: string;
  name: string;
  githubUrl: string;
  status: "Ongoing" | "Production" | "Upcoming" | "Completed";
  role: string;
  stack: string;
  shortDescription: string;
  description: string;
  architectureImage: string;
  architectureAlt: string;
  relatedArticles: RelatedArticle[] ;
}



// Featured Projects displayed int the cards
const featured_projects = ["sazzler", "janus", "centurion"] as const;





export function getProjectBySlug(projectId: string): ProjectRecord | undefined {
  return projects.find((project) => project.slug === projectId);
}
// get the featured project's ProjectRecord
export function getFeaturedProjects(): ProjectRecord[] {
  return featured_projects
    .map((projectName) => getProjectBySlug(projectName))
    .filter((project): project is ProjectRecord => project !== undefined);
}

export const projects: ProjectRecord[] = [
  {
    id: "SYS-01",
    slug: "janus",
    name: "Janus Security Gateway",
    githubUrl: "https://github.com/amodhyh/Janus",
    status: "Ongoing",
    role: "AI/Backend Engineer",
    stack: "Go, Python, gRPC, Redis, Docker",
    shortDescription:
      "An ultra-low latency AI API gateway and reverse proxy featuring asynchronous prompt injection defense, PII redaction, and automated LLM fallback routing.",
    description:
      `Janus is an enterprise-grade AI edge proxy designed to secure, route, and audit LLM traffic. Built in Go for 
      sub-millisecond network I/O, it implements a polyglot architecture utilizing gRPC to communicate with a 
      dedicated Python sidecar for asynchronous Small Language Model (SLM) security inference. The system prioritizes architectural
       resilience and zero-trust governance. Core capabilities include a Redis-backed Token Bucket algorithm for 
       distributed rate limiting, declarative YAML configuration for seamless provider failovers (Circuit Breaker pattern), 
       and out-of-band malicious payload interception to prevent token burn. By isolating the inference engine from the core 
       reverse proxy, Janus provides strict data sovereignty and prompt injection defense without sacrificing the 
       Time-To-First-Token (TTFT) performance critical to production AI applications.`,
    architectureImage: "/projects/architecture/janus.svg",
    architectureAlt: "Event-driven architecture diagram showing the Go control plane, Redis data plane, and the Python gRPC inspection layer.",
    relatedArticles: []
  },
  {
    id: "SYS-02",
    slug: "sazzler",
    name: "Sazzler",
    githubUrl: "https://github.com/amodhyh/Project-Sazzler",
    status: "Ongoing",
    role: "Backend Engineer",
    stack: "Java, Spring, Kafka",
    shortDescription:
      "Microservices-based e-commerce backend built on event-sourcing principles and async choreographies.",
    description:
      `Sazzler operates as a heavy-lifting microservices platform handling core commerce domains. 
      It relies on Kafka for asynchronous communication between inventory, ordering, and payment services. 
      The architecture heavily emphasizes idempotent consumers, strict domain boundaries, and eventual 
      consistency to maintain high throughput and reliability under load.`,
    architectureImage: "/projects/architecture/sazzler.svg",
    architectureAlt: "Sazzler microservices topology communicating via Kafka event backbone",
    relatedArticles: [
      
    ]
  },
  {
    id: "SYS-03",
    slug: "developer-portfolio",
    name: "Portfolio",
    githubUrl: "https://github.com/amodhyh/portfolio",
    status: "Production",
    role: "Frontend Engineer",
    stack: "Next.js, TypeScript, Vercel",
    shortDescription:
      "Static site engineered to showcase backend architecture, system design case studies, and engineering maturity.",
    description: `A high-performance portfolio built with strict TypeScript and Next.js. 
    It focuses on clean UI layout and fast content delivery for technical case studies. 
    The repository demonstrates modern frontend best practices, componentreusability, and automated deployment pipelines.`,
    architectureImage: "/projects/architecture/portfolio.svg",
    architectureAlt: "Next.js static site generation pipeline",
    relatedArticles: []
  },
  {
    id: "SYS-04",
    slug: "centurion",
    name: "Centurion AIOps",
    githubUrl: "https://github.com/amodhyh/centurion-aiops",
    status: "Upcoming",
    role: "AI/SRE Engineer",
    stack: "Go, Temporal, Prometheus",
    shortDescription:
      "Workflow-driven operations agent for incident triage, rollback orchestration, and self-healing execution.",
    description:
      `Centurion automates operational response to telemetry anomalies. 
      It consumes alerts, evaluates runbook strategies, and executes remediations through Temporal workflows. 
      The architecture prioritizes observability, deterministic retries, and controlled escalation paths to human operators.`,
    architectureImage: "/projects/architecture/centurion.svg",
    architectureAlt: "Centurion architecture with telemetry ingestion and Temporal orchestration",
    relatedArticles: [
      
    ]
  },
  
  {
  id: "SYS-05",
  slug: "sortify",
  name: "Sortify",
  githubUrl: "https://github.com/amodhyh/Sortify",
  status: "Completed",
  role: "Fullstack AI Engineer",
  stack: "React, FastAPI, Pytorch",
  shortDescription:
    "A full-stack AI application that processes and classifies waste materials using a custom machine learning model.",
  description:
    `Sortify addresses waste management inefficiencies through
     automated image classification. A custom finetuned PyTorch CNN model is served via a FastAPI backend, 
     exposing endpoints for low-latency image inference. The React frontend consumes these APIs to provide users 
     with real-time feedback on garbage categorization, facilitating accurate recycling and disposal routin for 12 types 
     of garbage Classes.`,
  architectureImage: "/projects/architecture/sortify.svg",
  architectureAlt: "Sortify architecture highlighting a React frontend communicating with a FastAPI and PyTorch inference server",
  relatedArticles: []
},
{
  id: "SYS-06",
  slug: "sinhala-emotion-recognition",
  name: "Sinhala Emotion Recognition",
  githubUrl: "https://github.com/amodhyh/emotion-detection", // Update with your actual repo link
  status: "Ongoing",
  role: "AI Researcher & Engineer",
  stack: "SinBERT (RoBERTa), PyTorch, CNN, FastAPI",
  shortDescription:
    `A deep learning research project focused on multi-class emotion detection(Ekaman's 
    Basic Emotions) for the low-resource Sinhala language using a hybrid SinBERT-CNN architecture.`,
  description:
    `This project addresses the lack of emotional NLP tools for Sinhala by introducing a manually annotated dataset of 10,000+ social media comments[cite: 54, 257]. 
    I engineered a hybrid SinBERT-CNN model to extract contextual embeddings alongside local syntactic n-grams. 
    The research involved a rigorous ablation study which revealed that while hybrid models excel in English, 
    the agglutinative nature of Sinhala and sub-word tokenization fragmentation can lead to 
    'destructive interference'. 
    The final system provides a benchmark Macro F1-score of ~0.71, establishing a 
    baseline for future multi-class emotion detection in low-resource South Asian languages.`,
  architectureImage: "/projects/architecture/sinhala-emotion.svg",
  architectureAlt: "Architecture diagram showing SinBERT (RoBERTa-based) encoder passing contextual embeddings to parallel 1D-CNN layers with kernel sizes 3, 4, and 5",
  relatedArticles: []
},
];