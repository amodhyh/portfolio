"use client"

import Link from "next/link"
import { House } from "lucide-react"
import { buttonVariants } from "@/components/ui/button" // Adjust path as needed
import { cn } from "@/lib/utils"

export default function HomeButton() {
  return (
    <Link
      href="/"
      className={cn(
        buttonVariants({ variant: "outline", size: "icon" }),
        "h-9 w-9 rounded-sm border-slate-200 dark:border-slate-800 m-2"
      )}
      aria-label="Go to home page"
    >
      <House className="h-4 w-4" />
    </Link>
  )
}