"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

function subscribe(onStoreChange: () => void) {
  void onStoreChange
  return () => {}
}

function getClientSnapshot() {
  return true
}

function getServerSnapshot() {
  return false
}

export function ThemeToggle() {
  const isClient = React.useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot)

  // Extract the global control functions from the hook
  const { setTheme, resolvedTheme } = useTheme()

  // 3. Simple toggle logic using the 'resolvedTheme'
  // resolvedTheme is better than 'theme' because it accounts for 'system' settings.
  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  // On the server (and during initial hydration), render a placeholder to avoid mismatches.
  if (!isClient) {
    return <Button variant="outline" size="icon" disabled className="invisible rounded-sm" />
  }

  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={toggleTheme}
      className="rounded-sm"
    >
      {resolvedTheme === "dark" ? (
        <Moon  />
      ) : (
        <Sun  />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}