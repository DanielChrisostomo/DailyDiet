import Button from "@components/Button"
import { useNavigation } from "@react-navigation/native"
import * as C from "./styles"

const NotOnDiet = () => {
    
    const navigation = useNavigation()

    function navigateToHome (){
       navigation.navigate("home")
    }

  return (
   <C.Container>
     <C.Title>Que Pena!</C.Title>

    <C.RegularText>Você <C.BoldText>saiu da dieta. </C.BoldText>dessa vez, mas continue se esforçando e não desista!</C.RegularText>

        <C.Image />
        <Button texto="Ir para a página inicial" onPress={navigateToHome} width={200} />

   </C.Container>
  )
}

export default NotOnDiet
