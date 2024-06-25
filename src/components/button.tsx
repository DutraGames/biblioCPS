import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fonts/fontFamily";
import { fontSize } from "@/styles/fonts/fontSize";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { TouchableOpacityProps } from "react-native-gesture-handler";

type ButtonProps = {
  text: string;
  onPress?: () => void;
} & TouchableOpacityProps;

export const Button = ({ text, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        marginTop: 32,
        backgroundColor: colors.red[500],
        height: 48,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
      }}
    >
      <Text
        style={{
          color: colors.white,
          fontSize: fontSize.md,
          fontFamily: fontFamily.roboto.semiBold,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
