import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Plus, PencilSimpleLine, Trash } from "phosphor-react-native"


export type ButtonTypeStyleProps = "DARK" | "LIGHT";
export type ButtonTypeIconProps = "PLUS" | "REMOVE" | "EDIT";
export type ButtonWidthProps = 200 | '100%';

type Props = {
  typeColor: ButtonTypeStyleProps;
  width?: ButtonWidthProps;
};

export const Container = styled(TouchableOpacity)<Props>`
    width: ${({ width }) => width === '100%' ? '100%' : `${width}px`};
    background-color: ${({ theme, typeColor }) =>
    typeColor === "DARK" ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};
    height: 60px;
    border-radius: 8px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    `

export const Text = styled.Text`
   ${({theme}) => css`
   color: ${theme.COLORS.WHITE};
   font-size: ${theme.FONT_SIZE.SM}px;
   `}
`

export const AddIcon = styled(Plus).attrs(({theme}) => ({
    color: theme.COLORS.WHITE,
}))`
    margin-right: 10px;
`;

export const TrashIcon = styled(Trash).attrs(({theme})=> ({
    color: theme.COLORS.WHITE
}))`
    margin-right: 10px;
` 

export const EditIcon = styled(PencilSimpleLine).attrs(({theme})=> ({
    color: theme.COLORS.WHITE
}))`
    margin-right: 10px;
` 