import FoodTrackingSection from "@/components/Diet/FoodTrackingSection";
import { FitnessMetrics } from "@/components/fitness-metrics";
import TrainingTrackingSection from "@/components/Gym/TrainingTrackingSection";
import { Pageconfig } from "@/components/Pageconfig";
// import { useTheme } from "@/components/Provider/theme-provider";
// import { cn } from "@/lib/utils";

export default function DashBoard() {
  // const { theme } = useTheme();
  // const isDark = theme === "dark";
  return (
    <Pageconfig
      title="Dashboard"
      description="Bem-vindo ao seu painel de controle"
      // classNameProp={cn( isDark ? "bg-bark text-gray-100" : "bg-light-50 text-dark")}
    >
      <FitnessMetrics className="flex-1" />
      <FoodTrackingSection />
      <TrainingTrackingSection/>
    </Pageconfig>
  );
}
