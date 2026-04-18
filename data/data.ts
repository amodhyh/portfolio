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
      "Integrating AI capabilities into enterprise architectures, focusing on robust backend systems.",
      "Optimizing query performance and managing continuous deployment pipelines.",
      "Bridging the gap between machine learning models and highly available web services."
    ]
  }
];

export const academics: Academic[] = [
  {
    institution: "University of Jaffna",
    credential: "B.Sc. Computer Engineering",
    period: "Expected 2026",
    details: [
      "Specialization tracks: Artificial Intelligence, Software Architecture, Machine Learning, Embedded Systems",
      "Core focus on backend infrastructure and AI optimization"
    ]
  },
  {
    institution: "Central College Anuradhapura",
    credential: "G.C.E. Advanced Level",
    period: "Completed",
    details: [
      "Results: ABB",
      "Subjects: Combined Mathematics, Physics, Chemistry"
    ],
  },
  {
    institution: "Central College Anuradhapura",
    credential: "G.C.E. Ordinary Level",
    period: "Completed",
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
  "Orchestration & State": "Apache Kafka, Temporal.io, Docker",
  "Monitoring & Telemetry": "Prometheus",
  "Frameworks & UI": "Spring Boot, Next.js, Tailwind CSS, FastAPI, React",
  "AI / ML ": "Pytorch, Scikit-learn ",
  "Cloud":"AWS, Oracle(OCI)"
};