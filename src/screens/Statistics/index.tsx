import PercentageBox from "@components/PercentageBox"
import * as C from "./styles"
import { useNavigation } from "@react-navigation/native"
import React from "react";
import { dietStatisticsNumbers } from "@storage/meals/dietStatisticsNumbers";
import { AppError } from "@utils/AppError";
import { StatisticsTypes } from "src/@types/dataMealTypes";

const Statistics = () => {
  const [statisticsState, setStatisticsState] = React.useState<null | StatisticsTypes>(null);

  const fetchStatistics = React.useCallback(async () => {
    try {
      const { statistics } = await dietStatisticsNumbers();
      setStatisticsState(statistics);
    } catch (error) {
      throw new AppError(
        "Não foi possível realizar a busca das estatísticas do aplicativo"
      );
    }
  }, []);

  React.useEffect(() => {
    fetchStatistics();
  }, [fetchStatistics]);
  
  const navigation = useNavigation()

  function navigateToHome(){
    navigation.navigate("home")
  }

  return (
    <C.AreaSafeContainer typeColor={statisticsState !== null ? statisticsState.dietPercentage >= 70 ? "GREEN" : "RED" : "GREEN"}>

      <C.PercentageContainer>
        <PercentageBox statistics={statisticsState} />
          <C.Button onPress={navigateToHome}>
            <C.Arrow typeColor={statisticsState !== null ? statisticsState.dietPercentage >= 70 ? "GREEN" : "RED" : "GREEN"} />
          </C.Button>
      </C.PercentageContainer>

        <C.GeneralStatistics>
          <C.Title>Estatísticas Gerais</C.Title>

          <C.GrayContainer>
            <C.Num>{statisticsState !== null ? statisticsState.onDietSequence : 0}</C.Num>
            <C.RegularText>melhor sequência de pratos dentro da dieta</C.RegularText>
          </C.GrayContainer>

          <C.GrayContainer>
            <C.Num>{statisticsState !== null ? statisticsState.totalOfMeals : 0}</C.Num>
            <C.RegularText>refeições registradas</C.RegularText>
          </C.GrayContainer>

          <C.InRow>

            <C.onOrOffDiet typeColor="GREEN">
              <C.Num>{statisticsState !== null ? statisticsState.totalOnDietMeals : 0}</C.Num>
              <C.RegularText>refeições dentro da dieta</C.RegularText>
            </C.onOrOffDiet>

            <C.onOrOffDiet typeColor="RED">
              <C.Num>{statisticsState !== null ? statisticsState.totalOffDietMeals : 0}</C.Num>
              <C.RegularText>refeições fora da dieta</C.RegularText>
            </C.onOrOffDiet>

          </C.InRow>

        </C.GeneralStatistics>
    </C.AreaSafeContainer>
  )
}

export default Statistics
