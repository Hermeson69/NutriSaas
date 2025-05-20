import FoodTrackingSection from "@/components/Diet/FoodTrackingSection";
import { Metrics } from "@/components/Diet/Metrics";
import { Pageconfig } from "@/components/Pageconfig";

export const Diet = () => {
  return (
    <Pageconfig
      title="Dieta"
      description="Bem-vindo ao seu painel de controle"
    >
      <FoodTrackingSection/>
      <div className="flex ml-4">
        <Metrics/>
      </div>
    </Pageconfig>
  );
};
