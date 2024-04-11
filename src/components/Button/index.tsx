import { TouchableOpacityProps } from "react-native"
import * as C from "./styles"

type Props = TouchableOpacityProps & {
    texto: string
}

const Button = ( { texto ,...rest }: Props) => {
  return (
    <C.Container>
        <C.AddIcon></C.AddIcon>
        <C.Text>{texto}</C.Text>
    </C.Container>
  )
}

export default Button
