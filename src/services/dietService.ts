// Este arquivo será usado para integração com o backend
import type { DailyDiet, WeeklyDietPlan } from "@/types/dietTypes"
import { mockDailyDiet, mockWeeklyDietPlan } from "@/data/dietData"

export class DietService {
  // Buscar dieta diária do usuário
  static async getDailyDiet(userId: number, date: string): Promise<DailyDiet> {
    // TODO: Implementar chamada real para API
    // const response = await fetch(`/api/users/${userId}/diet/${date}`)
    // return response.json()

    return new Promise((resolve) => {
      setTimeout(() => resolve(mockDailyDiet), 500)
    })
  }

  // Buscar plano semanal de dieta
  static async getWeeklyDietPlan(userId: number): Promise<WeeklyDietPlan> {
    // TODO: Implementar chamada real para API
    // const response = await fetch(`/api/users/${userId}/weekly-diet-plan`)
    // return response.json()

    return new Promise((resolve) => {
      setTimeout(() => resolve(mockWeeklyDietPlan), 500)
    })
  }

  // Atualizar consumo de alimento
  static async updateFoodConsumption(foodId: number, consumed: boolean): Promise<void> {
    // TODO: Implementar chamada real para API
    // await fetch(`/api/foods/${foodId}/consumption`, {
    //   method: 'PATCH',
    //   body: JSON.stringify({ consumed })
    // })

    console.log(`Food ${foodId} marked as ${consumed ? "consumed" : "not consumed"}`)
  }

  // Atualizar consumo de água
  static async updateWaterIntake(userId: number, amount: number): Promise<void> {
    // TODO: Implementar chamada real para API
    // await fetch(`/api/users/${userId}/water-intake`, {
    //   method: 'PATCH',
    //   body: JSON.stringify({ amount })
    // })

    console.log(`Water intake updated: +${amount}ml`)
  }

  // Salvar progresso diário
  static async saveDailyProgress(userId: number, dailyDiet: DailyDiet): Promise<void> {
    // TODO: Implementar chamada real para API
    // await fetch(`/api/users/${userId}/daily-diet-progress`, {
    //   method: 'POST',
    //   body: JSON.stringify(dailyDiet)
    // })

    console.log("Daily diet progress saved", dailyDiet)
  }
}
