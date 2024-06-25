import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { loginAction } from "@/functions/auth";
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fonts/fontFamily";
import { fontSize } from "@/styles/fonts/fontSize";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>BiblioCPS</Text>
        <Text style={styles.subTitle}>Consulte o acervo</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.titleBody}>Bem-vindo de volta</Text>
        <Text>
          Faça login para acessar seu acervo de livros favoritos, reservar
          títulos e gerenciar seu histórico de empréstimos.
        </Text>
        <Input>
          <Input.Label text="E-mail Institucional" />
          <Input.Field />
        </Input>
        <Input>
          <Input.Label text="Senha" />
          <Input.Field />
        </Input>

        <Button
          text="Login"
          onPress={() => loginAction("admin@admin.com", "admin")}
        />

        <Text style={styles.textInfo}>Esqueceu sua senha?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.red[700],
  },

  header: {
    flex: 1,
    backgroundColor: colors.red[700],
    justifyContent: "center",
    alignItems: "center",
  },

  body: {
    flex: 2,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.red[500],
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 32,
  },

  title: {
    color: colors.white,
    fontSize: fontSize["4xl"],
    fontFamily: fontFamily.roboto.bold,
  },
  subTitle: {
    color: colors.white,
    fontSize: fontSize.lg,
    fontFamily: fontFamily.roboto.bold,
  },

  titleBody: {
    color: colors.blue[800],
    fontSize: fontSize["2xl"],
    fontFamily: fontFamily.robotoSlab.semiBold,
  },

  textBody: {
    color: colors.gray[500],
    fontSize: fontSize.md,
    fontFamily: fontFamily.robotoSlab.regular,
  },
  textInfo: {
    color: colors.red[500],
    fontSize: fontSize.xs,
    marginTop: 16,
    fontFamily: fontFamily.robotoSlab.semiBold,
  },
});
