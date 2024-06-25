import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fonts/fontFamily";
import { fontSize } from "@/styles/fonts/fontSize";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { Input } from "@/components/input";
import { FlatList } from "react-native-gesture-handler";
import { bannerData } from "@/data/bannerdata";
import BannerCarrossel from "@/components/bannerCarrossel";
import Carousel from "react-native-reanimated-carousel";

export default function Home() {
  const _WIDTHSCREEN = Dimensions.get("screen").width;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.headerTitle}>Inicio</Text>
          <FontAwesome name="filter" size={24} color={colors.red[500]} />
        </View>

        <Input>
          <Input.Field
            placeholder="Busca"
            placeholderTextColor={colors.gray[100]}
          />
          <FontAwesome
            name="search"
            size={24}
            color={colors.red[500]}
            style={{ position: "absolute", right: 16, top: 12 }}
          />
        </Input>
      </View>

      <View style={styles.destaques}>
        <Text style={styles.destaquesTitle}>Destaques</Text>
        <Carousel
          loop
          width={_WIDTHSCREEN}
          height={160}
          autoPlay={true}
          data={bannerData}
          scrollAnimationDuration={2000}
          renderItem={({ item }) => <BannerCarrossel item={item} />}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 40,
  },

  header: {
    paddingHorizontal: 20,
  },

  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  headerTitle: {
    color: colors.blue[600],
    fontSize: fontSize["md"],
    fontFamily: fontFamily.robotoSlab.semiBold,
  },

  destaques: {
    marginTop: 24,
  },

  destaquesTitle: {
    color: colors.blue[600],
    fontSize: fontSize["lg"],
    fontFamily: fontFamily.robotoSlab.bold,
    paddingBottom: 12,
    paddingHorizontal: 20,
  },
});
