"use client";

// Projects Page which contains all the projects and their portals to 


// app/projects/page.tsx
import { useMemo, useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "@/components/logo/logo";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getFeaturedProjects, ProjectRecord, projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export default function ProjectsIndexPage() {
  const [query, setQuery] = useState("");

  // featured projects Cards
  const featuredProjects : ProjectRecord[] = getFeaturedProjects();

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return projects;
    }

    return projects.filter((project) => {
      return (
        project.name.toLowerCase().includes(normalizedQuery) ||
        project.id.toLowerCase().includes(normalizedQuery) ||
        project.status.toLowerCase().includes(normalizedQuery) ||
        project.role.toLowerCase().includes(normalizedQuery) ||
        project.stack.toLowerCase().includes(normalizedQuery)
      );
    });
  }, [query]);

  return (
    <main className="max-w-5xl mx-auto py-24 px-6 min-h-screen bg-background text-foreground font-mono text-sm transition-colors duration-300">
      
      {/* Header */}
      <header className="mb-16 border-b border-border pb-8">
        <h1 className="text-3xl font-bold uppercase tracking-widest mb-3 text-foreground">
          System Registry
        </h1>
        <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
          A comprehensive archive of all active, deprecated, and prototyping infrastructure systems, 
          services, and research implementations.
        </p>
      </header>

      {/* Featured Cards */}
      <section className="mb-14">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="uppercase tracking-widest text-muted-foreground font-semibold text-xs">Featured Projects</h2>
          <p className="text-[11px] text-muted-foreground">Top highlights for quick review</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (

            <Card key={project.id} className="group h-full border-border bg-card hover:border-primary hover:bg-accent/50 transition-all duration-200 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-border to-transparent group-hover:from-primary transition-colors" />

              <CardHeader className="pt-6">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="border-border text-muted-foreground font-mono text-[10px] uppercase tracking-widest rounded-none">
                    {project.id}
                  </Badge>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-muted text-muted-foreground uppercase text-[9px] tracking-wider rounded-sm">
                      {project.status}
                    </Badge>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.name} on GitHub`}
                      className={cn(buttonVariants({ variant: "outline", size: "icon-xs" }), "rounded-sm")}
                    >
                      <GithubIcon className="size-3.5" />
                    </Link>
                  </div>
                </div>
                <Link href={`/projects/${project.slug}`} className="block">
                  <CardTitle className="text-xl text-foreground mb-1 group-hover:text-primary transition-colors">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </CardDescription>
                </Link>
              </CardHeader>

              <CardContent className="mt-auto pb-6">
                <div className="text-xs font-mono text-muted-foreground pt-4 border-t border-border">
                  <span className="font-semibold text-foreground">STACK: </span>
                  {project.stack}
                </div>
                <Link href={`/projects/${project.slug}`} className="mt-4 inline-flex text-xs text-primary hover:underline">
                  Open project details
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Searchable Registry Table */}
      <section>
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="uppercase tracking-widest text-muted-foreground font-semibold text-xs">All Projects Registry</h2>
          <div className="w-full sm:w-80">
            <label htmlFor="project-search" className="sr-only">
              Search projects
            </label>
            <input
              id="project-search"
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by name, id, stack, role..."
              className="w-full h-9 rounded-md border border-border bg-background px-3 text-xs outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-24">ID</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Stack</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProjects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="text-muted-foreground text-xs">{project.id}</TableCell>
                  <TableCell>
                    <Link href={`/projects/${project.slug}`} className="font-semibold hover:text-primary transition-colors">
                      {project.name}
                    </Link>
                    <p className="text-xs text-muted-foreground mt-1">{project.role}</p>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="uppercase text-[9px] tracking-wider rounded-sm">
                      {project.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">{project.stack}</TableCell>
                  <TableCell className="text-right">
                    <div className="inline-flex items-center gap-2">
                      <Link
                        href={`/projects/${project.slug}`}
                        className={cn(buttonVariants({ variant: "outline", size: "xs" }))}
                      >
                        Details
                      </Link>
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${project.name} on GitHub`}
                        className={cn(buttonVariants({ variant: "outline", size: "icon-xs" }))}
                      >
                        <GithubIcon className="size-3.5" />
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {filteredProjects.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                    No projects found for this query.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </section>
    </main>
  );
}