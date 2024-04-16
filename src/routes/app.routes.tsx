import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@screens/Home";
import MealData from "@screens/MealData";
import MealEdit from "@screens/MealEdit/indext";
import NewMeal from "@screens/NewMeal";
import NotOnDiet from "@screens/NotOnDiet";
import OnDiet from "@screens/OnDiet";
import Statistics from "@screens/Statistics";

const { Navigator, Screen } = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="home" component={Home} />
        <Screen name="statistics" component={Statistics} />
        <Screen name="newMeal" component={NewMeal} />
        <Screen name="onDiet" component={OnDiet} />
        <Screen name="notOnDiet" component={NotOnDiet} />
        <Screen name="mealData" component={MealData} />
        <Screen name="mealEdit" component={MealEdit} />
    </Navigator>
  )
};

export default AppRoutes;