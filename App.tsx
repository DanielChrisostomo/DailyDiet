import { View, StatusBar,  } from "react-native";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} translucent/>
      <Home />
    </>
  );
}


