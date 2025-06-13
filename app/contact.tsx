import { Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Skontaktuj się z nami</Text>
      <Text style={styles.text}>
        Adres: ul. Tatuażowa 1, 00-001 Warszawa{"\n"}
        Telefon: 123 456 789{"\n"}
        E-mail: kontakt@dziabalnia-tattoo.pl
      </Text>
      {/* Przykładowy przycisk otwierający aplikację telefonu po kliknięciu numeru */}
      <TouchableOpacity onPress={() => Linking.openURL("tel:123456789")} style={styles.button}>
        <Text style={styles.buttonText}>Zadzwoń teraz</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    color: "#ccc",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 22,
  },
  button: {
    backgroundColor: "#333",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
