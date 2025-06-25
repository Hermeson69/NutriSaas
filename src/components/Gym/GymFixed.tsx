import { useState, useEffect } from "react";
import { WeeklyCalendar } from "@/components/Gym/WeeklyCalendar";
import { WorkoutSheet } from "@/components/Gym/WorkoutSheet";
import { WorkoutService } from "@/hooks/services/workoutService";
import type { WeeklyPlan, Workout } from "@/types/workout";

export default function WorkoutApp() {
  const [weeklyPlan, setWeeklyPlan] = useState<WeeklyPlan | null>(null);
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadWeeklyPlan();
  }, []);

  const loadWeeklyPlan = async () => {
    try {
      setLoading(true);
      // TODO: Pegar userId do contexto de autenticação
      const plan = await WorkoutService.getWeeklyPlan(1);
      setWeeklyPlan(plan);
    } catch (error) {
      console.error("Erro ao carregar plano semanal:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectWorkout = async (workoutId: number) => {
    try {
      const workout = await WorkoutService.getWorkout(workoutId);
      if (workout) {
        setSelectedWorkout(workout);
      }
    } catch (error) {
      console.error("Erro ao carregar treino:", error);
    }
  };

  const handleBackToCalendar = () => {
    setSelectedWorkout(null);
    // Recarregar dados para atualizar progresso
    loadWeeklyPlan();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando seus treinos...</p>
        </div>
      </div>
    );
  }

  if (selectedWorkout) {
    return (
      <WorkoutSheet workout={selectedWorkout} onBack={handleBackToCalendar} />
    );
  }

  return (
    <div className="max-w-auto mx-auto p-4 mt-10">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Meus Treinos</h1>
        <p className="text-muted-foreground">
          Acompanhe seu progresso semanal e execute seus treinos
        </p>
      </div>

      {weeklyPlan ? (
        <WeeklyCalendar
          weeklyPlan={weeklyPlan}
          onSelectWorkout={handleSelectWorkout}
        />
      ) : (
        <div className="text-center text-muted-foreground">
          Nenhum plano semanal encontrado.
        </div>
      )}
    </div>
  );
}
