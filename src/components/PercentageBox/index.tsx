import React from 'react'
import * as C from "./styles"
import { TouchableHighlightProps } from 'react-native'

type Props = TouchableHighlightProps & {
  typeColor: C.ContainerTypeStyleProps;
}

const PercentageBox = ( {typeColor}: Props) => {
  return (
    <C.PercentageBox typeColor={typeColor}>
      
        <C.PercentageNumber>91,86%</C.PercentageNumber>
        <C.Texto>das refeições dentro da dieta</C.Texto>

          <C.Button>
            <C.Arrow />
          </C.Button>

      </C.PercentageBox>
      )
}

export default PercentageBox
