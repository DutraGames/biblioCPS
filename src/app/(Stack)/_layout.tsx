import { colors } from "@/styles/colors";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";

export default function TabLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
