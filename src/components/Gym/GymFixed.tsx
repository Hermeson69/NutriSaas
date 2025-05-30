import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { BicepsFlexed, Dumbbell } from "lucide-react";

export const Gymfixed = () => {
  const [activyCard, setactuvyCard] = useState<number | null>(null);

  const weeklyWorkouts = [
    {
      id: 1,
      day: "Segunda-feira",
      title: "Peito e Tríceps",
      exercises: [
        "Supino Reto: 4x12",
        "Crucifixo Inclinado: 3x15",
        "Tríceps Testa: 3x12",
      ],
    },
    {
      id: 2,
      day: "Terça-feira",
      title: "Costas e Bíceps",
      exercises: [
        "Puxada Frontal: 4x10",
        "Remada Curvada: 3x12",
        "Rosca Direta: 3x15",
      ],
    },
    {
      id: 3,
      day: "Quarta-feira",
      title: "Pernas",
      exercises: [
        "Agachamento Livre: 4x10",
        "Leg Press: 3x12",
        "Cadeira Extensora: 3x15",
      ],
    },
    {
      id: 4,
      day: "Quinta-feira",
      title: "Ombros e Abdômen",
      exercises: [
        "Desenvolvimento com Halteres: 4x12",
        "Elevação Lateral: 3x15",
        "Abdominal Prancha: 3x30s",
      ],
    },
    {
      id: 5,
      day: "Sexta-feira",
      title: "Peito e Costas",
      exercises: [
        "Supino Inclinado: 4x12",
        "Barra Fixa: 3x10",
        "Pulldown: 3x12",
      ],
    },
  ];

  const handleClick = (id: number) => {
    setactuvyCard(activyCard === id ? null : id);
  };

  return (
    <Card className="min-h-auto mt-10 flex bg-light items-center justify-center md:p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="text-dark font-bold text-xl border-b-2 border-dark">
            Treino - Semana
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {weeklyWorkouts.map((warkout) => (
          <Card
            key={warkout.id}
            className={`w-70 transition-all duration-300 cursor-pointer ${
              activyCard === warkout.id
                ? "z-10 scale-105 shadow-2xl"
                : "z-0 shadow-md"
            }`}
            onClick={() => handleClick(warkout.id)}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Dumbbell className="h-6 w-6" />
                {warkout.day} - {warkout.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                {warkout.exercises.map((exercise, idx) => (
                  <li key={idx} className="text-sm text-light">
                    {exercise}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Card>
  );
};
