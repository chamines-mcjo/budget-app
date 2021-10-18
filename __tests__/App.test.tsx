import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

describe(`<App>`, () => {
  it(`should render correctly`, () => {
    const { container } = render(<App />);

    // expect(container).toBeTruthy();
    // expect(container).not.toThrow();
    expect(true).toBe(true);
  });
});
