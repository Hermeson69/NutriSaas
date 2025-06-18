import { useState } from "react";
import type { Workout } from "@/types/workout";

/**
 * Hook personalizado para gerenciar o estado e as ações de um treino.
 *
 * @param initialWorkout O treino inicial a ser utilizado como estado base.
 * @returns Um objeto contendo o estado atual do treino, índice do exercício atual, funções para navegação, atualização e controle de descanso, além de informações de progresso.
 *
 * @property {Workout} workout O estado atual do treino.
 * @property {number} currentExercise Índice do exercício atualmente selecionado.
 * @property {(index: number) => void} setCurrentExercise Função para definir manualmente o exercício atual.
 * @property {boolean} isResting Indica se o usuário está em período de descanso.
 * @property {number} restTimer Tempo restante de descanso em segundos.
 * @property {number} completedExercises Quantidade de exercícios concluídos.
 * @property {number} progressPercentage Porcentagem de progresso do treino.
 * @property {(exerciseId: number) => void} toggleExerciseComplete Alterna o status de conclusão de um exercício.
 * @property {(exerciseId: number, notes: string) => void} updateExerciseNotes Atualiza as anotações de um exercício.
 * @property {(exerciseId: number, weight: number) => void} updateExerciseWeight Atualiza o peso de um exercício.
 * @property {() => void} nextExercise Avança para o próximo exercício.
 * @property {() => void} prevExercise Retorna para o exercício anterior.
 * @property {() => void} startRest Inicia o período de descanso para o exercício atual.
 * @property {() => void} resetWorkout Reinicia o treino, marcando todos os exercícios como não concluídos e resetando o estado.
 */
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
