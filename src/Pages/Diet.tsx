import FoodTrackingSection from "@/components/Diet/FoodTrackingSection";
import { Pageconfig } from "@/components/Pageconfig";

export const Diet = () => {
  return (
    <Pageconfig
      title="Dieta"
      description="Bem-vindo ao seu painel de controle"
    >
      <FoodTrackingSection/>
    </Pageconfig>
  );
};
