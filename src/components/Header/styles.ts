import styled from "styled-components/native";
import theme from "../../theme";


export const Container = styled.View`
    background-color: ${({theme}) => theme.COLORS.WHITE};
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 36px;
`