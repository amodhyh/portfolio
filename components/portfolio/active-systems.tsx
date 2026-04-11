// components/portfolio/active-systems.tsx
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { System } from "@/data/data"

export function ActiveSystems({ systems }: { systems: System[] }) {
  return (
    <section className="mb-20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="uppercase tracking-widest text-slate-500 font-semibold">Active Systems</h2>
      </div>
      <div className="border border-slate-200 rounded-sm bg-white overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50">
            <TableRow>
              <TableHead className="w-[100px] text-slate-900">ID</TableHead>
              <TableHead className="text-slate-900">System</TableHead>
              <TableHead className="text-slate-900">Architecture</TableHead>
              <TableHead className="text-slate-900">Core Stack</TableHead>
              <TableHead className="text-right text-slate-900">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {systems.map((sys) => (
              <TableRow key={sys.id} className="border-slate-100 group">
                <TableCell className="font-medium text-slate-900 align-top pt-4">{sys.id}</TableCell>
                <TableCell className="align-top pt-4">
                  <span className="block font-semibold mb-1">{sys.name}</span>
                  <span className="block text-slate-500 text-xs leading-relaxed max-w-[250px]">{sys.details}</span>
                </TableCell>
                <TableCell className="text-slate-600 align-top pt-4">{sys.role}</TableCell>
                <TableCell className="align-top pt-4">{sys.stack}</TableCell>
                <TableCell className="text-right align-top pt-4">
                  <Badge variant="outline" className="rounded-none border-slate-300 text-slate-700 uppercase text-[10px] tracking-wider">
                    {sys.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}