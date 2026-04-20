import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "@/components/logo/logo";
import { getProjectBySlug, ProjectRecord, projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export async function generateStaticParams() {
  return projects.map((project) => ({ project_id: project.slug }));
}

// Component to display the articles , if there are any otherwise a simple text is displayed
function Articles({ relatedArticles }: { relatedArticles: ProjectRecord["relatedArticles"] }) {
  if (relatedArticles.length === 0 ) {
    return <h3 className="text-muted">Articles are ongoing...</h3>;
  } 

  return relatedArticles.map((article) => (
      <Link
        key={article.id}
        href={article.href}
        target="_blank"
        rel="noreferrer"
        className="group block rounded-lg border border-border bg-card p-4 hover:bg-accent/60 transition-colors"
      >
        <article className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <div className="w-full sm:w-56 shrink-0 overflow-hidden rounded-md border border-border">
            <Image
              src={article.thumbnail}
              alt={article.title}
              width={640}
              height={360}
              className="h-auto w-full"
            />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">{article.source}</p>
            <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{article.summary}</p>
            <p className="text-xs mt-3 inline-flex items-center gap-1 text-primary">
              Open article <ExternalLink className="h-3.5 w-3.5" />
            </p>
          </div>
        </article>
      </Link>
    ));
  
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ project_id: string }>;
}) {
  const { project_id } = await params;
  const project = getProjectBySlug(project_id);

  if (!project) notFound();

  return (
    <main className="max-w-5xl mx-auto py-20 px-6 min-h-screen bg-background text-foreground font-mono text-sm transition-colors duration-300">
      <header className="mb-10 border-b border-border pb-8">
        <Link
          href="/projects"
          className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "mb-4 inline-flex gap-2")}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all projects
        </Link>

        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Badge variant="outline" className="font-mono uppercase tracking-wider text-[10px] rounded-none">
            {project.id}
          </Badge>
          <Badge variant="secondary" className="uppercase tracking-wider text-[10px] rounded-sm">
            {project.status}
          </Badge>
        </div>

        <h1 className="text-4xl font-bold mb-3">{project.name}</h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">{project.description}</p>
        <div className="mt-6">
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "default", size: "sm" }), "inline-flex gap-2")}
          >
            <GithubIcon className="h-4 w-4" />
            View on GitHub
          </Link>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="uppercase tracking-widest text-muted-foreground font-semibold mb-5 text-xl">Architecture</h2>
        <div className="overflow-hidden rounded-lg border border-border bg-card">
          <Image
            src={project.architectureImage}
            alt={project.architectureAlt}
            width={1200}
            height={675}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="uppercase tracking-widest text-muted-foreground font-semibold mb-5 text-xl">Project Snapshot</h2>
        <div className="grid gap-3 text-sm border border-border rounded-lg p-5 bg-card">
          <p>
            <span className="text-muted-foreground uppercase tracking-wider text-xs">Role</span>
            <br />
            <span className="font-semibold">{project.role}</span>
          </p>
          <p>
            <span className="text-muted-foreground uppercase tracking-wider text-xs">Core Stack</span>
            <br />
            <span className="font-semibold">{project.stack}</span>
          </p>
        </div>
      </section>

      <section>
        <h2 className="uppercase tracking-widest text-muted-foreground font-semibold mb-5 text-xl">Related Articles</h2>
        <div className="space-y-4">
          <Articles relatedArticles={project.relatedArticles} />
        </div>
      </section>
    </main>
  );
}
