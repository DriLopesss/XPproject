// src/Screens/TratamentoScreen.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Linking, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

// Definindo o tipo da navegação
type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Tratamento">;

const TratamentoScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const abrirLink = async (url: string) => {
    const suportado = await Linking.canOpenURL(url);
    if (suportado) {
      await Linking.openURL(url);
    } else {
      Alert.alert("Erro", "Não foi possível abrir o link.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ReInveste</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          abrirLink("https://youtu.be/A-_MfC5Mk9Y?si=zfy6KiRHqLb98r2D")
        }
      >
        <Text style={styles.buttonText}>Exercícios de meditação</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          abrirLink("https://unolife.com.br/terapia-para-vicio-em-bets/")
        }
      >
        <Text style={styles.buttonText}>Apoio psicológico</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          abrirLink("https://youtu.be/Q6x0xnI0uCg?si=eE9e2V_wmfSLmG41")
        }
      >
        <Text style={styles.buttonText}>Aulas sobre investimento</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace("Home")}
      >
        <Text style={styles.buttonText}>Voltar para o Início</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 28, fontWeight: "bold", color: "#1e9e89", marginBottom: 30 },
  button: { backgroundColor: "#1e9e89", padding: 15, borderRadius: 10, width: "80%", alignItems: "center", marginVertical: 8 },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});

export default TratamentoScreen;
