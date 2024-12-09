import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../app';

describe(`<App>`, () => {
  it(`should render correctly`, () => {
    const { container } = render(<App />);

    expect(container).toBeTruthy();
    expect(container).not.toBeNull();
  });
});
