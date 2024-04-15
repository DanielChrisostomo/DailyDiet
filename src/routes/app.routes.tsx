import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@screens/Home";
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
    </Navigator>
  )
};

export default AppRoutes;