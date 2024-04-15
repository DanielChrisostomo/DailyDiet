import { TouchableOpacity, View } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "REGULAR" | "RED";

type Props = {
  typeColor: ButtonTypeStyleProps;
  pressed: boolean
};

export const Container = styled(TouchableOpacity)<Props>`
${({ theme, pressed, typeColor }) => css`
    background-color: ${ typeColor === "REGULAR" && pressed ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_6};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_1};
    border: 1px solid ${ typeColor === "REGULAR" && pressed  ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_5};
  `}
  width: 100%;
  min-height: 56px;
  max-height: 56px;
  border-radius: 8px;
  padding: 8px 16px;
  margin-bottom: 24px;
  justify-content: center;
  align-items:center;
  flex-direction: row;
  gap: 6px;
`

export const Texto = styled.Text`
     ${({theme}) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    `}
    text-align: center;
`

export const Status =  styled.View`
    background-color: ${({theme}) => theme.COLORS.RED_DARK};
    height: 12px;
    width: 12px;
    border-radius: 7px;
`