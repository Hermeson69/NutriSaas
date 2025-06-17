import { useState } from "react";
import type { Workout } from "@/types/workout";

export function useWorkout(initialWorkout: Workout) {
    const [workout, setWorkout] = useState<Workout>(initialWorkout);
    const [currentExercise, setCurrentExercise] = useState(0);
    const [isResting, setIsResting] = useState(false);
    const [restTimer, setRestTimer] = useState(0);

    const completedExercises = workout.exercises.filter((ex) => ex.completed).length;
    const progressPercentage = (completedExercises / workout.exercises.length) * 100;

    const toggleExerciseComplete = (exerciseId: number) => {
        setWorkout((prev) => ({
            ...prev,
            exercises: prev.exercises.map((ex) =>
                ex.id === exerciseId ? { ...ex, completed: !ex.completed } : ex
            ),
        }));
    };

    const updateExerciseNotes = (exerciseId: number, notes: string) => {
        setWorkout((prev) => ({
            ...prev,
            exercises: prev.exercises.map((ex) =>
                ex.id === exerciseId ? { ...ex, notes } : ex
            ),
        }));
    };

    const updateExerciseWeight = (exerciseId: number, weight: number) => {
        setWorkout((prev) => ({
            ...prev,
            exercises: prev.exercises.map((ex) =>
                ex.id === exerciseId ? { ...ex, weight } : ex
            ),
        }));
    };

    const nextExercise = () => {
        setCurrentExercise((prev) =>
            prev < workout.exercises.length - 1 ? prev + 1 : prev
        );
    };

    const prevExercise = () => {
        setCurrentExercise((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const startRest = () => {
        setIsResting(true);
        const restValue = Number(workout.exercises[currentExercise].rest);
        setRestTimer(isNaN(restValue) ? 60 : restValue);
        // Aqui você pode adicionar lógica para contagem regressiva se quiser
    };

    const resetWorkout = () => {
        setWorkout((prev) => ({
            ...prev,
            exercises: prev.exercises.map((ex) => ({ ...ex, completed: false })),
        }));
        setCurrentExercise(0);
        setIsResting(false);
        setRestTimer(0);
    };

    return {
        workout,
        currentExercise,
        setCurrentExercise,
        isResting,
        restTimer,
        completedExercises,
        progressPercentage,
        toggleExerciseComplete,
        updateExerciseNotes,
        updateExerciseWeight,
        nextExercise,
        prevExercise,
        startRest,
        resetWorkout,
    };
}
