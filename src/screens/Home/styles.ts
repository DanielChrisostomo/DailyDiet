import styled, { css } from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    background-color: ${({theme}) => theme.COLORS.WHITE};
    flex: 1;
    padding: 20px;
`

export const Texto = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
    ` }
  text-align: left;
`

export const BtnText = styled.Text`
   ${({theme}) => css`
   font-size: ${theme.FONT_SIZE.SM}px;
   `}
   color: white;
   text-align: center;
`