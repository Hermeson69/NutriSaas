/**
 * "Struct" dos exercisios
 */
export interface Exercise {
  id: number
  name: string
  description: string
  sets: number
  reps: string
  rest: string
  tips: string
  muscleGroup: string
  completed: boolean
  weight?: number
  notes?: string
}
/**
 * Separação dos teinos da semana
 */
export interface Workout {
  id: number
  name: string
  description: string
  day: string
  exercises: Exercise[]
  completed: boolean
  duration?: number
  date?: string
}
/**
 * Plano de treino
 */
export interface WeeklyPlan {
  id: number
  name: string
  week: string
  workouts: Workout[]
  userId?: number
}

/**
 * Dias da semana
 */

export type DayOfWeek = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday"
