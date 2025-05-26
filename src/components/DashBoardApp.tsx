import { Outlet } from "react-router-dom";
import { SidebarNavigation } from "@/components/Navegation/sidebar-navigation";
import { ThemeProvider, useTheme } from "@/components/Provider/theme-provider";
import { Layout } from "@/components/Layout/Layout";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

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
        <Layout className="ml-15">
          <div className="flex justify-end mb-4">
            <ThemeToggle size="md" />
          </div>
          <main className="flex-1 p-5">
            <Outlet />
          </main>
        </Layout>
      </div>
    </ThemeProvider>
  );
}
