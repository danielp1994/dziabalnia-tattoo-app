import { View, Text, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>O nas</Text>
      <Text style={styles.text}>
        Informacje o Dziabalnia Tattoo...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 16,
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  text: {
    color: "#ccc",
    fontSize: 16,
    lineHeight: 22,
    textAlign: "center",
  },
});
