import styled, { css } from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { ArrowUpRight } from "phosphor-react-native"

export const Container = styled(SafeAreaView)`
    background-color: ${({theme}) => theme.COLORS.WHITE};
    flex: 1;
    padding: 20px;
`

export const Button = styled.TouchableOpacity`
    flex: 1;
    position: absolute;
    top: 8px;
    right: 8px;
`

export const Arrow = styled(ArrowUpRight).attrs(({theme}) => ({
  color: theme.COLORS.GREEN_DARK
}))``;

export const Texto = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
    ` }
  text-align: left;
  margin: 36px 0 8px 0;
`

export const MealDate = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
    ` }
    margin: 16px 0 12px;
`

export const MealContainer = styled.TouchableOpacity`
    align-items: center;
    padding: 16px;
    flex-direction: row;
    border-radius: 4px;
    margin-bottom: 12px;
    border: 1px solid ${({theme}) => theme.COLORS.GRAY_4};
` 

export const MealTime = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XSM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
    ` }
`

export const StickElement =  styled.View`
    background-color: ${({theme}) => theme.COLORS.GRAY_4};
    height: 12px;
    width: 1px;
    margin: 0 10px;
`

export const MealText = styled.Text`
     ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
    `}
    flex: 1;
`

type StatusProps = {
  typeColor: "RED_LIGHT" | "GREEN_LIGHT";
};

export const Status =  styled(View)<StatusProps>`
    background-color: ${({ theme, typeColor }) =>
    typeColor === "GREEN_LIGHT" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    height: 14px;
    width: 14px;
    border-radius: 7px;
`