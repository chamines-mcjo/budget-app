import React from 'react';
import AppLoading from 'expo-app-loading';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

import HomeScreen from 'screens/Home';
import OnboardingScreen from 'screens/Onboarding';
import AppProvider from 'providers/AppProvider';

import { HOME, ONBOARDING } from 'config/routes';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  return (
    <AppProvider>
      <Stack.Navigator>
        <Stack.Screen name={HOME.name} options={{ title: HOME.title }} component={HomeScreen} />
        <Stack.Screen name={ONBOARDING.name} options={{ title: ONBOARDING.title }} component={OnboardingScreen} />
      </Stack.Navigator>
    </AppProvider>
  );
}
