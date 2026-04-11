// app/page.tsx
import { systems, operations, academics, publications, infrastructureMatrix } from "@/data/data";

import { ActiveSystems } from "@/components/portfolio/active-systems";
import { OperationsLedger } from "@/components/portfolio/op-ledger";
import { AcademicsLedger } from "@/components/portfolio/academic";

import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="relative max-w-5xl mx-auto py-24 px-6 font-mono text-sm selection:bg-primary selection:text-primary-foreground min-h-screen bg-background text-foreground transition-colors duration-300">      
      
      {/* Header */}
      <header className="mb-20 border-b border-border pb-8 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold uppercase tracking-widest mb-3 text-foreground">
            Amodh Herath // Engineering Ledger
          </h1>
          <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
            Software Engineer bridging the gap between backend architecture and AI infrastructure. 
            I spend my time building scalable data pipelines, event-driven microservices, and reliable operational tooling.
          </p>
        </div>
        <ThemeToggle />
      </header>

      {/* Modular Components */}
      <OperationsLedger operations={operations} academics={academics} />
      <ActiveSystems systems={systems} />
      <AcademicsLedger></AcademicsLedger>
      {/* Knowledge Distribution */}
      <section className="mb-20">
        <h2 className="uppercase tracking-widest text-muted-foreground font-semibold mb-6">Knowledge Distribution</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {publications.map((pub, idx) => (
            // 5. Updated Card container to use bg-card and border-border
            <div key={idx} className="border border-border p-6 rounded-sm bg-card hover:bg-accent hover:text-accent-foreground transition-colors flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <Badge variant="secondary" className="rounded-none uppercase text-[10px] tracking-wider">
                  {pub.type}
                </Badge>
                <span className="text-muted-foreground uppercase tracking-widest text-[10px] font-semibold">{pub.status}</span>
              </div>
              <h3 className="text-base font-bold text-card-foreground mb-3 leading-tight">{pub.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mt-auto">{pub.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Infrastructure Matrix */}
      <section className="mb-20">
        <h2 className="uppercase tracking-widest text-muted-foreground font-semibold mb-6">Infrastructure Matrix</h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 text-sm border-t border-border pt-6">
          {Object.entries(infrastructureMatrix).map(([category, tech]) => (
            <div key={category} className="flex flex-col border-b border-border pb-4">
              <span className="text-muted-foreground uppercase tracking-widest mb-1 text-xs">{category}</span>
              <span className="text-foreground font-medium">{tech}</span>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}