import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Alerta">;

const Alerta: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recaída detectada</Text>
      <Text style={styles.message}>Tudo bem. Recomeçar faz parte do processo.</Text>
      <Text style={styles.message}>Respire fundo e tente novamente!</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.buttonText}>Voltar para o Início</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#D00000",
    marginBottom: 20,
    textAlign: "center",
  },
  message: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
  button: {
    marginTop: 30,
    backgroundColor: "#0D3B66",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Alerta;
