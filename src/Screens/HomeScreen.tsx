
//REINVESTE/src/Screens/HomeScreen.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
type Props = { navigation: HomeScreenNavigationProp };

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>ReInveste</Text>
      {[
        { title: "Tratamento", screen: "Tratamento" },
        { title: "Contador", screen: "Contador" },
        { title: "Carteira", screen: "Carteira" },
        { title: "Perfil", screen: "Perfil" },
      ].map((item) => (
        <TouchableOpacity
          key={item.screen}
          style={styles.button}
          onPress={() => navigation.navigate(item.screen as keyof RootStackParamList)}
        >
          <Text style={styles.buttonText}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 28, fontWeight: "bold", color: "#1e9e89", marginBottom: 30 },
  button: { backgroundColor: "#1e9e89", padding: 15, borderRadius: 10, width: "80%", alignItems: "center", marginVertical: 8 },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});

export default HomeScreen;
