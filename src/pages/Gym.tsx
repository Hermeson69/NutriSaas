import  WorkoutApp  from "@/components/Gym/GymFixed";
import TrainingTrackingSection from "@/components/Gym/TrainingTrackingSection";
import { Pageconfig } from "@/components/Pageconfig";

export const Gym = () => {
  return (
    <Pageconfig
      title="Treino"
      description="Bem-vindo ao seu painel de controle"
    >
      <TrainingTrackingSection/>
      <WorkoutApp/>
    </Pageconfig>
  );
};
