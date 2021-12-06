import React from 'react';
import { render } from 'helpers/test-utils';

import HomeScreen from '../index';

describe(`<HomeScreen />`, () => {
  it(`Should render correctly`, () => {
    const {getByText} = render(<HomeScreen />);

    expect(getByText(/en el homescreen/i)).toBeDefined();
  });
});
