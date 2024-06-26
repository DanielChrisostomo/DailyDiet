import React, { useCallback } from "react";
import { SectionList, View } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { getAllMeals } from "@storage/meals/getAllMeals";

import Header from "@components/Header";
import PercentageBox from "@components/PercentageBox";
import Button from "@components/Button";
import { dietStatisticsNumbers } from "@storage/meals/dietStatisticsNumbers";
import { AppError } from "@utils/AppError";

import { DataEntry, StatisticsTypes } from "src/@types/dataMealTypes";
import * as C from "./styles";

const Home = () => {
  const [listData, setListData] = React.useState<DataEntry[]>([]);
  const [statisticsState, setStatisticsState] =
    React.useState<null | StatisticsTypes>(null);

  const navigation = useNavigation();

  function navigateToStatistics() {
    navigation.navigate("statistics");
  }

  function navigateToNewMeal() {
    navigation.navigate("newMeal");
  }

  function navigateToMealData(
    hour: string,
    meal: string,
    status: string,
    description: string,
    day: string
  ) {
    navigation.navigate("mealData", {
      hour,
      meal,
      status,
      description,
      day,
    });
  }

  async function fetchMeals() {
    try {
      const data = await getAllMeals();
      setListData(data);
    } catch (error) {
      throw new AppError(
        "Um erro ocorreu ao tentar buscar as refeições cadastradas."
      );
    }
  }

  async function fetchStatistics() {
    try {
      const { statistics } = await dietStatisticsNumbers();
      if (statistics !== null) setStatisticsState(statistics);
    } catch (error) {
      throw new AppError(
        "Não foi possível realizar a busca das estatísticas do aplicativo"
      );
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
      fetchStatistics();
    }, [])
  );

  return (
    <C.Container>
      <Header />

      <View>
        <PercentageBox statistics={statisticsState} />
        <C.Button onPress={navigateToStatistics}>
          <C.Arrow
            typeColor={
              statisticsState !== null
                ? statisticsState.dietPercentage >= 70
                  ? "GREEN"
                  : "RED"
                : "GREEN"
            }
          />
        </C.Button>
      </View>

      <C.Texto>Refeições</C.Texto>
      <Button
        onPress={navigateToNewMeal}
        texto="Nova Refeição"
        typeIcon="PLUS"
      />

      <SectionList
        sections={listData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index, section }) => (
          <C.MealContainer
            onPress={() =>
              navigateToMealData(
                item.hour,
                item.meal,
                item.status,
                item.description,
                section.day
              )
            }
          >
            <C.MealTime>{item.hour}</C.MealTime>
            <C.StickElement />
            <C.MealText>{item.meal}</C.MealText>
            <C.Status
              typeColor={
                item.status === "GREEN_LIGHT" ? "GREEN_LIGHT" : "RED_LIGHT"
              }
            />
          </C.MealContainer>
        )}
        renderSectionHeader={({ section }) => (
          <C.MealDate>{section.day}</C.MealDate>
        )}
      />
    </C.Container>
  );
};

export default Home;
