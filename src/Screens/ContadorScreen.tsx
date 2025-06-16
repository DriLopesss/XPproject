
//src/Screens/CantadorScreen.tsx
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Contador">;

const ContadorScreen: React.FC = () => {
  const [dias, setDias] = useState(0);
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    const fetchDias = async () => {
      const stored = await AsyncStorage.getItem("diasSemApostar");
      if (stored) setDias(parseInt(stored));
    };
    fetchDias();
  }, []);

  const handleZerar = async () => {
    await AsyncStorage.setItem("diasSemApostar", "0");
    setDias(0);
    navigation.replace("Alerta");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ReInveste</Text>
      <Text style={styles.label}>Você está há:</Text>
      <Text style={styles.days}>{dias} dias</Text>
      <Text style={styles.label}>sem apostar</Text>
      <Text style={styles.label}>Parabéns! Você conquistou mais um dia longe das apostas. Cada passo conta na sua jornada de autocontrole e crescimento!</Text>

      <TouchableOpacity style={styles.resetButton} onPress={handleZerar}>
        <Text style={styles.buttonText}>Zerar</Text>
      </TouchableOpacity>
      <TouchableOpacity
              style={styles.resetButton}
              onPress={() => navigation.replace("Home")}
            >
              <Text style={styles.buttonText}>Voltar para o Início</Text>
            </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: { 
    fontSize: 28, 
    fontWeight: "bold", 
    color: "#fff", 
    marginBottom: 30, 
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e9e89",
  },
  label: {
    color: "#fff",
    fontSize: 18,
    marginVertical: 5,
    padding: 15,
  },
  days: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#124668",
  },
  resetButton: {
    marginTop: 30,
    backgroundColor: "#124668",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ContadorScreen;