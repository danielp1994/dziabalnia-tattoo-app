import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function BlogScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Blog</Text>
      {/* Przykładowa lista wpisów blogowych jako klikalne elementy */}
      <TouchableOpacity style={styles.post}>
        <Text style={styles.postTitle}>Najnowsze trendy w tatuażu 2025</Text>
        <Text style={styles.postExcerpt}>
          Dowiedz się, jakie style tatuażu będą królować w tym roku...
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.post}>
        <Text style={styles.postTitle}>Jak dbać o świeży tatuaż?</Text>
        <Text style={styles.postExcerpt}>
          Kilka praktycznych porad, które pomogą Ci zadbać o nowy tatuaż...
        </Text>
      </TouchableOpacity>
      {/* Więcej wpisów... */}
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
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  post: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#333",
    marginBottom: 12,
    borderRadius: 4,
  },
  postTitle: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 4,
  },
  postExcerpt: {
    color: "#aaa",
    fontSize: 14,
  },
});
