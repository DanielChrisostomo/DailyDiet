import { TouchableOpacityProps } from "react-native"

import * as C from "./styles"

type Props = TouchableOpacityProps & {
    texto: string;
    onPress: () => void;
    typeColor?: C.ButtonTypeStyleProps;
    typeIcon?:C.ButtonTypeIconProps
    width?: C.ButtonWidthProps;
}

const Button = ( { texto, onPress, typeColor = "DARK", typeIcon, width , ...rest }: Props) => {
  return (
    <C.Container onPress={onPress} typeColor={typeColor} width={width} >
        {typeIcon === "PLUS" ? <C.AddIcon typeColor={typeColor}></C.AddIcon> : null}
        {typeIcon === "REMOVE" ? <C.TrashIcon typeColor={typeColor}></C.TrashIcon> : null}
        {typeIcon === "EDIT" ? <C.EditIcon typeColor={typeColor}></C.EditIcon> : null}
        <C.Text typeColor={typeColor}>{texto}</C.Text>
    </C.Container>
  )
}

export default Button
