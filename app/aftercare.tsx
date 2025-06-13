import { ScrollView, StyleSheet, Text } from "react-native";

export default function AftercareScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Pielęgnacja tatuażu</Text>
      <Text style={styles.text}>
        1. Po sesji tatuowania utrzymuj folię ochronną przez wskazany przez tatuatora czas.
      </Text>
      <Text style={styles.text}>
        2. Delikatnie umyj tatuaż letnią wodą z łagodnym mydłem, nie trzeć!
      </Text>
      <Text style={styles.text}>
        3. Stosuj cienką warstwę maści przyspieszającej gojenie zgodnie z zaleceniami.
      </Text>
      <Text style={styles.text}>
        4. Unikaj basenu, sauny oraz ekspozycji na słońce przez co najmniej 2 tygodnie.
      </Text>
      <Text style={styles.text}>
        5. Nie drap ani nie zdrapuj strupków – pozwól im odpaść naturalnie.
      </Text>
      {/* ... dodaj dalsze punkty pielęgnacji, to tylko przykład listy */}
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
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  text: {
    color: "#ccc",
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 8,
  },
});
