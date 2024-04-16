import * as C from "./styles"
import React from "react"
import { useNavigation } from "@react-navigation/native"
import Button from "@components/Button"

const MealData = () => {
  const [name, setName] = React.useState("")
  const [description, setDescription] = React.useState("")

  const navigation = useNavigation()

  function navigateToHome(){
    navigation.navigate("home")
  }

  function navigateToMealEdit(){
    navigation.navigate("mealEdit")
  }

  return (
    <C.AreaSafeContainer>

        <C.TitleContainer>
          <C.Button onPress={navigateToHome}>
            <C.Arrow />
          </C.Button>
          <C.Title>Refeição</C.Title>
        </C.TitleContainer>

      <C.NewMealContainer>

        <C.MealTitle>Sanduíche</C.MealTitle>
        <C.Texto>Sanduíche de pão integral com atum e salada de alface e tomate</C.Texto>

        <C.FlexOneView>
          <C.Label>Data e Hora</C.Label>
          <C.Texto>12/08/2022 às 16:00</C.Texto>

          <C.StatusContainer>
            <C.Status type="GREEN" />
            <C.StatusText>dentro da dieta</C.StatusText>
          </C.StatusContainer>
        </C.FlexOneView>
       
        <Button texto="Editar Refeição" onPress={navigateToMealEdit} typeIcon="EDIT" />
        <Button texto="Editar Refeição" onPress={() => {}} typeColor="LIGHT" typeIcon="REMOVE"/>

      </C.NewMealContainer >
    </C.AreaSafeContainer>
  )
}

export default MealData
