import {  StatusBar,  } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "src/theme";
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from "@expo-google-fonts/nunito-sans";
import Loading from "@components/Loading";
import Routes from "src/routes";
import NewMeal from "@screens/NewMeal";

// import { Trash, ArrowUpRight, ArrowLeft, Plus, PencilSimpleLine  } from "phosphor-react-native"


export default function App() {

  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} translucent/>
      {!fontsLoaded ? <Loading /> : <Routes /> }
    </ThemeProvider>
  );
}


