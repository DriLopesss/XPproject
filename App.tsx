// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./src/types/navigation";

import Start from "./src/Screens/StartScreen";
import Login from "./src/Screens/LoginScreen";
import Cadastro from "./src/Screens/CadastroScreen";
import RiskTest from "./src/Screens/RiscosScreen";
import Tratamento from "./src/Screens/TratamentoScreen";
import Contador from "./src/Screens/ContadorScreen";
import Alerta from "./src/Screens/AlertScreen";
import BottomTabs from "./src/navigation/BottomTabs";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="RiskTest" component={RiskTest} />
        <Stack.Screen name="Tratamento" component={Tratamento} />
        <Stack.Screen name="Contador" component={Contador} />
        <Stack.Screen name="Alerta" component={Alerta} />
        <Stack.Screen name="Home" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
