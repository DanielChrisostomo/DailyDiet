import React from 'react'
import * as C from "./styles"
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
    texto: string;
    onPress: () => void;
    typeColor?: C.ButtonTypeStyleProps;
    pressed: boolean;
}

const PositiveButton = ({ texto, onPress, typeColor = "REGULAR", pressed,...rest}: Props) => {
  return (
    <C.Container onPress={onPress} typeColor={typeColor} pressed={pressed} >
        <C.Status />
        <C.Texto>{texto}</C.Texto>
    </C.Container>
  )
}

export default PositiveButton
