import { colors } from "@/styles/colors";
import { ActivityIndicator } from "react-native";

export function Loading() {
  return (
    <ActivityIndicator
      style={{
        flex: 1,
        backgroundColor: colors.red[500],
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  );
}
