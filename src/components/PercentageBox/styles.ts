import styled, { css } from "styled-components/native"
import theme from "../../theme";
import { View } from "react-native";

export type ContainerTypeStyleProps = "GREEN" | "RED";

type Props = {
  typeColor?: ContainerTypeStyleProps;
}

export const PercentageBox = styled(View)<Props>`
    width: 100%;
    background-color: ${({theme, typeColor}) => typeColor === "GREEN" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    border-radius: 8px;
    padding: 30px;
    position: relative;
`

export const PercentageNumber = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
  text-align: center;
`;

export const Texto = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
    ` }
  text-align: center;
`