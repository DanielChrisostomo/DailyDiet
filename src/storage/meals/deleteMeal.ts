import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_DATA } from "@storage/StorageConfig";
import { getAllMeals } from "./getAllMeals";
import { DataEntry, Meal } from "src/@types/dataMealTypes";

type singleMealInfoType = {
  day: string;
  data: {
    description: string;
    meal: string;
    hour: string;
    status: string;
  };
};

export async function deleteMeal(mealInfoDataEntry: singleMealInfoType) {
  try {
    let storageMeals = await getAllMeals();

    const existingMealDayIndex = storageMeals.findIndex(
      (m: DataEntry) => m.day === mealInfoDataEntry.day
    );

    if (existingMealDayIndex !== -1) {
      const updatedMealsOfDay = storageMeals[existingMealDayIndex].data.filter(
        (meal: Meal) => (
          meal.description !== mealInfoDataEntry.data.description ||
          meal.hour !== mealInfoDataEntry.data.hour ||
          meal.meal !== mealInfoDataEntry.data.meal ||
          meal.status !== mealInfoDataEntry.data.status
        )
      );

      storageMeals[existingMealDayIndex].data = updatedMealsOfDay;

      await AsyncStorage.setItem(MEAL_DATA, JSON.stringify(storageMeals));
    }

  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete meal");
  }
}