import Button from "@components/Button"
import { useNavigation } from "@react-navigation/native"
import * as C from "./styles"

const OnDiet = () => {
    
    const navigation = useNavigation()

    function navigateToHome (){
       navigation.navigate("home")
    }

  return (
   <C.Container>
     <C.Title>Continue Assim!</C.Title>

    <C.RegularText>Você continua <C.BoldText>dentro da dieta. </C.BoldText>Muito bem!</C.RegularText>

        <C.Image />
        <Button texto="Ir para a página inicial" onPress={navigateToHome} width={200} />

   </C.Container>
  )
}

export default OnDiet
