// components/portfolio/active-systems.tsx
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { ProjectRecord } from "@/data/projects"

export function FeaturedProjects({ projects }: { projects: ProjectRecord[] }) {
  return (
    <section className="mb-20">
      <div className="mb-6 flex items-center justify-between gap-4 ">
        <h2 className="uppercase tracking-widest text-muted-foreground font-semibold">Featured Projects</h2>
        <Link
          href="/projects"
          className={cn(buttonVariants({ variant: "default", size: "sm" }))}
        >
          View All Projects
        </Link>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <div className="hidden md:block">
          <Table className="overflow-hidden ">
            <TableHeader>
              <TableRow>
                <TableHead className="w-28">ID</TableHead>
                <TableHead>System</TableHead>
                <TableHead>Architecture</TableHead>
                <TableHead>Core Stack</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="font-medium align-top pt-4">{project.id}</TableCell>
                  <TableCell className="align-top pt-4 whitespace-normal">
                    <span className="block font-semibold mb-1">{project.name}</span>
                    <span className="block text-muted-foreground text-xs leading-relaxed  my-5">
                      {project.shortDescription}
                    </span>
                  </TableCell>
                  <TableCell className="text-muted-foreground align-top pt-4">{project.role}</TableCell>
                  <TableCell className="align-top pt-4">{project.stack}</TableCell>
                  <TableCell className="text-right align-top pt-4">
                    <Badge variant="outline" className="rounded-sm uppercase text-[10px] tracking-wider">
                      {project.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="md:hidden">
          {projects.map((project) => (
            <div key={project.id} className="border-b p-4 last:border-b-0">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="font-medium">{project.id}</div>
                  <div className="font-semibold">{project.name}</div>
                </div>
                <Badge variant="outline" className="rounded-sm uppercase text-[10px] tracking-wider">
                  {project.status}
                </Badge>
              </div>
              <div className="text-muted-foreground text-sm space-y-1">
                <p className="text-xs leading-relaxed">{project.shortDescription}</p>
                <p>
                  <strong>Architecture:</strong> {project.role}
                </p>
                <p>
                  <strong>Core Stack:</strong> {project.stack}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}