import type React from "react";

// Tipo que representa um alimento individual
type FoodItem = {
  name: string;
  description: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
};

// Tipo que representa uma refeição composta por vários alimentos
type Meal = {
  title: string;
  time: string;
  colorClass: string;
  items: FoodItem[];
};

/**
 * Card que mostra ao user suas determinadas refeirções, (nesse caso só esta sendo usado na landingPage pórem, vai ser usado na pagina de diet e dashboard após mocar dados via API)
 */
const FoodTrackingCard: React.FC = () => {
  // Dados mockados das refeições do usuário
  const meals: Meal[] = [
    {
      title: "Café da Manhã",
      time: "07:30",
      colorClass: "bg-orange-400",
      items: [
        {
          name: "Omelete de espinafre",
          description: "2 ovos, espinafre, tomate",
          calories: 320,
          protein: 18,
          carbs: 6,
          fats: 24,
        },
        {
          name: "Iogurte com frutas",
          description: "Iogurte natural, morango, mirtilo",
          calories: 180,
          protein: 10,
          carbs: 22,
          fats: 5,
        },
      ],
    },
  ];

  // Calcula o total de calorias, proteínas, carboidratos e gorduras de todas as refeições
  const totals = meals.reduce(
    (acc, meal) => {
      meal.items.forEach((item) => {
        acc.calories += item.calories;
        acc.protein += item.protein;
        acc.carbs += item.carbs;
        acc.fats += item.fats;
      });
      return acc;
    },
    { calories: 0, protein: 0, carbs: 0, fats: 0 }
  );

  return (
    <div className="relative mx-auto max-w-[500px]">
      <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-white p-6">
        {/* Cabeçalho do card com título, data e total de calorias */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-green-900">
              Meu Plano Alimentar
            </h3>
            <p className="text-sm text-[#666666]">Segunda-feira, 12 de Maio</p>
          </div>
          <div className="bg-green-800/10 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            {totals.calories} kcal
          </div>
        </div>

        {/* Lista de refeições */}
        {meals.map((meal, mealIndex) => (
          <div key={mealIndex} className="mb-6">
            {/* Título e horário da refeição */}
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium flex items-center">
                <div
                  className={`w-2 h-2 rounded-full ${meal.colorClass} mr-2`}
                ></div>
                {meal.title}
              </h4>
              <span className="text-sm text-[#666666]">{meal.time}</span>
            </div>

            {/* Lista de alimentos da refeição */}
            {meal.items.map((item, itemIndex) => (
              <div key={itemIndex} className="bg-[#F5F5F5] rounded-lg p-3 mb-2">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-[#666666]">{item.description}</p>
                  </div>
                  <div className="text-sm font-medium">
                    {item.calories} kcal
                  </div>
                </div>
                {/* Informações nutricionais */}
                <div className="flex flex-wrap mt-2 text-xs gap-2">
                  <span className="bg-green-800/10 text-green-800 px-2 py-1 rounded-full">
                    Proteína: {item.protein}g
                  </span>
                  <span className="bg-orange-400/10 text-orange-400 px-2 py-1 rounded-full">
                    Carbs: {item.carbs}g
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                    Gorduras: {item.fats}g
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* Totais nutricionais no rodapé do card */}
        <div className="mt-6 pt-4 border-t border-gray-100">
          <div className="flex flex-wrap justify-between text-sm gap-2">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-800 mr-2"></div>
              <span>Proteína: {totals.protein}g</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-orange-400 mr-2"></div>
              <span>Carbs: {totals.carbs}g</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-gray-400 mr-2"></div>
              <span>Gorduras: {totals.fats}g</span>
            </div>
          </div>
        </div>
      </div>
      {/* Efeitos visuais de fundo */}
      <div className="absolute -right-4 -bottom-4 -z-10 h-[300px] w-[300px] rounded-full bg-green-800/10 blur-3xl"></div>
      <div className="absolute -left-4 -top-4 -z-10 h-[300px] w-[300px] rounded-full bg-orange-400/10 blur-3xl"></div>
    </div>
  );
};

export default FoodTrackingCard;
