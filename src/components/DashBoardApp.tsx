import { Routes, Route } from "react-router-dom";
import { SidebarNavigation } from "@/components/Navegation/sidebar-navigation";
import DashBoard from "@/pages/DashBoard";
import { Gym } from "@/pages/Gym";
import { Diet } from "@/pages/Diet";
import { Plans } from "@/pages/Plans";
import { Profile } from "@/pages/Profile";
import { ThemeProvider, useTheme } from "@/components/Provider/theme-provider";
import Announcements from "@/pages/Announcements";
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
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="Treino" element={<Gym />} />
              <Route path="Dieta" element={<Diet />} />
              <Route path="Planos" element={<Plans />} />
              <Route path="Perfil" element={<Profile />} />
              <Route path="Announcements" element={<Announcements />} />
            </Routes>
          </main>
        </Layout>
      </div>
    </ThemeProvider>
  );
}
