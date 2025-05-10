"use client"

import { useTheme } from "./theme-provider"
import { Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ThemeToggleProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function ThemeToggle({ className, size = "md" }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

 
  const sizeMap = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  }

  const iconSize = sizeMap[size]

  return (
    <div
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "flex items-center justify-center cursor-pointer transition-transform duration-500",
        isDark ? "rotate-180" : "rotate-0",
        className,
      )}
      role="button"
      tabIndex={0}
      aria-label={isDark ? "Mudar para tema claro" : "Mudar para tema escuro"}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          setTheme(isDark ? "light" : "dark")
        }
      }}
    >
      {isDark ? (
        <Sun className={cn(iconSize, "text-yellow-500 rotate-0 transition-all")} />
      ) : (
        <Moon className={cn(iconSize, "text-blue-500 rotate-0 transition-all")} />
      )}
    </div>
  )
}
