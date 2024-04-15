import * as C from "./styles"
import React from "react"
import { useNavigation } from "@react-navigation/native"

const NewMeal = () => {
  const navigation = useNavigation()

  function handleNavigation(){
    navigation.navigate("home")
  }

  return (
    <C.AreaSafeContainer>

        <C.TitleContainer>
          <C.Button onPress={handleNavigation}>
            <C.Arrow />
          </C.Button>
          <C.Title>Nova refeição</C.Title>
        </C.TitleContainer>


      <C.NewMealContainer>

      </C.NewMealContainer>
    </C.AreaSafeContainer>
  )
}

export default NewMeal
