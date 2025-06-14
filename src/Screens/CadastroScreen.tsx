import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import axios from "axios";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";

type CadastroScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Cadastro"
>;

type Props = {
  navigation: CadastroScreenNavigationProp;
};

const API_URL = "http://10.0.2.2:3000";

const CadastroScreen: React.FC<Props> = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleCadastro = async () => {
    try {
      const novoUsuario = { nome, email, senha };
      await axios.post(`${API_URL}/users`, novoUsuario);
      Alert.alert("Cadastro concluído", "Sua conta foi criada com sucesso!");
      navigation.navigate("Login");
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Falha ao criar a conta.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <Button title="Criar Conta" onPress={handleCadastro} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 24, marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
});

export default CadastroScreen;
