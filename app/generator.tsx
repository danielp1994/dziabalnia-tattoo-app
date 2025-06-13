// app/generator.tsx
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

const API_URL = 'https://dziabalnia-tattoo-app.vercel.app/api/generate';

export default function GeneratorScreen() {
  const [prompt, setPrompt] = useState('');
  const [isGen, setIsGen] = useState(false);
  const [img, setImg] = useState<string | null>(null);

  const run = async () => {
    if (!prompt.trim()) return;
    setIsGen(true);
    setImg(null);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`);

      const data = await res.json();
      console.log('📥 Otrzymano response:', data);

      if (typeof data.imageUrl !== 'string' || !data.imageUrl.startsWith('http')) {
        console.error("⚠️ imageUrl niepoprawny:", data.imageUrl);
        throw new Error("Odpowiedź nie zawiera poprawnego URL obrazka.");
      }

      setImg(data.imageUrl);
    } catch (e: any) {
      alert('❌ Błąd: ' + e.message);
      console.error('🔴 Błąd generowania:', e);
    } finally {
      setIsGen(false);
    }
  };

  return (
    <View style={styles.c}>
      <Text style={styles.h}>Generator AI</Text>
      <TextInput
        style={styles.inp}
        placeholder="Opisz tatuaż…"
        placeholderTextColor="#777"
        value={prompt}
        onChangeText={setPrompt}
      />
      <Button title="Generuj" onPress={run} disabled={!prompt || isGen} />
      {isGen && <Text style={styles.info}>Generowanie…</Text>}
      {img && (
        <Image
          source={{ uri: img }}
          style={styles.img}
          resizeMode="contain"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  c: { flex: 1, backgroundColor: "#000", padding: 16 },
  h: { color: "#fff", fontSize: 22, fontWeight: "bold", marginBottom: 12 },
  inp: {
    backgroundColor: "#222",
    color: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    marginBottom: 12,
  },
  info: { color: "#ccc", fontStyle: "italic", marginVertical: 8 },
  img: {
    width: '100%',
    aspectRatio: 1, // lub najlepiej 512 / 768 = 0.666 dla wysokich obrazów
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#444",
    alignSelf: "center"
  },
  
});
