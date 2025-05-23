"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CircleCheck, Coffee, Utensils, Apple, UtensilsCrossed, HamburgerIcon} from "lucide-react"
// import { useTheme } from "../Provider/theme-provider"
import { cn } from "@/lib/utils"
// import { cn } from "@/lib/utils"

type FoodItem = {
  type: string
  description: string
}

type Meal = {
  title: string
  icon: React.ReactNode
  items: FoodItem[]
}

/**
 * Card que mostra ao user suas determinadas refeições do dia
 */
const FoodTrackingSection: React.FC = () => {

  const [meals] = useState<Meal[]>([
    {
      title: "Café da Manhã",
      icon: <Coffee className="h-5 w-5" />,
      items: [
        { type: "Principal: ", description: "Ovos mexidos (2 ovos) com espinafre;" },
        { type: "Acompanhamento: ", description: "Torrada integral (1 fatia);" },
        { type: "Fruta: ", description: "Mix de frutas vermelhas (1/2 xícara);" },
        { type: "Bebida: ", description: "Chá verde ou café preto;" },
      ],
    },
    {
      title: "Almoço",
      icon: <Utensils className="h-5 w-5" />,
      items: [
        { type: "Principal: ", description: "Peito de frango grelhado (150g);" },
        { type: "Acompanhamento: ", description: "Quinoa (1/2 xícara cozida);" },
        { type: "Vegetais: ", description: "Brócolis e cenoura no vapor (1 xícara);" },
        { type: "Bebida", description: "Água ou chá gelado sem açúcar;" },
      ],
    },
    {
      title: "Lanche",
      icon: <Apple className="h-5 w-5" />,
      items: [
        { type: "Proteína ", description: "Punhado de castanhas mistas (10-12 amêndoas ou nozes);" },
        { type: "Fruta ", description: "1 maçã pequena ou pera;" },
        { type: "Bebida ", description: "Chá de ervas ou água;" },
      ],
    },
    {
      title: "Jantar",
      icon: <UtensilsCrossed className="h-5 w-5" />,
      items: [
        { type: "Principal", description: "Salmão assado (120g) ou filé de peixe grelhado;" },
        { type: "Acompanhamento", description: "Batata doce (1/2 xícara em purê ou cubos);" },
        { type: "Vegetais", description: "Espinafre e abobrinha refogados (1 xícara);" },
        { type: "Salada", description: "Pepino e alface com vinagrete de azeite;" },
      ],
    },
    {
      title: "Dia Livre",
      icon: <HamburgerIcon className="h-5 w-5" />,
      items: [
        {
          type: "",
          description: "Porções moderadas de comidas gordurosas, doces e hambúrgueres caseiros;",
        },
      ],
    },
  ])

  return (
    <Card className={cn("bg-light rounded-lg p-4 mt-10 w-full")}>
    <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="text-dark font-bold text-xl border-b-2 border-dark">Diet</div>
          <CircleCheck
          size={22}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {meals.map((meal, index) => (
          <Card key={index} className="border-none">
            <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center">
                    <span className="text-dark mr-2">{meal.icon}</span>
                    {meal.title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="list-disc pl-5 space-y-2 min-h-[200px]">
                    {meal.items.map((item, itemIndex) =>(
                        <li key={itemIndex} className="text-dark">
                            {item.type && <span className="font-medium">{item.type}</span>}
                            {item.description}
                        </li>
                    ))}

                </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Card>
    
  )
}

export default FoodTrackingSection
