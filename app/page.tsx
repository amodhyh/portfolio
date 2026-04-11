// app/page.tsx
import { systems, operations, academics, publications, infrastructureMatrix } from "@/data/data";
import { ActiveSystems } from "@/components/portfolio/active-systems";
import { OperationsLedger } from "@/components/portfolio/op-ledger";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
<main className="relative max-w-5xl mx-auto py-24 px-6 font-mono text-sm selection:bg-slate-200 min-h-screen">      
  {/* <div className="absolute inset-0 -z-10 h-full w-full bg-slate-50 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)]"></div> */}
      {/* Header */}
      <header className="mb-20 border-b border-slate-200 pb-8">
        <h1 className="text-3xl font-bold uppercase tracking-widest mb-3 text-slate-900">
          Amodh Herath // Engineering Ledger
        </h1>
        <p className="text-slate-600 text-base max-w-2xl leading-relaxed">
         Software Engineer bridging the gap between backend architecture and AI infrastructure. 
         I spend my time building scalable data pipelines, event-driven microservices, and reliable operational tooling.
        </p>
      </header>

      {/* Modular Components */}
      
      <OperationsLedger operations={operations} academics={academics} />
      <ActiveSystems systems={systems} />

      {/* Knowledge Distribution */}
      <section className="mb-20">
        <h2 className="uppercase tracking-widest text-slate-500 font-semibold mb-6">Knowledge Distribution</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {publications.map((pub, idx) => (
            <div key={idx} className="border border-slate-200 p-6 rounded-sm bg-slate-50 hover:bg-slate-100 transition-colors flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <Badge variant="secondary" className="rounded-none uppercase text-[10px] tracking-wider bg-slate-200 text-slate-800">
                  {pub.type}
                </Badge>
                <span className="text-slate-400 uppercase tracking-widest text-[10px] font-semibold">{pub.status}</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-3 leading-tight">{pub.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mt-auto">{pub.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Infrastructure Matrix */}
      <section className="mb-20">
        <h2 className="uppercase tracking-widest text-slate-500 font-semibold mb-6">Infrastructure Matrix</h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 text-sm border-t border-slate-200 pt-6">
          {Object.entries(infrastructureMatrix).map(([category, tech]) => (
            <div key={category} className="flex flex-col border-b border-slate-100 pb-4">
              <span className="text-slate-500 uppercase tracking-widest mb-1 text-xs">{category}</span>
              <span className="text-slate-900 font-medium">{tech}</span>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}