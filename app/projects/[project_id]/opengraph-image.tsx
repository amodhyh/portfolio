import { ImageResponse } from "next/og";
import { getProjectBySlug, projects } from "@/data/projects";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((project) => ({ project_id: project.slug }));
}

const statusColors: Record<string, string> = {
  Ongoing: "#3b82f6",
  Production: "#22c55e",
  Upcoming: "#f59e0b",
  Completed: "#8b9ab0",
};

export default async function Image({
  params,
}: {
  params: Promise<{ project_id: string }>;
}) {
  const { project_id } = await params;
  const project = getProjectBySlug(project_id);

  if (!project) {
    return new ImageResponse(
      <div style={{ background: "#070d1c", width: "100%", height: "100%" }} />,
      { ...size }
    );
  }

  const statusColor = statusColors[project.status] ?? "#8b9ab0";

  return new ImageResponse(
    (
      <div
        style={{
          background: "#070d1c",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              color: "#8b9ab0",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            {project.id}
          </div>
          <div
            style={{
              fontSize: "12px",
              color: statusColor,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              border: `1px solid ${statusColor}`,
              padding: "4px 12px",
            }}
          >
            {project.status}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              color: "#f5f8fc",
              lineHeight: "1.1",
              letterSpacing: "0.02em",
            }}
          >
            {project.name}
          </div>
          <div
            style={{
              fontSize: "20px",
              color: "#8b9ab0",
              letterSpacing: "0.05em",
            }}
          >
            {project.stack}
          </div>
        </div>

        <div
          style={{
            fontSize: "14px",
            color: "#3d5478",
            letterSpacing: "0.15em",
          }}
        >
          amodhyh.vercel.app / projects
        </div>
      </div>
    ),
    { ...size }
  );
}
