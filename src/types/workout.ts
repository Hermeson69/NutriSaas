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

export interface WeeklyPlan {
  id: number
  name: string
  week: string
  workouts: Workout[]
  userId?: number
}

export type DayOfWeek = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday"
