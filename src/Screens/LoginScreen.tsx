import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ActivityIndicator } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "Login">;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const API_URL = "http://10.0.2.2:3000";

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert("Atenção", "Preencha todos os campos");
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert("Atenção", "Digite um e-mail válido");
      return;
    }

    setLoading(true);
    try {
      // Requisição GET com filtro no JSON Server
      const response = await axios.get(`${API_URL}/users`, {
        params: { email, senha },
      });

      if (response.data.length > 0) {
        const user = response.data[0];
        await AsyncStorage.setItem("user", JSON.stringify(user));
        Alert.alert("Sucesso", `Bem-vindo(a), ${user.nome}!`);
        navigation.navigate("RiskTest");
      } else {
        Alert.alert("Erro", "E-mail ou senha inválidos.");
      }
    } catch (error: any) {
      Alert.alert("Erro", "Falha na conexão com o servidor.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        autoCapitalize="none"
        onChangeText={setSenha}
      />

      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Entrar</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
        <Text style={styles.linkText}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#fff" },
  title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: "#ccc",
  },
  button: {
    backgroundColor: "#0D3B66",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "#555",
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
  linkText: { color: "#0D3B66", textAlign: "center", marginTop: 10 },
});

export default LoginScreen;
