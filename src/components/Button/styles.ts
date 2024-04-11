import styled, { css } from "styled-components/native";
import { Plus } from "phosphor-react-native"


export const Container = styled.TouchableOpacity`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.GRAY_2};
    height: 60px;
    border-radius: 8px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px 0px;
    `

export const Text = styled.Text`
   ${({theme}) => css`
   color: ${theme.COLORS.WHITE};
   font-size: ${theme.FONT_SIZE.SM}px;
   `}
`

export const AddIcon = styled(Plus).attrs(({theme})=> ({
    color: theme.COLORS.WHITE
}))`
    margin-right: 10px;
`