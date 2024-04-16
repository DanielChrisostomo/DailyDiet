import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft  } from "phosphor-react-native"

export const AreaSafeContainer = styled(SafeAreaView)`
    background-color: ${({theme}) => theme.COLORS.GRAY_5};
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
     padding: 28px;
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

export const InRow = styled.View`
    flex-direction: row;
    width: 100%;
    gap: 20px;
`

export const FlexOneView = styled.View`
    flex: 1;
`
