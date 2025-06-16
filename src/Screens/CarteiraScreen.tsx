import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CarteiraScreen: React.FC = () => {
  const saldo = 100.0;
  const acoes = ["PTR4", "PTR4"];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ReInveste</Text>
      <Text style={styles.titulo}>Saldo</Text>
      <Text style={styles.saldo}>R${saldo.toFixed(2)}</Text>

      <View style={styles.card}>
        <Text style={styles.subtitulo}>Ações compradas</Text>
        {acoes.map((acao, index) => (
          <Text key={index} style={styles.acao}>{acao}</Text>
        ))}
      </View>
      <View style={styles.card}>
        <Text style={styles.subtitulo}>Ações recomendadas</Text>
        {acoes.map((acao, index) => (
          <Text key={index} style={styles.acao}>{acao}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { justifyContent: "center" ,flex: 1, padding: 20, backgroundColor: "#fff" },
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
  title: {justifyContent: "center", fontSize: 28, fontWeight: "bold", color: "#1e9e89", marginBottom: 30 },
});

export default CarteiraScreen;