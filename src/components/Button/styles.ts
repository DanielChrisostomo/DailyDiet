import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Plus, PencilSimpleLine, Trash } from "phosphor-react-native"


export type ButtonTypeStyleProps = "DARK" | "LIGHT";
export type ButtonTypeIconProps = "PLUS" | "REMOVE" | "EDIT";
export type ButtonWidthProps = number | '100%';

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
    margin-bottom: 12px;
    border: ${({ theme, typeColor }) =>
    typeColor === "LIGHT" ? `1px solid ${theme.COLORS.GRAY_1}` : null };
    `

export const Text = styled.Text<Props>`
   ${({theme, typeColor}) => css`
   color: ${typeColor === "LIGHT" ? `${theme.COLORS.GRAY_1}` : `${theme.COLORS.WHITE}`};
   font-size: ${theme.FONT_SIZE.SM}px;
   font-family: ${theme.FONT_FAMILY.BOLD}
   `}
`

export const AddIcon = styled(Plus).attrs<Props>(({theme, typeColor}) => ({
    color: `${typeColor === "LIGHT" ? `${theme.COLORS.GRAY_1}` : `${theme.COLORS.WHITE}`}`,
}))`
    margin-right: 10px;
`;

export const TrashIcon = styled(Trash).attrs<Props>(({theme, typeColor})=> ({
    color: `${typeColor === "LIGHT" ? `${theme.COLORS.GRAY_1}` : `${theme.COLORS.WHITE}`}`
}))`
    margin-right: 10px;
` 

export const EditIcon = styled(PencilSimpleLine).attrs<Props>(({theme, typeColor})=> ({
    color: `${typeColor === "LIGHT" ? `${theme.COLORS.GRAY_1}` : `${theme.COLORS.WHITE}`}`
}))`
    margin-right: 10px;
` 