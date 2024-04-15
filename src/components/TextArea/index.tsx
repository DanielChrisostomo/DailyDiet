import React from 'react'
import * as C from "./styles"
import { TextInput, TextInputProps } from 'react-native'

type Props = TextInputProps & {
    inputRef?: React.RefObject<TextInput>;
}

const TextArea = ({...rest} : Props) => {
  return (
    <C.Container {...rest}  />
  )
}

export default TextArea
