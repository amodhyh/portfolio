import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A comprehensive archive of all active, deprecated, and prototyping infrastructure systems, services, and research implementations.",
  openGraph: {
    title: "Projects | Amodh Herath",
    description:
      "A comprehensive archive of all active, deprecated, and prototyping infrastructure systems, services, and research implementations.",
    url: "https://amodhyh.vercel.app/projects",
    type: "website",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
