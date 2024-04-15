import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";


export const Container = styled(TextInput)`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_1};
    border: 1px solid ${theme.COLORS.GRAY_5};
  `}
  width: 100%;
  min-height: 156px;
  max-height: 156px;
  border-radius: 8px;
  padding: 8px 16px;
  margin-bottom: 24px;
`;