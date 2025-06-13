import type { WorkoutSession, Exercise } from "@/types/workout"

export const useWorkoutProgress = (workout: WorkoutSession) => {
  const getWorkoutProgress = (): number => {
    // pega a quantidade de series tem e junta tudo no acumulador acc
    const totalSets = workout.exercises.reduce((acc, ex) => acc + ex.sets.length, 0)
    // mesma coisa so que agora ao usuario comcluir um exercicio vem para o novo acumulador
    const completedSets = workout.exercises.reduce((acc, ex) => acc + ex.sets.filter((set) => set.completed).length, 0)
    // retorno em % do treino exemplo 22% de 100%
    return Math.round((completedSets / totalSets) * 100)
  }

  const getExerciseProgress = (exercise: Exercise): number => {
    const completedSets = exercise.sets.filter((set) => set.completed).length
    return Math.round((completedSets / exercise.sets.length) * 100)
  }

  return {
    getWorkoutProgress,
    getExerciseProgress,
  }
}
