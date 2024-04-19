// type MealStatus = 'GREEN_LIGHT' | 'RED_LIGHT'; 

type storageTypes = DataEntry[];

export type Meal = {
  meal: string;
  hour: string;
  description: string;
  status: string;
}
  
export type DataEntry  = {
  day: string;
  data: Meal[];
}

export type MealInfoTypes = {
  day: string;
  data: Meal;
};

export type StatisticsTypes = {
  totalOfMeals: number;
  totalOnDietMeals: number;
  totalOffDietMeals: number;
  onDietSequence: number;
  dietPercentage: number;
};


