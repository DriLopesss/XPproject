import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";

type RiskTestScreenNavigationProp = StackNavigationProp<RootStackParamList, "RiskTest">;

type Props = {
  navigation: RiskTestScreenNavigationProp;
};

const questions = [
  "Com que frequência você sente vontade de apostar?",
  "Você sente ansiedade ao não apostar por um dia?",
  "Você já gastou mais do que podia em apostas?",
];

const options = [
  { label: "Nunca", score: 0 },
  { label: "Às vezes", score: 1 },
  { label: "Sempre", score: 2 },
];

const RiskTestScreen: React.FC<Props> = ({ navigation }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  const handleAnswer = async (score: number) => {
    const nextScore = totalScore + score;
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setTotalScore(nextScore);
    } else {
      const riskLevel = nextScore <= 1 ? "Baixo" : nextScore <= 3 ? "Moderado" : "Alto";
      await AsyncStorage.setItem("riskLevel", riskLevel);
      Alert.alert("Resultado", `Seu nível de risco é: ${riskLevel}`);
      navigation.replace("Home");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{questions[currentQuestion]}</Text>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => handleAnswer(option.score)}
        >
          <Text style={styles.buttonText}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#fff" },
  question: { fontSize: 20, marginBottom: 30, textAlign: "center" },
  button: { backgroundColor: "#0D3B66", padding: 15, borderRadius: 5, marginVertical: 10, alignItems: "center" },
  buttonText: { color: "#fff", fontWeight: "bold" },
});

export default RiskTestScreen;