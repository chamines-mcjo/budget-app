import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import Constants from "expo-constants";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

const isStorybookEnabled =
  Constants?.expoConfig?.extra?.storybookEnabled === "true";
// Prevent the splash screen from auto-hiding before asset loading is complete.
if (!isStorybookEnabled) {
  SplashScreen.preventAutoHideAsync();
}

function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

let AppRoot = RootLayout;

if (isStorybookEnabled) {
  AppRoot = require("../.storybook/index").default;
}

export default AppRoot;
