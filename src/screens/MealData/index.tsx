import React from "react";
import { Alert, Modal } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { deleteMeal } from "@storage/meals/deleteMeal";
import Button from "@components/Button";
import { AppError } from "@utils/AppError";

import { RouteParams } from "src/@types/routeParams";
import { Meal } from "src/@types/dataMealTypes";

import * as C from "./styles";

export type MealInfoTypes = {
  day: string;
  data: Meal;
};

const MealData = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

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
    },
  };

  const navigateToHome = () => {
    navigation.navigate("home");
  };

  const navigateToMealEdit = (
    description: string,
    hour: string,
    day: string,
    meal: string,
    status: string
  ) => {
    navigation.navigate("mealEdit", { description, hour, day, meal, status });
  };

  async function mealExclusion() {
    try {
      await deleteMeal(dataEntry);
    } catch (error) {
      throw new AppError("Um erro ocorreu ao tentar executar mealExclusion");
    } finally {
      navigation.navigate("home");
    }
  }


  return (
    <>
    <C.AreaSafeContainer typeColor={status === "GREEN_LIGHT" ? "GREEN" : "RED"} >
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
          onPress={() => setModalVisible(!modalVisible)}
          typeColor="LIGHT"
          typeIcon="REMOVE"
        />
      </C.NewMealContainer>

    </C.AreaSafeContainer>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <C.ModalOpacity>
        <C.ModalContainer>
          <C.modalText>Deseja realmente excluir o registro da refeição ?</C.modalText>
          <C.inRow>
            <Button typeColor="LIGHT" texto="Cancelar" onPress={() => setModalVisible(!modalVisible)} width={140} />
            <Button typeColor="DARK" texto="Sim, Excluir" onPress={mealExclusion} width={140}/>
          </C.inRow>
        </C.ModalContainer>
        </C.ModalOpacity>
      </Modal>
      </>
  );
};

export default MealData;