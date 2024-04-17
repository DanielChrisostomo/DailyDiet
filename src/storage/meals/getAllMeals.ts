import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_DATA } from "@storage/StorageConfig";

export async function getAllMeals () {
    try {
      const storage =  await AsyncStorage.getItem(MEAL_DATA)
      const meals = storage ? JSON.parse(storage) : []
      return meals
    } catch (error) {
        throw error
    }
}