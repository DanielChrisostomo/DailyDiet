import { DataEntry, Meal } from "src/@types/dataMealTypes";
import { AppError } from "@utils/AppError";
import { getAllMeals } from "@storage/meals/getAllMeals";
import { MealInfoTypes } from "@screens/MealData";

export async function saveMealChanges(mealInfoDataEntry: MealInfoTypes) {
      try {
        let storageMeals = await getAllMeals();
        const existingMealDayIndex = storageMeals.findIndex(
          (m: DataEntry) => m.day === mealInfoDataEntry.day
        );

        if (existingMealDayIndex !== -1) {
          const mealIndex = storageMeals[existingMealDayIndex].data.findIndex(
            (meal: Meal) =>
              meal.hour === mealInfoDataEntry.data.hour &&
              meal.meal === mealInfoDataEntry.data.meal &&
              meal.status === mealInfoDataEntry.data.status &&
              meal.description === mealInfoDataEntry.data.description
          );
          if (mealIndex !== -1) {
            return { 
                storageMeals,
                mealIndex,
                existingMealDayIndex,
            }
          }
        }
      } catch (error) {
        throw new AppError(
          "Um erro ocorreu ao tentar buscar a refeição que está sendo enviada com os dados de sua rota"
        );
      } 
  }