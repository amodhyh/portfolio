// app/page.tsx
import { projects } from "./data/projects";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
          Amodh Herath
        </h1>
        <p className="text-muted-foreground text-lg max-w-150">
          Computer Engineering graduate specializing in Backend Systems, 
          Distributed Infrastructure, and AI Systems.
        </p>
      </section>

      {/* Projects Grid */}
      <section>
        <h2 className="text-2xl font-semibold mb-8">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col border-border/50 hover:border-border transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{project.title}</CardTitle>
                  {project.isOngoing && (
                    <Badge variant="outline" className="text-[10px] uppercase tracking-widest">
                      Active
                    </Badge>
                  )}
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="rounded-sm font-mono text-[11px]">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

          


    </div>
  );
}