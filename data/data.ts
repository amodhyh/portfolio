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
`     Engineered the marketing home page and payment flow in Next.js, applying compound component 
patterns and layout best practices with deliberate attention to Core Web Vitals, achieving measurable 
improvements in LCP (Largest Contentful Paint) and TTFB (Time to First Byte) for a snappy, production-grade 
user experience.`,

`Designed and implemented the normalized relational schema underpinning the payment system integration by modelling 
transaction entities, payment states, and relational flows with forward compatibility in 
mind, ensuring the data layer could reliably support the full payment lifecycle from initiation to confirmation.`,

`Architected a full document data extraction pipeline entirely from scratch, designed to 
run in resource-constrained local environments. Integrated Docling for structured document parsing and quantised 
Small Language Models (SLMs) served via Ollama, removing any dependency on cloud inference.`,

`Built the pipeline's backend service layer with FastAPI, exposing clean async endpoints consumed 
by the Next.js frontend.Designed the API contract from the ground up with separation of concerns between 
extraction, inference, and response formatting.`,

`Applied the Singleton design pattern combined with Dependency Injection to manage SLM model loading and heavy 
object loading, ensuring the model is instantiated once and reused across requests, preventing OOM errors and cold-load overhead 
on local hardware.`,

`Authored a technical article that simultaneously serves as living documentation for the project 
bridging the gap between implementation detail and readable reference, written to be useful both 
as onboarding material for the engineering team and as a public-facing demonstration of technical depth.`,


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
    title: "Docling and SLM",
    description: "Buiding a robust data extraction pipeline with Docling and a Small Language Model",
    status: "Under review(Medium)"
  }
];

export const infrastructureMatrix = {
  "Languages": "C++, Go, Java, Python, TypeScript",
  "Orchestration & Choreography": "Apache Kafka, Temporal.io, Docker",
  "Monitoring & Telemetry": "Prometheus",
  "Frameworks & UI": "Spring , Next.js, Tailwind CSS, FastAPI, React",
  "AI / ML ": "Pytorch, Scikit-learn ",
  "Cloud": "AWS, Oracle(OCI)",
  "CI/CD": "Github-Actions",
  
};