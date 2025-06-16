import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

type User = {
  nome: string;
};

const HomeScreen: React.FC = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [riskLevel, setRiskLevel] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await AsyncStorage.getItem("user");
        const risk = await AsyncStorage.getItem("riskLevel");

        if (userData) {
          const user: User = JSON.parse(userData);
          setUserName(user?.nome ?? "Usuário");
        }

        if (risk) {
          setRiskLevel(risk);
        }
      } catch (err) {
        console.error("Erro ao carregar dados do AsyncStorage", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getRiskMessage = () => {
    switch (riskLevel) {
      case "alta":
        return (
          <Text style={styles.riskAlert}>
            Atenção! Seu perfil de risco é elevado. Considere buscar apoio.
          </Text>
        );
      case "moderada":
        return (
          <Text style={styles.riskModerate}>
            Seu perfil de risco é moderado. Mantenha o controle!
          </Text>
        );
      case "baixa":
        return (
          <Text style={styles.riskSafe}>
            Ótimo! Seu risco está baixo. Continue assim!
          </Text>
        );
      default:
        return (
          <Text style={styles.riskNeutral}>
            Nenhum dado de risco disponível no momento.
          </Text>
        );
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0D3B66" />
        <Text style={{ marginTop: 10 }}>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo, {userName}!</Text>
      <Text style={styles.subtitle}>
        Seu nível de risco atual: {riskLevel ?? "não informado"}
      </Text>
      {getRiskMessage()}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Tratamentos")}
      >
        <Text style={styles.buttonText}>Acessar Tratamentos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Contador")}
      >
        <Text style={styles.buttonText}>Ver Contador de Dias</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Carteira")}
      >
        <Text style={styles.buttonText}>Abrir Carteira</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Perfil")}
      >
        <Text style={styles.buttonText}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#0D3B66",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#0D3B66",
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  riskAlert: {
    color: "#D00000",
    marginBottom: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  riskModerate: {
    color: "#FFA500",
    marginBottom: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  riskSafe: {
    color: "#2E8B57",
    marginBottom: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  riskNeutral: {
    color: "#888",
    marginBottom: 20,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default HomeScreen;
