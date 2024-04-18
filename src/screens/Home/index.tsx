import React, { useCallback } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Header from "@components/Header";
import PercentageBox from "@components/PercentageBox";
import Button from "@components/Button";
import { SectionList, View } from "react-native";
import * as C from "./styles";
import { getAllMeals } from "@storage/meals/getAllMeals";
import { DataEntry } from "src/@types/dataMealTypes";


const Home = () => {
  const [listData, setListData] = React.useState<DataEntry[]>([]);

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
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <C.Container>
      <Header />

      <View>
        <PercentageBox typeColor="GREEN" />
        <C.Button onPress={navigateToStatistics}>
          <C.Arrow />
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
                section.day,
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
