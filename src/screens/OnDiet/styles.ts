import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Success from "../../assets/Success.svg"


export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.WHITE};
    padding: 30px;
    justify-content: center;
    align-items: center;
`

export const Title = styled.Text`
    ${({theme}) => css`
        font-size: ${({theme}) =>  theme.FONT_SIZE.XL}px;
        color: ${({theme}) => theme.COLORS.GREEN_DARK};
        font-family:${({theme}) => theme.FONT_FAMILY.BOLD} ;
    `}
    margin-bottom: 8px;
`

export const RegularText = styled.Text`
    ${({theme}) => css`
        font-size: ${({theme}) =>  theme.FONT_SIZE.LG}px;
        color: ${({theme}) => theme.COLORS.GRAY_1};
        font-family:${({theme}) => theme.FONT_FAMILY.REGULAR};
    `}
`

export const BoldText = styled.Text`
    ${({theme}) => css`
        font-size: ${({theme}) =>  theme.FONT_SIZE.LG}px;
        color: ${({theme}) => theme.COLORS.GRAY_1};
        font-family:${({theme}) => theme.FONT_FAMILY.BOLD};
    `}
`

export const Image = styled(Success)`
    margin: 32px 0;
`