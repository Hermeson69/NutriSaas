import type React from "react"
import { BreadcrumbUse } from "@/components/Breadcrumb-use"
/// Propos da
interface Pageconfig {
  title: string // titulo padrão e obrigatorio
  description?: string // descrição que né, pode ter oi não
  children: React.ReactNode // restante da página
}

export function Pageconfig({ title, description, children }: Pageconfig) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        {description && <p className="text-gray-600">{description}</p>}
        <BreadcrumbUse />
      </div>
      <div>{children}</div>
    </div>
  )
}
