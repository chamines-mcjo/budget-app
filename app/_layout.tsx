import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import {
  Inter_400Regular,
  Inter_700Bold,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
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
SplashScreen.preventAutoHideAsync();

function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_600SemiBold,
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
  const StorybookUI = require("../.storybook/index").default;

  AppRoot = function StorybookRoot() {
    const [loaded] = useFonts({
      Inter_400Regular,
      Inter_700Bold,
      Inter_600SemiBold,
    });

    useEffect(() => {
      if (loaded) {
        SplashScreen.hideAsync();
      }
    }, [loaded]);

    return <StorybookUI />;
  };
}

export default AppRoot;
