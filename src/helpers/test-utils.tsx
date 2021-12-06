import React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { render as rtlRender, RenderOptions } from '@testing-library/react-native';

import theme from 'config/theme'

function render(ui: React.ReactElement<any>, { ...options }: RenderOptions = {}) {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

export * from '@testing-library/react-native';
// override React Testing Library's render with our own
export { render };
