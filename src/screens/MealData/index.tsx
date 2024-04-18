import {
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { Alert } from "react-native";
import Button from "@components/Button";
import { RouteParams } from "src/@types/routeParams";
import { deleteMeal } from "@storage/meals/deleteMeal";
import * as C from "./styles";
import { Meal } from "src/@types/dataMealTypes";

export type MealInfoTypes  = {
  day: string;
  data: Meal;
}

const MealData = () => {
  const navigation = useNavigation();

  const route = useRoute();

  const { description, hour, day, meal, status } = route.params as RouteParams;

  const dataEntry: MealInfoTypes = {
    day: day,
    data: {
      description: description,
      meal: meal,
      hour: hour,
      status: status,
    }
  }

  const navigateToHome = () => {
    navigation.navigate("home");
  };

  const navigateToMealEdit = (
    hour: string,
    meal: string,
    status: string,
    description: string,
    day: string
  ) => {
    navigation.navigate("mealEdit", { hour, meal, status, description, day });
  };

  async function mealExclusion() {
    await deleteMeal(dataEntry);
    navigation.navigate("home");
  }

  const deleteMealHandler = async () => {
    try {
      Alert.alert(
        "Excluir Refeição",
        "Tem certeza que deseja excluir a refeição ?",
        [
          {
            text: "sim",
            onPress: mealExclusion,
          },
          {
            text: "não",
            style: "cancel",
          },
        ]
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <C.AreaSafeContainer type={status === "GREEN_LIGHT" ? "GREEN" : "RED"}>
      <C.TitleContainer>
        <C.Button onPress={navigateToHome}>
          <C.Arrow />
        </C.Button>
        <C.Title>Refeição</C.Title>
      </C.TitleContainer>

      <C.NewMealContainer>
        <C.MealTitle>{meal}</C.MealTitle>
        <C.Texto>{description}</C.Texto>

        <C.FlexOneView>
          <C.Label>Data e Hora</C.Label>
          <C.Texto>{`${day} às ${hour}`}</C.Texto>

          <C.StatusContainer>
            <C.Status type={status === "GREEN_LIGHT" ? "GREEN" : "RED"} />
            {status === "GREEN_LIGHT" ? (
              <C.StatusText>dentro da dieta</C.StatusText>
            ) : (
              <C.StatusText>fora da dieta</C.StatusText>
            )}
          </C.StatusContainer>
        </C.FlexOneView>

        <Button
          texto="Editar Refeição"
          onPress={() =>
            navigateToMealEdit(description, hour, day, meal, status)
          }
          typeIcon="EDIT"
        />
        <Button
          texto="Excluir Refeição"
          onPress={deleteMealHandler}
          typeColor="LIGHT"
          typeIcon="REMOVE"
        />
      </C.NewMealContainer>
    </C.AreaSafeContainer>
  );
};

export default MealData;
