import { Outlet } from "react-router-dom";
import { SidebarNavigation } from "@/components/Navegation/sidebar-navigation";
import { ThemeProvider, useTheme } from "@/components/Provider/theme-provider";
import { Layout } from "@/components/Layout/Layout";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

/**
 * DashboardApp is the main layout component for the dashboard section of the application.
 * 
 * - Applies theme (dark or light) based on user/system preference using `ThemeProvider` and `useTheme`.
 * - Renders a fixed sidebar navigation (`SidebarNavigation`).
 * - Provides a layout with a top-right theme toggle (`ThemeToggle`).
 * - Displays routed content via `<Outlet />` inside the main area.
 * - Uses conditional classes to switch background and text colors according to the current theme.
 */
export default function DashboardApp() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <ThemeProvider defaultTheme="system">
      <div
        className={cn(
          "flex min-h-screen",
          isDark ? "bg-bark text-light" : "bg-light-50 text-dark"
        )}
      >
        <SidebarNavigation className="fixed" />
        <Layout className="ml-14 mr-0">
          <div className="flex justify-end mb-4 mr-5">
            <ThemeToggle size="md" />
          </div>
          <main className="flex-1 p-4">
            <Outlet />
          </main>
        </Layout>
      </div>
    </ThemeProvider>
  );
}
