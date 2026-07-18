import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Download the CV of Amodh Herath — AI and backend software engineer focused on distributed architecture and system reliability.",
  openGraph: {
    title: "CV | Amodh Herath",
    description: "Download the CV of Amodh Herath.",
    url: "https://amodhyh.vercel.app/cv",
    type: "website",
    images:""
  },
};

export default function CVLayout({ children }: { children: React.ReactNode }) {
  return children;
}
