export interface FoodItem {
  id: number;
  name: string;
  quantity: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  type:
    | "Principal"
    | "Acompanhamento"
    | "Fruta"
    | "Bebida"
    | "Vegetal"
    | "Salada"
    | "Lanche";
  consumed: boolean;
  consumedAt?: string;
}

export interface Meal {
  id: number;
  name: string;
  icon: string;
  time: string;
  foods: FoodItem[];
  totalCalories: number;
  totalProteins: number;
  totalCarbs: number;
  totalFat: number;
  completed: boolean;
}

export interface DailyDiet {
  id: number;
  date: string;
  meals: Meal[];
  totalCalories: number;
  targetCalories: number;
  totalProtein: number;
  targetProtein: number;
  totalCarbs: number;
  targetCarbs: number;
  totalFat: number;
  targetFat: number;
  waterIntake: number;
  targetWater: number;
}

export interface WeeklyDietPlan {
  id: number;
  name: string;
  week: string;
  dailyDiets: DailyDiet[];
  userId?: number;
}


export type MealType = "Café da Manhã" | "Almoço" | "Lanche" | "Janta" | "Livre"
