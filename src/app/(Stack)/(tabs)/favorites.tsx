import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fonts/fontFamily";
import { fontSize } from "@/styles/fonts/fontSize";
import { View, Text, StyleSheet } from "react-native";
export default function Favorites() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favorites</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: colors.red[500],
    fontSize: fontSize["4xl"],
    fontFamily: fontFamily.roboto.regular,
  },
});
