import 'react-native';
import React from 'react';

import CodePin from '../pin-code';

import TestRenderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = TestRenderer.create(<CodePin />).toJSON();
  expect(tree).toMatchSnapshot();
});
