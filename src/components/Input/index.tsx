import React from 'react'
import * as C from "./styles"
import { TextInput, TextInputProps } from 'react-native'

type Props = TextInputProps & {
    inputRef?: React.RefObject<TextInput>;
    height?:number;
}

const Input = ( { height, ...rest } : Props) => {
  return (
    <C.Container {...rest} height={height} />
  )
}

export default Input

