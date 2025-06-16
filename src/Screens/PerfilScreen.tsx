import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation"; // Ajuste conforme seu projeto

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Perfil">;

const PerfilScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ReInveste</Text>
      <Image
        source={{ uri: "https://i.pravatar.cc/150" }}
        style={styles.avatar}
      />
      <Text style={styles.nome}>Nome Usuário</Text>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Alterar Dados</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Extrato</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Central de Atendimento</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.botaoTexto}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20, backgroundColor: "#fff" },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  nome: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  botao: {
    backgroundColor: "#1e9e89",
    padding: 12,
    borderRadius: 5,
    width: "80%",
    marginVertical: 8,
    alignItems: "center",
  },
  botaoTexto: { color: "#fff", fontWeight: "bold" },
  title: { fontSize: 28, fontWeight: "bold", color: "#1e9e89", marginBottom: 30 },
});

export default PerfilScreen;
