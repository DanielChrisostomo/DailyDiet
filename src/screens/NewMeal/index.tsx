import * as C from "./styles"
import React from "react"
import { useNavigation } from "@react-navigation/native"
import Input from "@components/Input"
import TextArea from "@components/TextArea"
import Button from "@components/Button"
import { View } from "react-native"
import PositiveButton from "@components/PositiveButton"
import NegativeButton from "@components/NegativeButton"

const NewMeal = () => {
  const [name, setName] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [date, setDate] = React.useState("")
  const [hour, setHour] = React.useState("")
  const [isPositive, setIsPositive] = React.useState(false);
  const [isNegative, setIsNegative] = React.useState(false);

  const navigation = useNavigation()

  function navigateToHome(){
    navigation.navigate("home")
  }

  function HandleOnDietNavigation(){
    console.log("On Diet ?")
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
        <TextArea onChangeText={setDescription} />

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
            <PositiveButton onPress={() => setIsPositive(!isPositive)} pressed={isPositive} texto="Sim" />
          </C.FlexOne>

          <C.FlexOne>
          <NegativeButton onPress={() => setIsNegative(!isNegative)} pressed={isNegative} texto="Não"/>
          </C.FlexOne>
        </C.InRow>
        </View>

        <Button texto="Cadastrar Refeição" onPress={HandleOnDietNavigation}/>
      </C.NewMealContainer>
    </C.AreaSafeContainer>
  )
}

export default NewMeal