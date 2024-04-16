import React from 'react'
import * as C from "./styles"
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
    texto: string;
    onPress: () => void;
    pressed: boolean;
    typePrimaryColor: C.ButtonTypeStyleProps;
    typeSecundary: C.ButtonTypeStyleProps;
}

const ButtonSecundary = ({ texto, onPress, typePrimaryColor = "REGULAR", pressed, typeSecundary}: Props) => {
  return (
    <C.Container onPress={onPress} typePrimaryColor={typePrimaryColor} typeSecundary={typeSecundary} pressed={pressed} >
        <C.Status typeSecundary={typeSecundary}  />
        <C.Texto>{texto}</C.Texto>
    </C.Container>
  )
}

export default ButtonSecundary
