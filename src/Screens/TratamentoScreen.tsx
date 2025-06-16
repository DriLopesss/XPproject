import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Tratamentos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ReInveste</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Exercícios de meditação</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Apoio psicológico</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Aulas sobre investimento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#fff" },
  title: { fontSize: 24, textAlign: "center", marginBottom: 20, color: "#0D3B66" },
  button: {
    backgroundColor: "#0D3B66",
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
  },
  buttonText: { color: "#fff", fontWeight: "bold", textAlign: "center" },
});
