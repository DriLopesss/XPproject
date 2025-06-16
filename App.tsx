import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "./src/Screens/StartScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import CadastroScreen from "./src/Screens/CadastroScreen";
import RiskTestScreen from "./src/Screens/RiscosScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import { RootStackParamList } from "./src/types/navigation";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="RiskTest" component={RiskTestScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
