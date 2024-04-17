export type Meal = {
    meal: string;
    hour: string;
    description: string;
    status: string;
  }
  
 export type DateEntry  = {
    day: string;
    data: Meal[];
  }