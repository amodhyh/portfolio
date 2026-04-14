// components/portfolio/operations-ledger.tsx
import { Experience, Academic } from "@/data/data"

export function OperationsLedger({ operations }: { operations: Experience[]}) {
  return (
    <section className="mb-20 ">
      {/* Experience */}
      <div>
        <h2 className="uppercase tracking-widest text-muted-foreground font-semibold mb-6">Operational Experience</h2>
        <div className="grid gap-8">
          {operations.map((op, idx) => (
            <div key={idx} className="border-l-2 border-primary pl-5 py-1">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-base font-bold">{op.role}</h3>
              </div>
              <div className="flex justify-between items-baseline mb-4">
                <p className="text-muted-foreground font-medium text-sm">{op.company}</p>
                <span className="text-muted-foreground uppercase tracking-widest text-[10px]">{op.period}</span>
              </div>
              <ul className="space-y-2 text-muted-foreground list-none text-sm">
                {op.details.map((detail, i) => (
                  <li key={i} className="relative pl-3 before:content-['▹'] before:absolute before:left-0 before:text-muted-foreground">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  )
}