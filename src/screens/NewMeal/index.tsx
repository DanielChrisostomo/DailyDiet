import * as C from "./styles"
import React from "react"
import { useNavigation } from "@react-navigation/native"
import Input from "@components/Input"
import Button from "@components/Button"
import ButtonSecundary from "@components/ButtonSecundary"
import { mealCreate } from "@storage/meals/mealCreate"
import { Alert, TextInput } from "react-native"
import {  DataEntry, Meal } from "src/@types/dataMealTypes";

const NewMeal = () => {
  const [name, setName] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [day, setDay] = React.useState("")
  const [hour, setHour] = React.useState("")
  const [buttonState, setButtonState] = React.useState("REGULAR");

  const TextInputRef = React.useRef<TextInput>(null);

  const navigation = useNavigation()

  function navigateToHome(){
    navigation.navigate("home")
  }

  async function HandleNewMealCreate() {
    try {
      if (buttonState !== "REGULAR") {

        const meal: Meal = {
          meal: name,
          hour: hour,
          description: description,
          status: buttonState, 
        };

        const entry: DataEntry = {
          day: day,
          data: [meal],
        };

        await mealCreate(entry);

        setName("") 
        setDescription("") 
        setDay("") 
        setHour("") 
        setButtonState("") 

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

      } else {
        Alert.alert(
          "Cadastrar Refeição",
          "Por favor indique se sua nova refeição está dentro da dieta ou fora da dieta"
        );
      }
    } catch (error) {
      console.log(error);
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
        <Input onChangeText={setName} inputRef={TextInputRef} value={name} />

        <C.Label>Descrição</C.Label>
        <Input height={130} top={"top"} onChangeText={setDescription} inputRef={TextInputRef} value={description} />

        <C.InRow>
          <C.FlexOneView>
          <C.Label>Data</C.Label>
          <Input onChangeText={setDay} inputRef={TextInputRef} value={day} />
          </C.FlexOneView>

          <C.FlexOneView>
          <C.Label>Hora</C.Label>
          <Input onChangeText={setHour} inputRef={TextInputRef} value={hour} />
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

        <Button texto="Cadastrar Refeição" onPress={HandleNewMealCreate} />

      </C.NewMealContainer>
    </C.AreaSafeContainer>
  )
}

export default NewMeal


