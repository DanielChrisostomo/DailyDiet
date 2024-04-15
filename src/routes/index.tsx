import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import AppRoutes from "./app.routes";
import { View } from "react-native";

const Routes = () => {
  const { COLORS } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
};

export default Routes;