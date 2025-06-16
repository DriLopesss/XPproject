import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Contador">;

const Contador: React.FC = () => {
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
    navigation.navigate("Alerta");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Você está há</Text>
      <Text style={styles.days}>{dias} dias</Text>
      <Text style={styles.label}>sem apostar</Text>

      <TouchableOpacity style={styles.resetButton} onPress={handleZerar}>
        <Text style={styles.buttonText}>Zerar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 18,
    marginVertical: 5,
  },
  days: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#0D3B66",
  },
  resetButton: {
    marginTop: 30,
    backgroundColor: "#D00000",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Contador;
