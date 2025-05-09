import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
  import { Link, useLocation } from "react-router-dom";
  
  export const BreadcrumbUse = () => {
    const location = useLocation();
    const pathSegments = location.pathname
      .split("/")
      .filter((segment) => segment);
  
    return (
      <Breadcrumb>
        <BreadcrumbList>
          {/* Home */}
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
  
          {pathSegments.map((segment, index) => {
            const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
            return (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem key={href}>
                  <BreadcrumbLink asChild>
                    <Link to={href}>{segment}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    );
  };