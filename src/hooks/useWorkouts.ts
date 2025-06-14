import { useState, useEffect } from "react";

import type { Workout } from "@/types/workout";

export function useWorkout(initialWorkout: Workout) {
  const [workout, setworkout] = useState<Workout>(initialWorkout);
  const [currentExercise, setCurrentExercise] = useState(0);
  const [isResting, setIsResting] = useState(false);
  const [restTimer, setRestTimer] = useState(0);

  const completedExercises = workout.exercises.filter(
    (ex) => ex.completed
  ).length;

  const progressPercentege =
    (completedExercises / workout.exercises.length) * 100;

  const toggleExercisesComplet = (exerciseId: number) => {
    setworkout((prev) => ({
      ...prev,
      exercises: prev.exercises.map((ex) =>
        ex.id === exerciseId ? { ...ex, completed: !ex.completed } : ex
      ),
    }));
  };

  const updateaExercisesNotes = (exerciseId: number, notes: string) => {
    setworkout((prev) => ({
      ...prev,
      exercises: prev.exercises.map((ex) =>
        ex.id === exerciseId ? { ...ex, notes } : ex
      ),
    }));
  };

  const updateExerciseWeight = (exerciseId: number, weight: number) => {
    setworkout((prev) => ({
      ...prev,
      exercises: prev.exercises.map((ex) =>
        ex.id === exerciseId ? { ...ex, weight } : ex
      ),
    }));
  };
}
