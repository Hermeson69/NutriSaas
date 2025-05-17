"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BicepsFlexed } from "lucide-react"
// import { cn } from "@/lib/utils"

type TrainingItem = {
  type: string
  description: string
}

type Meal = {
  title: string
//   icon: React.ReactNode
  items: TrainingItem[]
}

/**
 * Card que mostra ao user suas determinadas refeições do dia
 */
const TrainingTrackingSection: React.FC = () => {
  const [training] = useState<Meal[]>([
    {
      title: "Biceps",
    //   icon: <BicepsFlexed className="h-5 w-5" />,
      items: [
        { type: "1° exercicio: ", description: "Ovos mexidos (2 ovos) com espinafre;" },
        { type: "2° exercicio: ", description: "Torrada integral (1 fatia);" },
        { type: "3° exercicio: ", description: "Mix de frutas vermelhas (1/2 xícara);" },
      ],
    },
    {
      title: "Triceps",
    //   icon: <Utensils className="h-5 w-5" />,
      items: [
        { type: "1° exercicio: ", description: "Peito de frango grelhado (150g);" },
        { type: "2° exercicio: ", description: "Quinoa (1/2 xícara cozida);" },
        { type: "3° exercicio: ", description: "Brócolis e cenoura no vapor (1 xícara);" },
      ],
    },
    {
      title: "Antebraço",
    //   icon: <Apple className="h-5 w-5" />,
      items: [
        { type: "1° exercicio", description: "Punhado de castanhas mistas (10-12 amêndoas ou nozes);" },
        { type: "2° exercicio", description: "1 maçã pequena ou pera;" },
        { type: "3° exercicio: ", description: "Chá de ervas ou água;" },
      ],
    },
  ])

  return (
    <div className="bg-gray-50 rounded-lg p-4 mt-10 w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="text-dark font-bold text-xl border-b-2 border-dark">Treino</div>
          <BicepsFlexed
          size={22}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {training.map((meal, index) => (
          <Card key={index} className="border-gray-200">
            <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center">
                    {/* <span className="text-gray-700 mr-2">{meal.icon}</span> */}
                    {meal.title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="list-disc pl-5 space-y-2 min-h-[200px]">
                    {meal.items.map((item, itemIndex) =>(
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
