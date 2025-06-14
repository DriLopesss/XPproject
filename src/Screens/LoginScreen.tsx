import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import axios from "axios";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const API_URL = "http://10.0.2.2:3000";

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.get(`${API_URL}/users`, {
        params: {
          email: email,
          senha: senha,
        },
      });

      if (response.data.length > 0) {
        Alert.alert(
          "Login bem-sucedido",
          `Bem-vindo(a), ${response.data[0].nome}!`
        );
      } else {
        Alert.alert("Erro", "E-mail ou senha inválidos.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Falha na conexão com o servidor.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

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

      <Button title="Entrar" onPress={handleLogin} />
      <Button
        title="Criar Conta"
        onPress={() => navigation.navigate("Cadastro")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 24, marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
});

export default LoginScreen;
