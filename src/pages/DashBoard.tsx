import React, { useState, useEffect } from "react";
import FoodTrackingSection from "@/components/Diet/FoodTrackingSection";
import { FitnessMetrics } from "@/components/fitness-metrics";
import DayTraining from "@/components/Gym/TrainingTrackingSection";
import { Pageconfig } from "@/components/Pageconfig";
import { WorkoutService } from "@/hooks/services/workoutService";
import type { WeeklyPlan, Workout } from "@/types/workout";

type DashBoardProps = {};

const DashBoard: React.FC<DashBoardProps> = () => {
  const [weeklyPlan, setWeeklyPlan] = useState<WeeklyPlan | null>(null);
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadWeeklyPlan();
  }, []);

  const loadWeeklyPlan = async () => {
    try {
      setLoading(true);
      // Simula um atraso de 2 segundos para imitar chamada de API
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // TODO: Pegar userId do contexto de autenticação
      const plan = await WorkoutService.getWeeklyPlan(1);
      setWeeklyPlan(plan);
    } catch (error) {
      console.error("Erro ao carregar plano semanal:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleBackToCalendar = () => {
    setSelectedWorkout(null);
    loadWeeklyPlan();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-800 mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando seu Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <Pageconfig
      title="Dashboard"
      description="Bem-vindo ao seu painel de controle"
    >
      <FitnessMetrics className="flex-1" />
      <FoodTrackingSection />
      <DayTraining />
    </Pageconfig>
  );
};

export default DashBoard;
