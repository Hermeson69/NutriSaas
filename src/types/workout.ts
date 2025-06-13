export type ExerciseSet = {
    reps: number
    weight: number
    completed: boolean
    restTime: number // em segundos
}

export type Exercise = {
    id: string
    name: string
    muscle: string
    sets: ExerciseSet[]
    instructions: string[]
    difficulty: "Iniciante"|"Intermediário"|"Avançado"
    equipament: string
}

export type WorkoutSession = {
    id: string
    title: string
    description: string
    estimatedTime: number
    exercises: Exercise[]
    muscleGrupus: string
}