"use cliente"

import { CheckCircle2, Circle, Target, Clock } from "lucide-react"
import {Card, CardContent} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Exercise } from "@/types/workout"
import { Button } from "@/components/ui/button"

interface ExerciseCardProps {
    exercise: Exercise
    isActive: boolean
    onSelect: () => void
    onToggleComplete: () => void
}

export function ExerciseCard({exercise, isActive, onSelect, onToggleComplete}: ExerciseCardProps){
    return (
        <Card
        className={`cursor-pointer transition-all ${isActive ? "border-green-800 bg-green-50": "border-gray-200 hover:border-gray-300"}
        ${exercise.completed ? "opacity-60" : ""}`}
        onClick={onSelect}
        >
        <CardContent className="p-3">
            <div className="flex items-center gap-3">
                <Button
                onClick={(e) => {
                    e.stopPropagation()
                    onToggleComplete()
                }}
                className="flex-shrink-8"
                
                >
                    {exercise.completed ? (<CheckCircle2 className="h-4 w-4 text-green-800"/>): <Circle className="h-4 w-4 text-gray-400"/>}
                </Button>

                <div className="flex-1 min-w-0">
                    <p className={`font-medium text-sm ${exercise.completed ? "line-through text-gray-500": ""}`}>
                        {exercise.name}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Target className="w-3 h-3"/>
                            {exercise.sets}x {exercise.reps}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Target className="w-3 h-3"/>
                            <Clock className="h-3 w-3"/>
                            {exercise.rest}
                        </span>
                    </div>
                </div>
                <Badge variant="secondary" className="text-xs text-black">
                    {exercise.muscleGroup}
                </Badge>
            </div>
        </CardContent>
            
        </Card>
    )
}