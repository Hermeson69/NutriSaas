import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SidebarNavigation } from "@/components/Navegation/sidebar-navigation";

import DashBoard from "@/Pages/DashBoard";
import { Gym } from "@/Pages/Gym";
import { Diet } from "@/Pages/Diet";
import { Plans } from "@/Pages/Plans";
import { Profile } from "@/Pages/Profile";
import { ThemeProvider } from "@/components/Provider/theme-provider";
// import  LandingPage  from "@/Pages/LandingPage"
import Announcements from "@/Pages/Announcements";
import { Layout } from "@/components/Layout/Layout";
import { ThemeToggle } from "./components/theme-toggle";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <Router>
        <div className="flex min-h-screen">
          <SidebarNavigation />
          <Layout>
            <div className="flex justify-end mb-4">
              <ThemeToggle size="md" />
            </div>
            <main className="flex-1 p-5 ">
              <Routes>
                <Route path="/" element={<DashBoard />} />
                <Route path="/Gym" element={<Gym />} />
                <Route path="/Diet" element={<Diet />} />
                <Route path="/Plans" element={<Plans />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Announcements" element={<Announcements />} />
              </Routes>
            </main>
          </Layout>
        </div>
      </Router>
    </ThemeProvider>
  );
}
