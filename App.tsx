import { View, StatusBar,  } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "src/theme";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} translucent/>
      <Home />
    </ThemeProvider>
  );
}


