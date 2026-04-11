// components/portfolio/academics-ledger.tsx
import { Badge } from "@/components/ui/badge"

interface AcademicRecord {
  institution: string;
  credential: string;
  period: string;
  metrics: string[];
}

const academicData: AcademicRecord[] = [
  {
    institution: "University of Jaffna",
    credential: "B.Sc. Computer Engineering",
    period: "Expected 2026",
    metrics: [
      "Specialization tracks: Distributed Systems, Software Architecture",
      "Core focus on backend infrastructure and AI optimization"
    ]
  },
  {
    institution: "G.C.E. Advanced Level",
    credential: "Physical Sciences Stream",
    period: "Completed",
    metrics: [
      "Results: ABB",
      "Subjects: Combined Mathematics, Physics, Chemistry"
    ]
  }
];

export function AcademicsLedger() {
  return (
    <section className="mb-20">
      <h2 className="uppercase tracking-widest text-muted-foreground font-semibold mb-6">Academic Baseline</h2>
      <div className="grid gap-8 border-l border-border ml-2 pl-6">
        {academicData.map((record, idx) => (
          <div key={idx} className="relative">
            {/* Timeline node */}
            <div className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full bg-border ring-4 ring-background" />
            
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-2">
              <h3 className="text-base font-bold text-foreground">{record.credential}</h3>
              <Badge variant="outline" className="w-fit text-[10px] uppercase tracking-widest text-muted-foreground border-border rounded-none">
                {record.period}
              </Badge>
            </div>
            
            <p className="text-foreground font-medium text-sm mb-3">{record.institution}</p>
            
            <ul className="space-y-1.5 text-muted-foreground text-sm list-none">
              {record.metrics.map((metric, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 text-border">▹</span>
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}