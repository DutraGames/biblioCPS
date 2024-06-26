import { colors } from "@/styles/colors";
import { View } from "react-native";

export default function Separator() {
  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: colors.gray[200],
          marginTop: 32,
          marginBottom: 32,
        }}
      />
    </View>
  );
}
