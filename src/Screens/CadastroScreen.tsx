import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
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

// Altere para o IP correto se estiver usando celular físico
const API_URL = "http://10.0.2.2:3000";

const CadastroScreen: React.FC<Props> = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleCadastro = async () => {
    if (!nome || !email || !senha) {
      Alert.alert("Preencha todos os campos");
      return;
    }

    try {
      const novoUsuario = { nome, email, senha };
      const res = await axios.post(`${API_URL}/users`, novoUsuario);

      if (res.status === 201) {
        Alert.alert("Cadastro concluído", "Sua conta foi criada com sucesso!");
        navigation.replace("RiskTest");
      } else {
        Alert.alert("Erro", "Não foi possível cadastrar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      Alert.alert("Erro", "Falha na conexão com o servidor.");
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
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    color: "#0D3B66",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#0D3B66",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default CadastroScreen;
