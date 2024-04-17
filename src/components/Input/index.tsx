import React from 'react'
import * as C from "./styles"
import { TextInput, TextInputProps } from 'react-native'

type Props = TextInputProps & {
    inputRef?: React.RefObject<TextInput>;
    height?:number;
    top?: "auto" | "center" | "bottom" | "top";
}

const Input = ( { inputRef ,height, top, ...rest } : Props) => {
  return (
    <C.Container ref={inputRef} {...rest} height={height} textAlignVertical={top}  />
  )
}

export default Input

