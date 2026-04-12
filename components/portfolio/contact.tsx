// components/portfolio/contact-protocol.tsx
import { Mail, Key } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "../logo/logo"

export function ContactProtocol() {
  return (
    <section className="mb-20">
      <h2 className="uppercase tracking-widest text-muted-foreground font-semibold mb-6">Contact </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Email Endpoint */}
        <a 
          href="mailto:amodhwork@gmail.com" 
          className="flex items-center gap-4 p-4 border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-colors rounded-sm group"
        >
          <div className="p-2 bg-muted text-muted-foreground group-hover:text-foreground transition-colors rounded-sm">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Primary Email</span>
            <span className="block text-sm font-medium text-foreground">Gmail</span>
          </div>
        </a>

        {/* GitHub Endpoint */}
        <a 
          href="https://github.com/amodhyh" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-colors rounded-sm group"
        >
          <div className="p-2 bg-muted text-muted-foreground group-hover:text-foreground transition-colors rounded-sm">
            <GithubIcon className="h-5 w-5" />
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Architecture & Source</span>
            <span className="block text-sm font-medium text-foreground">Github</span>
          </div>
        </a>

        {/* LinkedIn Endpoint */}
        <a 
          href="https://linkedin.com/in/amodhyh" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-colors rounded-sm group"
        >
          <div className="p-2 bg-muted text-muted-foreground group-hover:text-foreground transition-colors rounded-sm">
            <LinkedinIcon className="h-5 w-5" />
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Professional Network</span>
            <span className="block text-sm font-medium text-foreground">Linkedin</span>
          </div>
        </a>


      </div>
    </section>
  )
}