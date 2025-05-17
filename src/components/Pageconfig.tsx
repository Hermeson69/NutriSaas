import type React from "react";
import { BreadcrumbUse } from "@/components/Breadcrumb-use";
import { cn } from "@/lib/utils";
import { BellDot, Settings2 } from "lucide-react";
// import { useLocation } from "react-router-dom";

/**
 * props para a coniguração das paginas passando o titulo descrição (caso a mesma tenha) e children que é o restante da pagina abaixo do BreadcrumbUse.
 */
interface Pageconfig {
  title: string;
  description?: string;
  children: React.ReactNode;
  classNameProp?: string;
}

export function Pageconfig({ title, description, children, classNameProp }: Pageconfig) {

  return (
    <div className="space-y-2">
      <div className="w-full space-y-1 space-x-2 flex items-center px-1">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex items-center ml-auto space-x-2">
          <BellDot size={20} className={cn("hover:cursor-pointer")} />
          <Settings2 size={20} className={cn("hover:cursor-pointer")} />
        </div>
      </div>
      {description && (
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      )}
      <BreadcrumbUse />
      <div className={classNameProp}>{children}</div>
    </div>
  );
}
