import { colors } from "@/styles/colors";
import { ActivityIndicator, Image, View } from "react-native";
export function Loading() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.red[700],
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../imgs/logo.png")}
          style={{ width: 210, height: 60, objectFit: "contain" }}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={colors.white} />
      </View>
    </View>
  );
}
