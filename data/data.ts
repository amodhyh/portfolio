// data/data.ts

export interface Experience {
  company: string;
  role: string;
  period: string;
  details: string[];
}

export interface Publication {
  type: string;
  title: string;
  description: string;
  status: string;
  link?: string;
}

export interface Academic {
  institution: string;
  credential: string;
  period: string;
  details: string[];
}

export const experience: Experience[] = [
  {
    company: "Dilexus Infotech",
    role: "Fullstack AI Engineering Intern",
    period: "2025 - Present",
    details: [
      `Co-developed the frontend dashboard and user workspaces using Next.js, TypeScript, and Tailwind CSS, focusing on responsive design, stateless authentication, and Core Web Vitals optimizations.`,
      `Designed and implemented a normalized 3NF relational database schema using Prisma and PostgreSQL, integrating soft-deletion and automated audit trails to ensure financial data compliance.`,
      `Engineered a localized, air-gapped document intelligence pipeline by integrating IBM's Docling for geometric layout parsing and serving quantized Small Language Models (SLMs) via Ollama.`,
      `Built the asynchronous API and service layer with FastAPI, implementing validation schemas with Pydantic and decoupling heavy computation from web requests using background task queues.`,
      `Containerized services using multi-stage Docker configurations to reduce footprint, and established secure bridge networks to isolate internal services and enable local GPU acceleration.`
    ]
  }
];

export const academics: Academic[] = [
  {
    institution: "University of Jaffna",
    credential: "B.Sc. Computer Engineering (hons)",
    period: "2026",
    details: [
      ` Systems & Infrastructure: Operating Systems, Computer Networking, Computer Architecture, Computer and Network Security.`,
        
        `Intelligence & Data: Machine Learning, Deep Learning, AI, Data Mining.`,

        `Software Engineering: Software Architecture, DS & Algorithms, Database Systems.`,

        `Research - Emotion Recognition of Sinhala Language Texts in Social Media`
    ]
  },
  {
    institution: "Central College Anuradhapura",
    credential: "G.C.E. Advanced Level",
    period: "2020",
    details: [
      "Results: ABB",
      "Subjects: Combined Mathematics, Physics, Chemistry"
    ],
  },
  {
    institution: "Central College Anuradhapura",
    credential: "G.C.E. Ordinary Level",
    period: "2017",
    details: [
      "Results: 9As",
      "Subjects: 6 common subjects, English Literature, Tamil, Information Technology"
    ],
  }
];

export const publications: Publication[] = [
  // {
  //   type: "IEEE Extended Abstract",
  //   title: "Emotion Recognition of Sinhala Language Texts in Social Media",
  //   description: "Fine-tuned SinBERT models to classify complex linguistic sentiment and emotional markers in localized data streams. Focus on NLP and model optimization.",
  //   status: "Authored"
  // },
  
  {
    type: "Technical Broadcasting",
    title: "Privacy-First Document Extraction: A Local Docling & SLM Pipeline",
    description: "Building a robust data extraction pipeline with Docling and a Small Language Model",
    status: "Published",
    link: "https://medium.com/@amodhwork/privacy-first-document-extraction-a-local-docling-slm-pipeline-3640267491a4"
  }
];

export const infrastructureMatrix = {
  "Programming Languages": "C++, Go, Java, Python, TypeScript",
  "Application Frameworks": "Spring Boot, FastAPI, Next.js, React, Tailwind CSS",
  "Persistence & Data": "OracleDB, MySQL, PostgreSQL, Redis, MongoDB",
  "Event Streaming & Workflows": "Apache Kafka, Temporal.io",
  "AI / Machine Learning": "PyTorch, Scikit-learn, Ollama",
  // "Infrastructure as Code (IaC)": "Terraform, AWS CDK",
  "Backend-as-a-Service (BaaS)": "Supabase, Firebase",
  "Containerization & Runtime": "Docker",
  "Cloud Providers": "AWS, Oracle Cloud (OCI)",
  "CI/CD & GitOps": "GitHub Actions",
  "Observability & Telemetry": "Prometheus, Grafana, OpenTelemetry"
  
};