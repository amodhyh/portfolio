"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  
  // 1. Extract the global control functions from the hook
  const { setTheme, resolvedTheme } = useTheme()

  // 2. Handle the Hydration error: 
  // We only show the UI after the component has mounted to the client.
  useEffect(() => {
    setMounted(true)
  }, [])

  // 3. Simple toggle logic using the 'resolvedTheme'
  // resolvedTheme is better than 'theme' because it accounts for 'system' settings.
  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  // Before mounting, we render a placeholder or nothing to avoid layout shifts
  if (!mounted) {
    return <Button variant="outline" size="icon" disabled className="opacity-0" />
  }

  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={toggleTheme}
      className="h-9 w-9 rounded-sm border-slate-200 dark:border-slate-800"
    >
      {resolvedTheme === "dark" ? (
        <Moon className="h-[1.2rem] w-[1.2rem] text-slate-100" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] text-slate-900" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}