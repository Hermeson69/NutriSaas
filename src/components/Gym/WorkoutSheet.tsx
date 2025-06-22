"use client"

import { CheckCircle2, Clock, Dumbbell, Target, Trophy, Play, RotateCcw } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useWorkout } from "@/hooks/useWorkouts"
import type { Workout } from "@/types/workout"
import { ExerciseCard } from "./ExerciseCard"
import { RestTimer } from "./RestTimer"
import { WorkoutProgress } from "./WorkoutProgress"

interface WorkoutSheetProps {
  workout: Workout
  onBack: () => void
}

export function WorkoutSheet({ workout, onBack }: WorkoutSheetProps) {
  const {
    workout: currentWorkout,
    currentExercise,
    setCurrentExercise,
    isResting,
    restTimer,
    completedExercises,
    toggleExerciseComplete,
    nextExercise,
    prevExercise,
    startRest,
    resetWorkout,
  } = useWorkout(workout)

  const currentEx = currentWorkout.exercises[currentExercise]

  return (
    <div className="max-w-full mx-auto p-4 space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Button variant="outline" size="sm" onClick={onBack}>
                  ← Voltar
                </Button>
              </div>
              <CardTitle className="text-2xl font-bold flex items-center gap-2">
                <Dumbbell className="h-6 w-6 text-blue-600" />
                {currentWorkout.name}
              </CardTitle>
              <p className="text-muted-foreground mt-1">{currentWorkout.description}</p>
            </div>
            <Badge variant="outline" className="text-lg px-3 py-1">
              {new Date().toLocaleDateString("pt-BR", {
                weekday: "long",
                day: "numeric",
                month: "long",
              })}
            </Badge>
          </div>

          <WorkoutProgress completed={completedExercises} total={currentWorkout.exercises.length} />
        </CardHeader>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Lista de Exercícios */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Target className="h-5 w-5" />
              Lista de Exercícios
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {currentWorkout.exercises.map((exercise, index) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                isActive={index === currentExercise}
                onSelect={() => setCurrentExercise(index)}
                onToggleComplete={() => toggleExerciseComplete(exercise.id)}
              />
            ))}
          </CardContent>
        </Card>

        {/* Exercício Atual */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">
                Exercício {currentExercise + 1} de {currentWorkout.exercises.length}
              </CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={prevExercise} disabled={currentExercise === 0}>
                  Anterior
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextExercise}
                  disabled={currentExercise === currentWorkout.exercises.length - 1}
                >
                  Próximo
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Informações do Exercício */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl font-bold">{currentEx.name}</h3>
                <Badge variant="outline">{currentEx.muscleGroup}</Badge>
                {currentEx.completed && (
                  <Badge variant="default" className="bg-green-600">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    Concluído
                  </Badge>
                )}
              </div>
              <p className="text-muted-foreground mb-4">{currentEx.description}</p>
            </div>

            {/* Detalhes do Treino */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="p-4">
                <div className="text-center">
                  <Target className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                  <p className="text-2xl font-bold">{currentEx.sets}</p>
                  <p className="text-sm text-muted-foreground">Séries</p>
                </div>
              </Card>
              <Card className="p-4">
                <div className="text-center">
                  <Dumbbell className="h-6 w-6 mx-auto mb-2 text-green-600" />
                  <p className="text-2xl font-bold">{currentEx.reps}</p>
                  <p className="text-sm text-muted-foreground">Repetições</p>
                </div>
              </Card>
              <Card className="p-4">
                <div className="text-center">
                  <Clock className="h-6 w-6 mx-auto mb-2 text-orange-600" />
                  <p className="text-2xl font-bold">{currentEx.rest}</p>
                  <p className="text-sm text-muted-foreground">Descanso</p>
                </div>
              </Card>
            </div>

            {/* Dicas */}
            <Card className="p-4 bg-blue-50 border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">💡 Dica do Exercício</h4>
              <p className="text-blue-800 text-sm">{currentEx.tips}</p>
            </Card>

            <Separator />

            {/* Controles */}
            <div className="flex flex-col gap-4">
              {isResting ? (
                <RestTimer restTimer={restTimer} />
              ) : (
                <div className="flex gap-3">
                  <Button
                    onClick={() => toggleExerciseComplete(currentEx.id)}
                    variant={currentEx.completed ? "outline" : "default"}
                    className="flex-1 bg-green-800 hover:bg-green-700"
                  >
                    {currentEx.completed ? (
                      <>
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Marcar como Não Concluído
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="h-4 w-4 mr-2" />
                        Marcar como Concluído
                      </>
                    )}
                  </Button>
                  <Button onClick={startRest} variant="outline" className="flex-1">
                    <Play className="h-4 w-4 mr-2" />
                    Iniciar Descanso
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Ações Finais */}
      {completedExercises === currentWorkout.exercises.length && (
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-6 text-center">
            <Trophy className="h-12 w-12 mx-auto mb-4 text-green-600" />
            <h3 className="text-xl font-bold text-green-900 mb-2">Parabéns! Treino Concluído! 🎉</h3>
            <p className="text-green-700 mb-4">
              Você completou todos os exercícios do treino de hoje. Excelente trabalho!
            </p>
            <div className="flex gap-3 justify-center">
              <Button onClick={resetWorkout} variant="outline">
                <RotateCcw className="h-4 w-4 mr-2" />
                Reiniciar Treino
              </Button>
              <Button onClick={onBack}>Voltar ao Calendário</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
