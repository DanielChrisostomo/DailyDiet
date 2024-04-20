import React from "react";
import { Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RouteParams } from "src/@types/routeParams";

import { mealCreate } from "@storage/meals/mealCreate";
import { saveMealChanges } from "@storage/meals/mealChange";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_DATA } from "@storage/StorageConfig";

import Input from "@components/Input";
import Button from "@components/Button";
import ButtonSecundary from "@components/ButtonSecundary";
import { MealInfoTypes } from "@screens/MealData";
import { deleteMeal } from "@storage/meals/deleteMeal";

import { AppError } from "@utils/AppError";
import * as C from "./styles";

const MealEdit = () => {
  const route = useRoute();
  const { description, hour, day, meal, status } = route.params as RouteParams;

  const [nameText, setNameText] = React.useState(meal);
  const [descriptionText, setDescriptionText] = React.useState(description);
  const [dateText, setDateText] = React.useState(day);
  const [hourText, setHourText] = React.useState(hour);
  const [buttonState, setButtonState] = React.useState(status);

  const navigation = useNavigation();

  const mealInfoDataEntry: MealInfoTypes = {
    day: day,
    data: {
      description: description,
      meal: meal,
      hour: hour,
      status: status,
    },
  };

  let dataEntry: MealInfoTypes = {
    day: dateText,
    data: {
      description: descriptionText,
      hour: hourText,
      meal: nameText,
      status: buttonState,
    },
  };

  function navigateToHome() {
    navigation.navigate("home");
  }

  async function handleMealchanges(dataEntry: MealInfoTypes) {
    if (
      buttonState !== "REGULAR" &&
      nameText !== "" &&
      descriptionText !== "" &&
      dateText !== "" &&
      hourText !== ""
    ) {
      try {
        const result = await saveMealChanges(mealInfoDataEntry);
        if (result) {
          const { mealIndex, storageMeals, existingMealDayIndex } = result;
          if (mealIndex !== -1) {

            if (storageMeals[existingMealDayIndex].day === dataEntry.day) {
              storageMeals[existingMealDayIndex].day = dateText;
              storageMeals[existingMealDayIndex].data[mealIndex] = dataEntry.data;
              await AsyncStorage.setItem(MEAL_DATA, JSON.stringify(storageMeals));
            } else { 
              try {
                await deleteMeal({
                  day: storageMeals[existingMealDayIndex].day,
                  data: storageMeals[existingMealDayIndex].data[mealIndex]
                })
                await mealCreate({
                  day: dateText,
                  data: [dataEntry.data]
                });
              } catch (error) {
                console.log("erro aqui")
              }
            } 
  
            switch (buttonState) {
              case "GREEN_LIGHT":
                navigation.navigate("onDiet");
                break;
              case "RED_LIGHT":
                navigation.navigate("notOnDiet");
                break;
              default:
                console.log("Error ");
            }
          }
        } else {
          throw new AppError("Não foi possível salvar as alterações da refeição selecionada.");
        }
      } catch (error) {
        throw new AppError(
          "Não foi possível salvar as alterações da refeição selecionada."
        );
      }
    } else {
      Alert.alert(
        "Cadastrar Refeição",
        "Por favor, informe os dados para que sua refeição possa ser cadastrada. Sua refeição está dentro da dieta ?"
      );
    }
  }


  return (
    <C.AreaSafeContainer>
      <C.TitleContainer>
        <C.Button onPress={navigateToHome}>
          <C.Arrow />
        </C.Button>
        <C.Title>Editar Refeição</C.Title>
      </C.TitleContainer>

      <C.NewMealContainer>
        <C.Label>Nome</C.Label>
        <Input onChangeText={setNameText} value={nameText} />

        <C.Label>Descrição</C.Label>
        <Input
          height={130}
          onChangeText={setDescriptionText}
          top={"top"}
          value={descriptionText}
        />

        <C.InRow>
          <C.FlexOneView>
            <C.Label>Data</C.Label>
            <Input onChangeText={setDateText} value={dateText} />
          </C.FlexOneView>

          <C.FlexOneView>
            <C.Label>Hora</C.Label>
            <Input onChangeText={setHourText} value={hourText} />
          </C.FlexOneView>
        </C.InRow>

        <C.FlexOneView>
          <C.Label>Está dentro da dieta?</C.Label>
          <C.InRow>
            <C.FlexOneView>
              <ButtonSecundary
                onPress={() => setButtonState("GREEN_LIGHT")}
                pressed={buttonState === "GREEN_LIGHT"}
                texto="Sim"
                typePrimaryColor="GREEN_LIGHT"
                typeSecundary="GREEN_DARK"
              />
            </C.FlexOneView>

            <C.FlexOneView>
              <ButtonSecundary
                onPress={() => setButtonState("RED_LIGHT")}
                pressed={buttonState === "RED_LIGHT"}
                texto="Não"
                typePrimaryColor="RED_LIGHT"
                typeSecundary="RED_DARK"
              />
            </C.FlexOneView>
          </C.InRow>
        </C.FlexOneView>

        <Button
          texto="Salvar Alterações"
          onPress={() => handleMealchanges(dataEntry)}
        />
      </C.NewMealContainer>
    </C.AreaSafeContainer>
  );
};

export default MealEdit;
