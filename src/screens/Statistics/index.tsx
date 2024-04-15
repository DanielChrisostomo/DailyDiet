import PercentageBox from "@components/PercentageBox"
import * as C from "./styles"
import { useNavigation } from "@react-navigation/native"

const Statistics = () => {
  
  const navigation = useNavigation()

  function handleHome(){
    navigation.navigate("home")
  }

  return (
    <C.AreaSafeContainer>

      <C.PercentageContainer>
        <PercentageBox typeColor="GREEN" />
          <C.Button onPress={handleHome}>
            <C.Arrow />
          </C.Button>
      </C.PercentageContainer>

        <C.GeneralStatistics>
          <C.Title>Estatísticas Gerais</C.Title>

          <C.GrayContainer>
            <C.Num>22</C.Num>
            <C.RegularText>melhor sequência de pratos dentro da dieta</C.RegularText>
          </C.GrayContainer>

          <C.GrayContainer>
            <C.Num>109</C.Num>
            <C.RegularText>refeições registradas</C.RegularText>
          </C.GrayContainer>

          <C.InRow>

            <C.onOrOffDiet typeColor="GREEN">
              <C.Num>99</C.Num>
              <C.RegularText>refeições dentro da dieta</C.RegularText>
            </C.onOrOffDiet>

            <C.onOrOffDiet typeColor="RED">
              <C.Num>10</C.Num>
              <C.RegularText>refeições fora da dieta</C.RegularText>
            </C.onOrOffDiet>

          </C.InRow>

        </C.GeneralStatistics>
    </C.AreaSafeContainer>
  )
}

export default Statistics
