import { router } from "expo-router";

export const loginAction = (email: string, password: string) => {
  if (email === "admin@admin.com" && password === "admin") {
    router.push("(tabs)");
  }
};
