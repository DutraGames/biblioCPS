import { ReactNode } from "react";
import { View, TextInput, TextInputProps, Text } from "react-native";
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fonts/fontFamily";
import { fontSize } from "@/styles/fonts/fontSize";

type InputProps = {
  children: ReactNode;
};

function Input({ children }: InputProps) {
  return <View style={{ width: "100%", marginTop: 24 }}>{children}</View>;
}

function InputLabel({ text }: { text: string }) {
  return (
    <Text
      style={{
        color: colors.blue[800],
        fontSize: fontSize.xs,
        fontFamily: fontFamily.robotoSlab.semiBold,
      }}
    >
      {text}
    </Text>
  );
}

function InputField({ ...rest }: TextInputProps) {
  return (
    <TextInput
      placeholderTextColor={colors.blue[600]}
      cursorColor={colors.blue[600]}
      {...rest}
      style={{
        borderWidth: 1,
        borderRadius: 4,
        height: 48,
        borderColor: colors.gray[500],
        color: colors.blue[600],
        fontFamily: fontFamily.robotoSlab.regular,
        paddingLeft: 8,
      }}
    />
  );
}

Input.Field = InputField;
Input.Label = InputLabel;

export { Input };
