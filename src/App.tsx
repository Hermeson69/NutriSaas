import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { SidebarNavigation } from "@/components/sidebar-navigation"

import DashBoard from "@/Pages/DashBoard"
import { Gym } from "@/Pages/Gym"
import { Diet } from "@/Pages/Diet"
import { Plans } from "@/Pages/Plans"
import {Profile} from "@/Pages/Profile"
// import { ThemeProvider } from "@/components/theme-provider"
import Announcements from "@/Pages/Announcements"
import {Layout} from "@/components/Layout"

export default function App() {
  return (
    // <ThemeProvider defaultTheme="system">
    <Router>
      <div className="flex min-h-screen">
        <SidebarNavigation />
        <Layout>
          <main className="flex-1 p-5">
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/Gym" element={<Gym />} />
              <Route path="/Diet" element={<Diet />} />
              <Route path="/Plans" element={<Plans />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Announcements" element={<Announcements />} />
            </Routes>
          </main>
          {/* Removido o BreadcrumbUse daqui */}
        </Layout>
      </div>
    </Router>
    // </ThemeProvider>
  )
}
