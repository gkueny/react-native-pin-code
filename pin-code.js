import { Component } from 'react';
import { PropTypes } from 'prop-types';

class CodePin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCode: '',
      currentIdEdit: 0,
      codeLength: null,
    };
  }

  static getDerivedStateFromProps(props) {
    return {
      codeLength: props.code ? props.code.length : props.codeLength,
    };
  }

  render() {
    return null;
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
