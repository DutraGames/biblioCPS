import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Slot } from "expo-router";
import { StatusBar } from "react-native";

import {
  useFonts as useFontsRoboto,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import {
  useFonts as useFontsRobotoSlab,
  RobotoSlab_400Regular,
  RobotoSlab_500Medium,
  RobotoSlab_700Bold,
} from "@expo-google-fonts/roboto-slab";
import { Loading } from "@/components/loading";

export default function Layout() {
  const [fontsLoadedR] = useFontsRoboto({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  const [fontsLoadedRS] = useFontsRobotoSlab({
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
    RobotoSlab_700Bold,
  });

  if (!fontsLoadedR && !fontsLoadedRS) return <Loading />;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <Slot />
    </GestureHandlerRootView>
  );
}
