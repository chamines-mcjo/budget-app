import React from 'react';
import { render, screen } from '@testing-library/react-native';
import App from '@/app';

describe(`<App>`, () => {
  it(`should render correctly`, () => {
    render(<App />);

    expect(screen.toJSON()).toBeTruthy();
    expect(screen.toJSON()).not.toBeNull();
  });
});
