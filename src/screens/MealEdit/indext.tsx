import * as C from "./styles"
import React from "react"
import { useNavigation } from "@react-navigation/native"
import Input from "@components/Input"
import Button from "@components/Button"
import ButtonSecundary from "@components/ButtonSecundary"

const MealEdit = () => {
  const [name, setName] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [date, setDate] = React.useState("")
  const [hour, setHour] = React.useState("")
  const [buttonState, setButtonState] = React.useState("REGULAR");


  const navigation = useNavigation()

  function navigateToHome(){
    navigation.navigate("home")
  }

  function HandleOnDietNavigation(){
    switch( buttonState) {
      case "GREEN_LIGHT" :
        navigation.navigate("onDiet")
        break;
      case "RED_LIGHT" : 
      navigation.navigate("notOnDiet")
      break;
      default:
      console.log("Error");
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
        <Input onChangeText={setName} />

        <C.Label>Descrição</C.Label>
        <Input height={130} onChangeText={setDescription} />

        <C.InRow>
          <C.FlexOneView>
          <C.Label>Data</C.Label>
          <Input onChangeText={setDate} />
          </C.FlexOneView>

          <C.FlexOneView>
          <C.Label>Hora</C.Label>
          <Input onChangeText={setHour} />
          </C.FlexOneView>
        </C.InRow>

        <C.FlexOneView>
        <C.Label>Está dentro da dieta?</C.Label>
        <C.InRow>
          <C.FlexOneView>
          <ButtonSecundary onPress={() => setButtonState("GREEN_LIGHT")} pressed={buttonState === "GREEN_LIGHT"} texto="Sim" typePrimaryColor="GREEN_LIGHT" typeSecundary="GREEN_DARK" />
          </C.FlexOneView>

          <C.FlexOneView>
          <ButtonSecundary onPress={() => setButtonState("RED_LIGHT")} pressed={buttonState === "RED_LIGHT"} texto="Não" typePrimaryColor="RED_LIGHT" typeSecundary="RED_DARK" />
          </C.FlexOneView>
        </C.InRow>
        </C.FlexOneView>

        <Button texto="Salvar Alterações" onPress={HandleOnDietNavigation}/>

      </C.NewMealContainer>
    </C.AreaSafeContainer>
  )
}

export default MealEdit