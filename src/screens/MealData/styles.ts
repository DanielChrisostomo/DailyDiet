import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft  } from "phosphor-react-native"
import { View } from "react-native";

export const AreaSafeContainer = styled(SafeAreaView)<{ type: "RED" | "GREEN" }>`
     background-color: ${({ theme, type }) =>
    type === "GREEN" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    flex: 1;
`

export const TitleContainer = styled.View`
    padding: 24px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Title = styled.Text`
    ${({theme}) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    `}
    text-align: center;
    flex: 1;
`

export const Button = styled.TouchableOpacity`
`

export const Arrow = styled(ArrowLeft).attrs(({theme}) => ({
  color: theme.COLORS.GRAY_2
}))``;

export const NewMealContainer = styled.View`
     background-color: ${({theme}) => theme.COLORS.WHITE};
     flex: 1;
     border-radius: 24px;
     padding: 34px;
`

export const MealTitle = styled.Text`
    ${({theme}) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    `}
    text-align: left;
    margin: 16px 0px 6px
`

export const Texto = styled.Text`
     ${({theme}) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    `}
    text-align: left;
    margin-bottom: 20px
`


export const Label = styled.Text`
     ${({theme}) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    `}
    text-align: left;
    width: 100%;
    margin-bottom: 6px
`

export const FlexOneView = styled.View`
    flex: 1;
`

export const StatusContainer =  styled(View)`
    background-color: ${({theme}) => theme.COLORS.GRAY_6};
    padding: 8px 12px;
    border-radius: 24px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    max-width: 150px;
    gap: 12px;
    margin-top: 10px;
`

export const StatusText = styled.Text`
${({theme}) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    `}
    margin-bottom: 6px
`

export const Status =  styled(View)<{ type: "RED" | "GREEN" }>`
    background-color: ${({ theme, type }) =>
    type === "GREEN" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    height: 8px;
    width: 8px;
    border-radius: 4px; 
`

