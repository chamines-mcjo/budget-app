import React from 'react';
import { render } from 'helpers/test-utils';

import OnboardingScreen from '../index';

describe(`<OnboardingScreen />`, () => {
  it(`Should render correctly`, () => {
    const {getByText} = render(<OnboardingScreen />);

    expect(getByText(/en el onboardingscreen/i)).toBeDefined();
  });
});
