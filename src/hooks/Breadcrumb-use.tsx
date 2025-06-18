import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useLocation } from "react-router-dom";

/**
 * Hook de componente React responsável por gerar uma navegação breadcrumb
 * baseada na URL atual utilizando o React Router.
 *
 * Este componente utiliza o hook `useLocation` para obter o caminho atual,
 * divide o caminho em segmentos e renderiza uma lista de navegação breadcrumb,
 * permitindo ao usuário navegar entre os diferentes níveis da aplicação.
 *
 * Cada segmento do caminho é transformado em um link navegável, exceto o último,
 * que representa a página atual. Separadores são exibidos entre os itens.
 *
 * @returns {JSX.Element} Um componente de breadcrumb dinâmico baseado na URL.
 */
export const BreadcrumbUse = () => {
  const location = useLocation();
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;
          return (
            <BreadcrumbItem key={href}>
              <BreadcrumbLink asChild>
              <Link to={href}>{segment}</Link>
              </BreadcrumbLink>
              {!isLast && <BreadcrumbSeparator />}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
