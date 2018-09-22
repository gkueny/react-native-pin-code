import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {TextInput, View, Text} from 'react-native';

class CodePin extends Component {
  constructor(props) {
    super(props);
  }

  render() {}
}

CodePin.propTypes = {
  code: PropTypes.string, // directly specify code
  codeLength: PropTypes.number, // specify code length if checkPinCode is used
  checkPinCode: PropTypes.func, // check manually code
  onSuccess: PropTypes.func, // call on success
  onError: PropTypes.func, // call on error
  pinStyle: PropTypes.object
};

CodePin.defaultProps = {};

export default CodePin;
