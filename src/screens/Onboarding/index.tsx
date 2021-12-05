import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Text>Estás en el OnboardingScreen.tsx</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default OnboardingScreen;
