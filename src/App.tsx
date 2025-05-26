import { Toaster } from "@/components/ui/sonner";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/index";
import LoginPage from "@/pages/LoginPage";
import OnboardingPage from "@/pages/OnboardingPage";
import DashboardApp from "@/components/DashBoardApp";
import NotFound from "@/pages/NotFound";
import DashBoard from "./pages/DashBoard";
import { Gym } from "./pages/Gym";
import { Diet } from "./pages/Diet";
import { Plans } from "./pages/Plans";
import { Profile } from "./pages/Profile";
import Announcements from "./pages/Announcements";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/DashBoard" element={<DashboardApp />}>
          <Route index element={<DashBoard />} />
          <Route path="Treino" element={<Gym />} />
          <Route path="Dieta" element={<Diet />} />
          <Route path="Planos" element={<Plans />} />
          <Route path="Perfil" element={<Profile />} />
          <Route path="Announcements" element={<Announcements />} />
        </Route>

        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
