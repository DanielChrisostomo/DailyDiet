import { TouchableOpacityProps } from "react-native"

import * as C from "./styles"

type Props = TouchableOpacityProps & {
    texto: string;
    onPress: () => void;
    typeColor?: C.ButtonTypeStyleProps;
    typeIcon?:C.ButtonTypeIconProps
    width?: C.ButtonWidthProps;
}

const Button = ( { texto, onPress, typeColor = "DARK", typeIcon, width ,...rest }: Props) => {
  return (
    <C.Container onPress={onPress} typeColor={typeColor} width={width} >
        {typeIcon === "PLUS" ? <C.AddIcon></C.AddIcon> : null}
        {typeIcon === "REMOVE" ? <C.TrashIcon></C.TrashIcon> : null}
        {typeIcon === "EDIT" ? <C.EditIcon></C.EditIcon> : null}
        <C.Text>{texto}</C.Text>
    </C.Container>
  )
}

export default Button
