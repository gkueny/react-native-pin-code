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
    TestRenderer.create(<CodePin success={() => {}} />);
  });
});

describe('CodePin: clean function', () => {
  it('clean code', () => {
    const instance = TestRenderer.create(<CodePin success={() => {}} />).root
      .instance;

    instance.setState({
      code: ['1', '2', '3', '4']
    });

    instance.clean();

    const {code} = instance.state;

    expect(code[0]).toBe('');
    expect(code[1]).toBe('');
    expect(code[2]).toBe('');
    expect(code[3]).toBe('');
  });
});
