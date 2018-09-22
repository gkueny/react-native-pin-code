import React from 'react';
import 'react-native';

import CodePin from '../pin-code';

import TestRenderer from 'react-test-renderer';

let mock_focused = [false, false, false, false, false];

jest.mock('TextInput', () => {
  const RealComponent = require.requireActual('TextInput');
  const React = require('React');
  class TextInput extends React.Component {
    focus() {
      mock_focused[this.props.id] = true;
    }
    render() {
      return React.createElement('TextInput', this.props, this.props.children);
    }
  }
  TextInput.propTypes = RealComponent.propTypes;
  return TextInput;
});

describe('CodePin', () => {
  it('renders correctly', () => {
    TestRenderer.create(<CodePin />);
  });
});

describe('initialization', () => {
  it('With no props', () => {
    const instance = TestRenderer.create(<CodePin />).root.instance;

    const state = instance.state;

    expect(state.currentCode).toBe('');
    expect(state.currentIdEdit).toBe(0);
    expect(state.codeLength).toBe(0);
  });
});
