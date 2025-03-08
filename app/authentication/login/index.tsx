import { LoginForm } from "@/components/LoginForm";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, TouchableOpacity, Platform } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function LandingScreen() {
  return (
    <ThemedView style={styles.container}>
      {Platform.OS !== "web" && (
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#f0f0f0" />
        </TouchableOpacity>
      )}
      <LoginForm onSubmit={(email, password) => {}} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    padding: 10,
  },
});