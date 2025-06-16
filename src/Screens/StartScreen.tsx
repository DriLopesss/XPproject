import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";

type StartScreenNavigationProp = StackNavigationProp<RootStackParamList, "Start">;

type Props = {
  navigation: StartScreenNavigationProp;
};

const StartScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao ReInveste</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Cadastro")}>
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 10, textAlign: "center", color: "#0D3B66" },
  subtitle: { fontSize: 16, color: "#444", textAlign: "center", marginBottom: 30, paddingHorizontal: 20 },
  button: { backgroundColor: "#0D3B66", padding: 15, borderRadius: 10, marginTop: 12, width: "80%", alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default StartScreen;
