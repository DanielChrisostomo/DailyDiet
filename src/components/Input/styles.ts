import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

type Props = {
  height?: number;
}

export const Container = styled(TextInput)<Props>`
  ${({ theme, height }) => css`
    background-color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_1};
    border: 1px solid ${theme.COLORS.GRAY_5};
    min-height: ${height ? `${height}px` : '56PX'};
    min-height: ${height ? `${height}px` : '56PX'} ;
  `}
  width: 100%;
  border-radius: 8px;
  padding: 8px 16px;
  margin-bottom: 24px;
`;