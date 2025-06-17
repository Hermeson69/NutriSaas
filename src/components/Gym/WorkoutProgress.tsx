import { Progress } from "@/components/ui/progress";

interface WorkoutProgressProps {
    completed: number
    total: number
}

export function WorkoutProgress({completed, total}: WorkoutProgressProps) {
   const percentage = (completed / total) * 100

   return(
    <div className="mt-4">
        <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">
                Progresso De Treino
            </span>
            <span className="text-sm text-muted-foreground">
                {completed}/{total} exercícios
            </span>
        </div>
        <Progress value={percentage} className="h-2"/>
    </div>
   )
}