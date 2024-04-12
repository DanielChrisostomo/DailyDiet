import styled, { css } from "styled-components/native";
import theme from "src/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";


type ContainerTypeStyleProps = "GREEN" | "RED";

type Props = {
  typeColor: ContainerTypeStyleProps;
}

export const AreaSafeContainer = styled(SafeAreaView)`
    background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
    flex: 1;
`

export const generalStatisticsContainer = styled.View`
     background-color: ${({theme}) => theme.COLORS.WHITE};
     flex: 1;
     border-radius: 24px;
     padding: 30px;
`

export const Title = styled.Text`
    ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    ` }
    text-align: center;
    margin-bottom: 30px
`

export const GrayContainer = styled.View`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.GRAY_6};
    padding: 16px;
    margin-bottom: 16px;
    border-radius: 8px;
`

export const NumberText = styled.Text`
   ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
    ` }
    text-align: center;
    margin-bottom: 6px;
`;

export const RegularText = styled.Text`
   ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
    ` }
    text-align: center;
`;

export const RowContainer = styled.View`
    flex-direction: row;
    width: 100%;
    gap: 20px;
`

export const onAndOffDiet = styled(View)<Props>`
    flex: 1;
    background-color: ${({theme, typeColor}) => typeColor === "GREEN" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    border-radius: 8px;
    padding: 20px;
`
