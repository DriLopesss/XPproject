import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Carteira() {
  const saldo = 100.0;
  const acoes = ["PTR4", "PTR4"];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>saldo</Text>
      <Text style={styles.saldo}>R${saldo.toFixed(2)}</Text>

      <View style={styles.card}>
        <Text style={styles.subtitulo}>ações compradas</Text>
        {acoes.map((acao, index) => (
          <Text key={index} style={styles.acao}>{acao}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  titulo: { fontSize: 18, fontWeight: "bold" },
  saldo: { fontSize: 32, marginVertical: 10 },
  card: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  subtitulo: { fontWeight: "bold", marginBottom: 10 },
  acao: { fontSize: 16 },
});
