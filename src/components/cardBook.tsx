import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fonts/fontFamily";
import { fontSize } from "@/styles/fonts/fontSize";
import { View, Text, StyleSheet, Image } from "react-native";

type CardBookProps = {
  item: {
    id: number;
    image: string;
    title: string;
    author: string;
  };
};

export default function CardBook({ item }: CardBookProps) {
  return (
    <View style={styles.container} key={item.id}>
      <Image source={{ uri: item.image }} style={{ width: 100, height: 150 }} />
      <Text numberOfLines={1} style={styles.title}>
        {item.title}
      </Text>
      <Text numberOfLines={1} style={styles.author}>
        {item.author}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: 120,
    paddingRight: 16,
  },
  title: {
    fontSize: fontSize["md"],
    fontFamily: fontFamily.robotoSlab.semiBold,
    color: colors.red[500],
  },
  author: {
    fontSize: fontSize["xs"],
    fontFamily: fontFamily.roboto.regular,
    color: colors.gray[500],
  },
});
