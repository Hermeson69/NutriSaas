import type React from "react"
import { cn } from "@/lib/utils"

interface LayoutProps {
  children: React.ReactNode
  className?: string
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <div className="flex w-full min-dvh-screen border-red-600">
      <main className={cn("flex-1 p-6 w-full ", className)}>
        {/* Conteúdo da página */}
        <div>{children}</div>
      </main>
    </div>
  )
}
