import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";


type CadastroScreenNavigationProp = StackNavigationProp<RootStackParamList, "Cadastro">;
type Props = { navigation: CadastroScreenNavigationProp };

const CadastroScreen: React.FC<Props> = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleCadastro = async () => {
    if (!nome || !email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    const novoUsuario = { nome, email, senha };
    try {
      const usuariosSalvos = await AsyncStorage.getItem("usuarios");
      const usuarios = usuariosSalvos ? JSON.parse(usuariosSalvos) : [];
      usuarios.push(novoUsuario);
      await AsyncStorage.setItem("usuarios", JSON.stringify(usuarios));
      Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
      navigation.replace("RiskTest");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível cadastrar o usuário");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>
      <TextInput style={styles.input} placeholder="Nome" onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Senha" onChangeText={setSenha} secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.linkText}>Ja tenho uma conta</Text>
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

export default CadastroScreen;
