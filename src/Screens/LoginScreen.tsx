import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "Login">;
type Props = { navigation: LoginScreenNavigationProp };

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    const usuariosSalvos = await AsyncStorage.getItem("usuarios");
    const usuarios = usuariosSalvos ? JSON.parse(usuariosSalvos) : [];

    const usuarioEncontrado = usuarios.find((u: any) => u.email === email && u.senha === senha);

    if (usuarioEncontrado) {
      navigation.replace("Home");
    } else {
      Alert.alert("Erro", "Credenciais inválidas");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ReInveste</Text>
      <Text style={styles.subtitle}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Senha" onChangeText={setSenha} secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
        <Text style={styles.linkText}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#124668", 
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff", 
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff", 
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#1e9e89", 
    padding: 15,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "#fff", 
    fontWeight: "bold",
    fontSize: 16,
  },
  input: { 
    backgroundColor: "#fff", 
    width: "80%", 
    borderColor: "#ccc", 
    borderWidth: 1, 
    borderRadius: 8, 
    padding: 10, 
    marginBottom: 15 },
  linkText: {
    color: "#fff",
  }
});

export default LoginScreen;