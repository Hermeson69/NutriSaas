import { Pause } from "lucide-react";
import { Card } from "@/components/ui/card";

interface RestTimerProps{
    restTimer: number
}

export function RestTimer({restTimer}: RestTimerProps){
    return(
        <Card className="p-4 bg-orange-50 border-orange-200">
            <div className="text-center">
                <Pause
                 className="h-8 w-8 mx-auto mb-2 text-orange-600"/>
                 <p className="text-lg font-semibold text-orange-900">
                    Tempo de Descanso
                 </p>
                 <p className="text-3xl font-bold text-orange-600 mt-2">
                    {Math.floor(restTimer / 60)}:{(restTimer % 60).toString().padStart(2, "0")}
                 </p>
            </div>
        </Card>
    )
}