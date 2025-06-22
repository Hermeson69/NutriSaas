"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DumbbellIcon as BicepsFlexed, Calendar, CheckCircle2, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { mockWeeklyPlan } from "@/data/workoutsData"
import type { Workout, Exercise } from "@/types/workout"
import { Progress } from "@/components/ui/progress"

/**
 * Card que mostra ao usuário seus treinos do dia
 */
const TrainingTrackingSection: React.FC = () => {
  const [todayWorkout, setTodayWorkout] = useState<Workout | null>(null)

  useEffect(() => {
    // Mapear dias da semana para nosso formato
    const dayMap: Record<number, string> = {
      1: "monday",
      2: "tuesday",
      3: "wednesday",
      4: "thursday",
      5: "friday",
      6: "saturday",
      0: "sunday",
    }

    const today = new Date().getDay()
    const todayKey = dayMap[today]

    // Buscar treino do dia atual
    const workout = mockWeeklyPlan.workouts.find((w) => w.day === todayKey)
    setTodayWorkout(workout || null)
  }, [])

  // Se não há treino hoje (sábado/domingo)
  if (!todayWorkout) {
    return (
      <Card className={cn("bg-light rounded-lg p-4 mt-10 w-auto")}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="text-dark font-bold text-xl border-b-2 border-dark">Treino - Hoje</div>
            <Calendar size={22} />
          </div>
        </div>

        <div className="text-center py-8">
          <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-400" />
          <h3 className="text-lg font-semibold text-gray-600 mb-2">Dia de Descanso</h3>
          <p className="text-gray-500">Hoje é seu dia de recuperação. Aproveite para descansar! 😴</p>
        </div>
      </Card>
    )
  }

  // Agrupar exercícios por grupo muscular
  const groupedExercises = todayWorkout.exercises.reduce(
    (acc, exercise) => {
      const group = exercise.muscleGroup
      if (!acc[group]) {
        acc[group] = []
      }
      acc[group].push(exercise)
      return acc
    },
    {} as Record<string, Exercise[]>,
  )

  // Calcular progresso dos exercícios
  const completedExercises = todayWorkout.exercises.filter((ex) => ex.completed).length
  const totalExercises = todayWorkout.exercises.length
  const progressPercentage = totalExercises > 0 ? (completedExercises / totalExercises) * 100 : 0

  return (
    <Card className={cn("bg-light rounded-lg p-4 mt-10 w-auto")}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="text-dark font-bold text-xl border-b-2 border-dark">Treino - Hoje</div>
          <BicepsFlexed size={22} />
        </div>
        <div className="text-sm text-gray-600">{todayWorkout.name}</div>
      </div>

      <div className="mb-4 space-y-3">
        <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
          <p className="text-blue-800 text-sm font-medium">📋 {todayWorkout.description}</p>
        </div>

        {/* Barra de Progresso */}
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Progresso do Treino</span>
            <span className="text-sm text-gray-600">
              {completedExercises}/{totalExercises} exercícios
            </span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
          <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
            <span>{Math.round(progressPercentage)}% concluído</span>
            {progressPercentage === 100 && <span className="text-green-600 font-medium">🎉 Treino Finalizado!</span>}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(groupedExercises).map(([muscleGroup, exercises], index) => (
          <Card key={index} className="border-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center justify-between">
                {muscleGroup}
                <span className="text-xs text-gray-500">
                  {exercises.length} exercício{exercises.length > 1 ? "s" : ""}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 min-h-[200px]">
                {exercises.map((exercise, exerciseIndex) => (
                  <li key={exercise.id} className="text-dark border-l-2 border-gray-200 pl-3">
                    <div className="font-medium text-sm mb-1">
                      {exerciseIndex + 1}º Exercício: {exercise.name}
                    </div>
                    <div className="text-xs text-gray-600 mb-2">
                      {exercise.sets} séries de {exercise.reps} repetições
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Clock className="h-3 w-3" />
                      Descanso: {exercise.rest}
                    </div>
                    {exercise.completed && (
                      <div className="flex items-center gap-1 mt-1 text-green-600">
                        <CheckCircle2 className="h-3 w-3" />
                        <span className="text-xs">Concluído</span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Total de exercícios: {todayWorkout.exercises.length}</span>
          <span className="text-gray-600">Tempo estimado: {todayWorkout.exercises.length * 4 - 6} min</span>
        </div>
      </div>
    </Card>
  )
}

export default TrainingTrackingSection
