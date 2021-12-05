import React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { NavigationContainer } from '@react-navigation/native';

import theme from 'config/theme';

import type { ReactNode } from 'react';

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>{children}</NavigationContainer>
    </ThemeProvider>
  );
}

export default AppProvider;
