import * as C from "./styles"
import React from "react"
import { useNavigation } from "@react-navigation/native"
import Input from "@components/Input"
import Button from "@components/Button"
import { Alert, View } from "react-native"
import ButtonSecundary from "@components/ButtonSecundary"

const NewMeal = () => {
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
          <C.Title>Nova refeição</C.Title>
        </C.TitleContainer>

      <C.NewMealContainer>

        <C.Label>Nome</C.Label>
        <Input onChangeText={setName} />

        <C.Label>Descrição</C.Label>
        <Input height={156} onChangeText={setDescription} />

        <C.InRow>
          <C.FlexOne>
          <C.Label>Data</C.Label>
          <Input onChangeText={setDate} />
          </C.FlexOne>

          <C.FlexOne>
          <C.Label>Hora</C.Label>
          <Input onChangeText={setHour} />
          </C.FlexOne>
        </C.InRow>

        <View style={{flex: 1}}>
        <C.Label>Está dentro da dieta?</C.Label>
        <C.InRow>
          <C.FlexOne>
          <ButtonSecundary onPress={() => setButtonState("GREEN_LIGHT")} pressed={buttonState === "GREEN_LIGHT"} texto="Sim" typePrimaryColor="GREEN_LIGHT" typeSecundary="GREEN_DARK" />
          </C.FlexOne>

          <C.FlexOne>
          <ButtonSecundary onPress={() => setButtonState("RED_LIGHT")} pressed={buttonState === "RED_LIGHT"} texto="Não" typePrimaryColor="RED_LIGHT" typeSecundary="RED_DARK" />
          </C.FlexOne>
        </C.InRow>
        </View>

        <Button texto="Cadastrar Refeição" onPress={HandleOnDietNavigation}/>

      </C.NewMealContainer>
    </C.AreaSafeContainer>
  )
}

export default NewMeal