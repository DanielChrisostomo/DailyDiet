import styled, { css } from "styled-components/native"
import theme from "../../theme";
import { ArrowUpRight, ArrowLeft  } from "phosphor-react-native"

export const PercentageBox = styled.View`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
    margin: 36px 0;
    border-radius: 8px;
    padding: 25px;
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

export const Button = styled.TouchableOpacity`
    flex: 1;
    position: absolute;
    top: 8px;
    right: 8px;
`

export const Arrow = styled(ArrowUpRight).attrs(({theme}) => ({
    color: theme.COLORS.GREEN_DARK
}))``;