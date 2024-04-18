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