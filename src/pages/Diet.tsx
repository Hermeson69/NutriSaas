import FoodTrackingSection from "@/components/Diet/FoodTrackingSection";
import { Metrics } from "@/components/Diet/Metrics";
import { Pageconfig } from "@/components/Pageconfig";

/**
 * Diet page component.
 *
 * Renders the main diet dashboard, including food tracking and metrics sections.
 *
 * @returns The Diet page layout with food tracking and metrics.
 */
export const Diet = () => {
  return (
    <Pageconfig title="Dieta" description="Bem-vindo ao seu painel de controle">
      <FoodTrackingSection />
      <Metrics />
    </Pageconfig>
  );
};
