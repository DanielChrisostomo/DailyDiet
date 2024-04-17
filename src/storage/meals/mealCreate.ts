import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_DATA } from "@storage/StorageConfig";
import { getAllMeals } from "./getAllMeals";
import { DateEntry } from "src/@types/dataMealTypes";

export async function mealCreate (meal: DateEntry) {
    try {
        
         let storageMeals = await getAllMeals();

         const existingMealDayIndex = storageMeals.findIndex((m: DateEntry) => m.day === meal.day);

         if (existingMealDayIndex !== -1) {
              storageMeals[existingMealDayIndex].data.push(...meal.data);
         } else {
             storageMeals.push(meal);
         }
         
         await AsyncStorage.setItem(MEAL_DATA, JSON.stringify(storageMeals));

        // await AsyncStorage.setItem(MEAL_DATA, JSON.stringify([]))
      
    } catch (error) {
        throw error;
    }
}




