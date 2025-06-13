import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="about" />
        <Stack.Screen name="portfolio" />
        <Stack.Screen name="generator" />
        <Stack.Screen name="blog" />
        <Stack.Screen name="aftercare" />
        <Stack.Screen name="contact" />
      </Stack>
    </>
  );
}
