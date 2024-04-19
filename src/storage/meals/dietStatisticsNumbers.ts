import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_DATA } from "@storage/StorageConfig";
import { AppError } from "@utils/AppError";
import { storageTypes } from "src/@types/dataMealTypes";

export async function dietStatisticsNumbers() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_DATA);
    const meals: storageTypes = storage ? JSON.parse(storage) : [];

    let totalMealsCount = 0;
    let onDietCount = 0;
    let notOnDietCount = 0;
    let maxOnDietSequence = 0;
    let currentOnDietSequence = 0;

    meals.forEach((item) => {
      if (item.data) {
        item.data.forEach((dataItem) => {
          if (dataItem.status) {
            totalMealsCount++;
          }
        });

        item.data.forEach((dataItem) => {
          if (dataItem.status === "GREEN_LIGHT") {
            onDietCount++;
          }
          if (dataItem.status === "RED_LIGHT") {
            notOnDietCount++;
          }
        });

        let currentDaySequence = 0;

        item.data.forEach((meal) => {
          if (meal.status === "GREEN_LIGHT") {
            currentDaySequence++;
            currentOnDietSequence++;

          
            maxOnDietSequence = Math.max(maxOnDietSequence, currentOnDietSequence);
          } else {
            currentOnDietSequence = 0; 
            currentDaySequence = 0;
          }
        });

      }
    });

    let dietPercentage = 0
    function percentageOfDiet() {
      if(totalMealsCount !== 0) {
        dietPercentage = (onDietCount / totalMealsCount) * 100;
        return dietPercentage;
      } else {
        dietPercentage = 0
        return dietPercentage;
      }
    } 
    const percentageValue = percentageOfDiet();

    const statistics = {
      totalOfMeals: totalMealsCount,
      totalOnDietMeals: onDietCount,
      totalOffDietMeals: notOnDietCount,
      onDietSequence: maxOnDietSequence,
      dietPercentage: percentageValue,
    };

    return {
      statistics,
    };
  } catch (error) {
    throw new AppError(
      "Um erro ocorreu ao tentar realizar as estatísticas da dieta"
    );
  }
}
