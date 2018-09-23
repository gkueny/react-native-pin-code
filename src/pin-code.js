import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { PropTypes } from 'prop-types';

import Pin from './pin';

class CodePin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCode: '',
      currentIdEdit: 0,
      codeLength: null,
    };
  }

  static getDerivedStateFromProps({ code, codeLength }) {
    return {
      codeLength: code ? code.length : codeLength,
    };
  }

  /**
   * Return all Pins
   * @param {number} codeLength
   * @param {string} currentCode
   *
   * @returns {array} pins's list
   */
  static getPinList(codeLength, currentCode) {
    const pins = [];

    for (let i = 0; i < codeLength; i += 1) {
      const value = currentCode.length >= i ? currentCode[i] : '';
      pins.push(<Pin key={i + value} value={value} />);
    }

    return pins;
  }

  render() {
    const { codeLength, currentCode } = this.state;

    const pins = CodePin.getPinList(codeLength, currentCode);

    return (
      <View>
        <TextInput value={currentCode} />
        {pins}
      </View>
    );
  }
}

CodePin.propTypes = {
  code: PropTypes.string, // directly specify code
  codeLength: PropTypes.number, // specify code length if checkPinCode is used
  checkPinCode: PropTypes.func, // check manually code
  onSuccess: PropTypes.func, // call on success
  onError: PropTypes.func, // call on error
  pinStyle: PropTypes.object,
};

CodePin.defaultProps = {
  code: null,
  codeLength: 0,
  checkPinCode: null,
  onSuccess: null,
  onError: null,
  pinStyle: null,
};

export default CodePin;
