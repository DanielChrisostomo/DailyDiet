export declare global {
    namespace ReactNavigation {
      interface RootParamList {
        home: undefined;
        statistics: undefined;
        newMeal:undefined;
        onDiet:undefined;
        notOnDiet:undefined;
        mealData: {
          hour: string;
          meal: string;
          status: string;
          description: description;
          day: string;
        };
        mealEdit:{
          hour: string;
          meal: string;
          status: string;
          description: description;
          day: string;
        }
      }
    }
  }