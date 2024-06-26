import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { loginAction } from "@/functions/auth";
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fonts/fontFamily";
import { fontSize } from "@/styles/fonts/fontSize";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../imgs/logo.png")} style={styles.logo} />
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

        <TouchableOpacity style={styles.butoonInfo}>
          <Text style={styles.textInfo}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
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

  logo: {
    width: 210,
    height: 60,
    objectFit: "contain",
  },

  body: {
    flex: 2,
    backgroundColor: colors.silver,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.red[500],
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
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

  butoonInfo: {
    marginTop: 16,
  },
  textInfo: {
    color: colors.red[500],
    fontSize: fontSize.xs,
    fontFamily: fontFamily.robotoSlab.semiBold,
    textAlign: "center",
  },
});
