
import PercentageBox from "@components/PercentageBox"
import * as C from "./styles"
import { View, Text } from "react-native"

const Statistics = () => {
  return (
    <C.AreaSafeContainer>
      <View style={{height: 130}}>
        <PercentageBox typeColor="GREEN" />
      </View>

        <C.generalStatisticsContainer>
          <C.Title>Estatísticas Gerais</C.Title>

          <C.GrayContainer>
            <C.NumberText>22</C.NumberText>
            <C.RegularText>melhor sequência de pratos dentro da dieta</C.RegularText>
          </C.GrayContainer>

          <C.GrayContainer>
            <C.NumberText>109</C.NumberText>
            <C.RegularText>refeições registradas</C.RegularText>
          </C.GrayContainer>

          <C.RowContainer>
            <C.onAndOffDiet typeColor="GREEN">
              <C.NumberText>99</C.NumberText>
              <C.RegularText>refeições dentro da dieta</C.RegularText>
            </C.onAndOffDiet>

            <C.onAndOffDiet typeColor="RED">
              <C.NumberText>10</C.NumberText>
              <C.RegularText>refeições fora da dieta</C.RegularText>
            </C.onAndOffDiet>

          </C.RowContainer>

        </C.generalStatisticsContainer>
    </C.AreaSafeContainer>
  )
}

export default Statistics
