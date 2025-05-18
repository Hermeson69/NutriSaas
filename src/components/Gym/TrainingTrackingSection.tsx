"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BicepsFlexed } from "lucide-react"
import { useTheme } from "../Provider/theme-provider"
import { cn } from "@/lib/utils"

type TrainingItem = {
  type: string
  description: string
}

type Workout = {
  title: string
  items: TrainingItem[]
}

/**
 * Card que mostra ao usuário seus treinos do dia
 */
const TrainingTrackingSection: React.FC = () => {
      const { theme } = useTheme();
      const isDark = theme === "dark";
  const [training] = useState<Workout[]>([
    {
      title: "Bíceps",
      items: [
        { type: "1º Exercício: ", description: "Rosca direta com barra (3 séries de 10-12 repetições)" },
        { type: "2º Exercício: ", description: "Rosca martelo com halteres (3 séries de 12-15 repetições)" },
        { type: "3º Exercício: ", description: "Rosca concentrada (3 séries de 10-12 repetições)" },
      ],
    },
    {
      title: "Tríceps",
      items: [
        { type: "1º Exercício: ", description: "Tríceps pulley (3 séries de 12-15 repetições)" },
        { type: "2º Exercício: ", description: "Mergulho em paralelas (3 séries de 10-12 repetições)" },
        { type: "3º Exercício: ", description: "Extensão de tríceps com halter (3 séries de 12-15 repetições)" },
      ],
    },
    {
      title: "Antebraço",
      items: [
        { type: "1º Exercício: ", description: "Rosca de punho com halteres (3 séries de 15-20 repetições)" },
        { type: "2º Exercício: ", description: "Flexão de punho inversa (3 séries de 15-20 repetições)" },
        { type: "3º Exercício: ", description: "Prancha com pegada de halter (3 séries de 30 segundos)" },
      ],
    },
  ])

  return (
    <div className={cn("bg-gray-50 rounded-lg p-4 mt-10 w-full",
      isDark ? "bg-bark text-gray-100" : "bg-light-50 text-dark",
    )}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="text-dark font-bold text-xl border-b-2 border-dark">Treino</div>
          <BicepsFlexed size={22} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {training.map((workout, index) => (
          <Card key={index} className="border-gray-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center">
                {workout.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 min-h-[200px]">
                {workout.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-700">
                    {item.type && <span className="font-normal">{item.type}</span>}
                    {item.description}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default TrainingTrackingSection