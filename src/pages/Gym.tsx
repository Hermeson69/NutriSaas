import  WorkoutApp  from "@/components/Gym/GymFixed";
// import TrainingTrackingSection from "@/components/Gym/TrainingTrackingSection";
import { Pageconfig } from "@/components/Pageconfig";

/**
 * Gym page component.
 *
 * Renders the main gym page with a title and description,
 * and includes the WorkoutApp component for workout management.
 *
 * @returns The Gym page JSX element.
 */
export const Gym = () => {
  return (
    <Pageconfig
      title="Treino"
      description="Bem-vindo ao seu painel de controle"
    >
      {/* <TrainingTrackingSection/> */}
      <WorkoutApp/>
    </Pageconfig>
  );
};
