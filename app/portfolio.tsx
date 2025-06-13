import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function PortfolioScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Portfolio</Text>
      <Text style={styles.text}>
        Przeglądaj moich prac:
      </Text>

      {/* Przykładowe miniatury obrazów w portfolio */}
      <View style={styles.galleryRow}>
        <Image source={require("../assets/portfolio1.jpeg")} style={styles.thumb} />
        <Image source={require("../assets/portfolio2.jpeg")} style={styles.thumb} />
      </View>
      <View style={styles.galleryRow}>
        <Image source={require("../assets/portfolio3.jpeg")} style={styles.thumb} />
        <Image source={require("../assets/portfolio4.jpeg")} style={styles.thumb} />
      </View>
      {/* ... dodaj kolejne wiersze/kolumny według potrzeb */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 16,
  },
  heading: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    color: "#ccc",
    fontSize: 16,
    marginBottom: 20,
  },
  galleryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  thumb: {
    width: "48%",
    height: 150,
    resizeMode: "cover",
    borderWidth: 1,
    borderColor: "#444",
  },
});
