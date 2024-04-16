import { TouchableOpacity } from "react-native";
import theme from "src/theme";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "REGULAR" | "GREEN_LIGHT" | "RED_LIGHT" | "GREEN_DARK" | "RED_DARK";

const buttonStyleColors = {
  REGULAR: theme.COLORS.GRAY_6,
  GREEN_LIGHT: theme.COLORS.GREEN_LIGHT,
  GREEN_DARK: theme.COLORS.GREEN_DARK,
  RED_LIGHT: theme.COLORS.RED_LIGHT,
  RED_DARK: theme.COLORS.RED_DARK
};

type ButtonProps = {
  typePrimaryColor: ButtonTypeStyleProps;
  typeSecundary: ButtonTypeStyleProps;
  pressed: boolean;
};

type StatusProps = {
  typeSecundary: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<ButtonProps>`
  ${({ theme, pressed, typePrimaryColor, typeSecundary }) => css`
    background-color: ${pressed ? buttonStyleColors[typePrimaryColor] : buttonStyleColors.REGULAR};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_1};
    border: 1px solid ${pressed ? buttonStyleColors[typeSecundary] : buttonStyleColors.REGULAR};
  `}
  width: 100%;
  min-height: 56px;
  max-height: 56px;
  border-radius: 8px;
  padding: 8px 16px;
  margin-bottom: 24px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 6px;
`;

export const Texto = styled.Text`
     ${({theme}) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    `}
    text-align: center;
`

export const Status =  styled.View<StatusProps>`
    background-color: ${({theme, typeSecundary}) => typeSecundary === "GREEN_DARK" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK };
    height: 12px;
    width: 12px;
    border-radius: 7px; 
    `