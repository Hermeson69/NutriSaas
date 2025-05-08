import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { SidebarNavigation } from "./components/sidebar-navigation"

import DashBoard from "./Pages/DashBoard"
import  {Diet}  from "./Pages/Diet"

// Add other page components as needed

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <SidebarNavigation />
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/diet" element={<Diet />} />
            {/* Add other routes as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  )
}
