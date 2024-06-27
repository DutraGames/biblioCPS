import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fonts/fontFamily";
import { fontSize } from "@/styles/fonts/fontSize";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { Input } from "@/components/input";
import { bannerData } from "@/data/bannerdata";
import BannerCarrossel from "@/components/bannerCarrossel";
import Carousel from "react-native-reanimated-carousel";
import Separator from "@/components/separator";
import CardBook from "@/components/cardBook";
import { cardBookData } from "@/data/cardBookData";

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

      <View style={styles.category}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.cartegoryText}>Tech</Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: colors.red[500],
                fontFamily: fontFamily.roboto.regular,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Saiba Mais
            </Text>
            <Text>
              <FontAwesome
                name="angle-right"
                size={24}
                color={colors.red[500]}
                style={{ position: "absolute", right: 16, top: 12 }}
              />
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={cardBookData}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <CardBook item={item} />}
        />
      </View>
      <View style={styles.category}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.cartegoryText}>Comex</Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: colors.red[500],
                fontFamily: fontFamily.roboto.regular,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Saiba Mais
            </Text>
            <Text>
              <FontAwesome
                name="angle-right"
                size={24}
                color={colors.red[500]}
                style={{ position: "absolute", right: 16, top: 12 }}
              />
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={cardBookData}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <CardBook item={item} />}
        />
      </View>
      <View style={styles.category}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.cartegoryText}>Processos Químicos</Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: colors.red[500],
                fontFamily: fontFamily.roboto.regular,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Saiba Mais
            </Text>
            <Text>
              <FontAwesome
                name="angle-right"
                size={24}
                color={colors.red[500]}
                style={{ position: "absolute", right: 16, top: 12 }}
              />
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={cardBookData}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <CardBook item={item} />}
        />
      </View>

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 48,
          marginBottom: 92,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: colors.red[500],
              fontFamily: fontFamily.roboto.regular,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Saiba Mais
          </Text>
          <Text>
            <FontAwesome
              name="angle-right"
              size={24}
              color={colors.red[500]}
              style={{ position: "absolute", right: 16, top: 12 }}
            />
          </Text>
        </TouchableOpacity>
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
    flex: 1,
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

  category: {
    paddingHorizontal: 20,
    marginTop: 40,
  },

  cartegoryText: {
    color: colors.blue[600],
    fontSize: fontSize["lg"],
    fontFamily: fontFamily.robotoSlab.bold,
    marginBottom: 12,
  },
});
