// Este arquivo será usado para integração com o backend
import type { WeeklyPlan, Workout } from "../types/workout"
import { mockWeeklyPlan } from "@/data/workoutsData"

// Simulação de API - substituir por chamadas reais quando o backend estiver pronto
export class WorkoutService {
  // Buscar plano semanal do usuário
  static async getWeeklyPlan(userId: number): Promise<WeeklyPlan> {
    // TODO: Implementar chamada real para API
    // const response = await fetch(`/api/users/${userId}/weekly-plan`)
    // return response.json()

    // Por enquanto retorna dados mockados
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockWeeklyPlan), 500)
    })
  }

  // Buscar treino específico
  static async getWorkout(workoutId: number): Promise<Workout | null> {
    // TODO: Implementar chamada real para API
    // const response = await fetch(`/api/workouts/${workoutId}`)
    // return response.json()

    const weeklyPlan = await this.getWeeklyPlan(1)
    return weeklyPlan.workouts.find((w) => w.id === workoutId) || null
  }

  // Atualizar progresso do exercício
  static async updateExerciseProgress(exerciseId: number, completed: boolean): Promise<void> {
    // TODO: Implementar chamada real para API
    // await fetch(`/api/exercises/${exerciseId}/progress`, {
    //   method: 'PATCH',
    //   body: JSON.stringify({ completed })
    // })

    console.log(`Exercise ${exerciseId} marked as ${completed ? "completed" : "incomplete"}`)
  }

  // Salvar treino completo
  static async saveWorkoutProgress(workoutId: number, exercises: any[]): Promise<void> {
    // TODO: Implementar chamada real para API
    // await fetch(`/api/workouts/${workoutId}/progress`, {
    //   method: 'POST',
    //   body: JSON.stringify({ exercises })
    // })

    console.log(`Workout ${workoutId} progress saved`, exercises)
  }
}
