import styled, { css } from "styled-components/native";
import theme from "src/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft  } from "phosphor-react-native"
import { View } from "react-native";

type ContainerTypeStyleProps = "GREEN" | "RED";

type Props = {
  typeColor: ContainerTypeStyleProps;
}

export const AreaSafeContainer = styled(SafeAreaView)<Props>`
    background-color: ${({theme, typeColor}) => typeColor === "GREEN" ? theme.COLORS.GREEN_LIGHT :  theme.COLORS.RED_LIGHT};
    flex: 1;
`

export const PercentageContainer = styled.View`
    height: 130px;
`

export const StatisticBox = styled.View`
    height: 130px;
    position: relative;
`

export const Button = styled.TouchableOpacity`
    flex: 1;
    position: absolute;
    top: 16px;
    left: 12px;
`

export const Arrow = styled(ArrowLeft).attrs<Props>(({theme, typeColor}) => ({
  color: `${typeColor === "GREEN" ? theme.COLORS.GREEN_DARK :  theme.COLORS.RED_DARK}`
}))``;

export const GeneralStatistics = styled.View`
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

export const Num = styled.Text`
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

export const InRow = styled.View`
    flex-direction: row;
    width: 100%;
    gap: 20px;
`

export const onOrOffDiet = styled(View)<Props>`
    flex: 1;
    background-color: ${({theme, typeColor}) => typeColor === "GREEN" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    border-radius: 8px;
    padding: 20px;
`
