import React from 'react';
import 'react-native';
import TestRenderer from 'react-test-renderer';

import CodePin from '../src/pin-code';

const mockFocused = [false, false, false, false, false];

jest.mock('TextInput', () => {
  const RealComponent = require.requireActual('TextInput');

  const React = require('react'); //eslint-disable-line
  class TextInput extends React.Component {
    focus() {
      const { id } = this.props;
      mockFocused[id] = true;
    }

    render() {
      const { children } = this.props;
      return React.createElement('TextInput', this.props, children);
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

describe('state initialization', () => {
  it('With no props', () => {
    const { state } = TestRenderer.create(<CodePin />).root.instance;

    expect(state.currentCode).toBe('');
    expect(state.currentIdEdit).toBe(0);
    expect(state.codeLength).toBe(0);
  });

  it('With code prop', () => {
    const { state } = TestRenderer.create(<CodePin code="256" />).root.instance;

    expect(state.codeLength).toBe(3);
  });

  it('With codeLength prop', () => {
    const { state } = TestRenderer.create(
      <CodePin codeLength={5} />
    ).root.instance;

    expect(state.codeLength).toBe(5);
  });

  it('With code && codeLength prop, use code prop', () => {
    const { state } = TestRenderer.create(
      <CodePin code="256" codeLength={5} />
    ).root.instance;

    expect(state.codeLength).toBe(3);
  });
});
