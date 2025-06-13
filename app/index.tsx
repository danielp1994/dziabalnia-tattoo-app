import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Witamy w Dziabalnia Tattoo</Text>
      
      <Text style={styles.text}>
        Dziabalnia Tattoo to miejsce, gdzie pasja spotyka się ze sztuką.{"\n"}
        Przeglądaj nasze portfolio i znajdź inspirację dla swojego tatuażu!
      </Text>

      <View style={styles.buttonContainer}>
        <Link href="/about" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>O nas</Text>
          </TouchableOpacity>
        </Link>
        
        <Link href="/portfolio" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Portfolio</Text>
          </TouchableOpacity>
        </Link>
        
        <Link href="/generator" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Generator</Text>
          </TouchableOpacity>
        </Link>
      </View>
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
    marginBottom: 20,
  },
  buttonContainer: {
    gap: 10,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#333",
    padding: 15,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});