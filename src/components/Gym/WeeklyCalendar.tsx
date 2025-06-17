"use client";

import { Calendar, CheckCircle2, Clock, Dumbbell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import type { WeeklyPlan, DayOfWeek } from "@/types/workout";

interface WeeklyCalendarProps {
  weeklyPlan: WeeklyPlan;
  onSelectWorkout: (WorkoutID: number) => void;
}

const dayNames: Record<DayOfWeek, string> = {
  monday: "Segunda",
  tuesday: "Terça",
  wednesday: "Quarta",
  thursday: "Quinta",
  friday: "Sexta",
  saturday: "Sábado",
  sunday: "Domingo",
};
const dayNumbers: Record<DayOfWeek, number> = {
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
  sunday: 0,
};

export function WeeklyCalendar({
  weeklyPlan,
  onSelectWorkout,
}: WeeklyCalendarProps) {
  //*
  // pegart o dia Atual
  //
  const today = new Date().getDay();

  const weekDays: DayOfWeek[] = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  // *
  // Comporação para ver se o dia atual é igual ao dia do treino da semana
  // */

  const getWorkoutForDay = (day: DayOfWeek) => {
    return weeklyPlan.workouts.find((workout) => workout.day == day);
  };

  //*
  // Converter para numero o diada semana
  // /

  const isToday = (day: DayOfWeek) => {
    return dayNumbers[day] === today;
  };

  return (
    <Card className="min-w-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          {weeklyPlan.name}
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Semana de {new Date(weeklyPlan.week).toLocaleDateString("pt-BR")}
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {weekDays.map((day: DayOfWeek) => {
            const workout = getWorkoutForDay(day);
            const isCurrentDay = isToday(day);

            return (
              <Card
                key={day}
                className={`${
                  isCurrentDay ? "border-green-500 bg-green-50" : ""
                }
                            ${!workout ? "opacity-50" : ""}
                            `}
              >
                <CardContent className="p-3">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 md-2">
                      <h3
                        className={`font-medium text-sm ${
                          isCurrentDay ? "text-green-800" : ""
                        }`}
                      >
                        {dayNames[day]}
                      </h3>
                      {isCurrentDay && (
                        <div className="w-2 h-2 bg-green-800 rounded-full" />
                      )}
                    </div>
                    {workout ? (
                      <div className="space-y-2">
                        <div className="flex items-center justify-center">
                          {workout.completed ? (
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                          ) : (
                            <Dumbbell className="h-5 w-5 text-gray-400" />
                          )}
                        </div>

                        <div>
                          <p className="font-medium text-xs mb-1">
                            {workout.name}
                          </p>
                          <Badge variant="outline" className="text-xs">
                            {workout.exercises.length} exercícios
                          </Badge>
                        </div>

                        <Button
                          size="sm"
                          variant={workout.completed ? "outline" : "default"}
                          className="w-full text-xs bg-green-800 hover:bg-green-700"
                          onClick={() => onSelectWorkout(workout.id)}
                        >
                          {workout.completed ? "Revisar" : "Iniciar"}
                        </Button>
                      </div>
                    ) : (
                      <div className="py-4">
                        <Clock className="h-5 w-5 mx-auto text-gray-300 mb-2" />
                        <p className="text-xs text-gray-400">Descanso</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
