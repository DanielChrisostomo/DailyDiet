import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "src/theme";


export const Container = styled(SafeAreaView)`
    background-color: ${({theme}) => theme.COLORS.WHITE};
    flex: 1;
`
