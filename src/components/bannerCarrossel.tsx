import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fonts/fontFamily";
import { fontSize } from "@/styles/fonts/fontSize";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

type BannerCarrosselProps = {
  item: {
    id: number;
    image: string;
  };
};

export default function BannerCarrossel({ item }: BannerCarrosselProps) {
  return (
    <View key={item.id} style={styles.container}>
      <Image
        source={require("../imgs/bg-banner.jpg")}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: -1,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          objectFit: "cover",
        }}
      />
      <View style={{ flex: 1, gap: 8, padding: 12 }}>
        <Text style={styles.title}>Novidades na Biblioteca</Text>
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <Text style={styles.textButton}>Confira</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, padding: 12 }}>
        <Image
          source={{ uri: item.image }}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.silver,

    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    color: colors.white,
    fontSize: fontSize["md"],
    fontFamily: fontFamily.robotoSlab.semiBold,
  },
  button: {
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 8,
    height: 32,
  },

  textButton: {
    color: colors.red[500],
    fontSize: fontSize["md"],
    fontFamily: fontFamily.roboto.semiBold,
  },
});
