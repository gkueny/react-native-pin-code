import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {TextInput, View, Text} from 'react-native';

import {codePinStyles} from './pin-code-style';

class CodePin extends Component {
  constructor(props) {
    super(props);

    const codeLength = props.number || props.code.length;

    this.state = {
      error: '',
      number: codeLength,
      code: new Array(codeLength).fill(''),
      edit: 0
    };

    this.textInputsRefs = [];

    this.clean = this.clean.bind(this);
    this.focus = this.focus.bind(this);
    this.isFocus = this.isFocus.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const codeLength = newProps.number || newProps.code.length;

    this.setState({
      number: codeLength,
      edit: 0
    });
  }

  clean() {
    this.setState(prevState => {
      return {
        code: new Array(prevState.number).fill(''),
        edit: 0
      };
    });
    this.focus(0);
  }

  focus(id) {
    this.textInputsRefs[id].focus();
  }

  isFocus(id) {
    let newCode = this.state.code.slice();

    for (let i = 0; i < newCode.length; i++) if (i >= id) newCode[i] = '';

    this.setState({
      code: newCode,
      edit: id
    });
  }

  handleEdit(number, id) {
    let newCode = this.state.code.slice();
    newCode[id] = number;

    // User filling the last pin ?
    if (id === this.state.number - 1) {
      this.focus(0);

      // App pass a checkPinCode function
      if (this.props.checkPinCode) {
        this.props.checkPinCode(newCode.join(''), success => {
          // App say it's different than code
          if (!success) {
            this.setState({
              error: this.props.error,
              code: new Array(this.state.number).fill(''),
              edit: 0
            });
          } else {
            // Is Okey !!!
            this.props.success();
          }
        });

        return;
      }

      // no checkPinCode function
      // But it's different than code
      if (this.props.code !== newCode.join('')) {
        this.setState({
          error: this.props.error,
          code: new Array(this.state.number).fill(''),
          edit: 0
        });

        return;
      }

      this.props.success();

      return;
    }

    this.focus(this.state.edit + 1);

    this.setState(prevState => {
      return {
        error: '',
        code: newCode,
        edit: prevState.edit + 1
      };
    });
  }

  onKeyPress(e) {
    if (e.nativeEvent.key === 'Backspace') {
      const edit = this.state.edit;
      const toFocus = edit > 0 ? edit - 1 : 0;
      this.focus(toFocus);
    }
  }

  render() {
    const {
      text,
      success,
      pinStyle,
      textStyle,
      errorStyle,
      obfuscation,
      containerStyle,
      containerPinStyle,
      ...props
    } = this.props;

    pins = [];
    for (let index = 0; index < this.state.number; index++) {
      const id = index;
      const value = this.state.code[id]
        ? obfuscation ? '*' : this.state.code[id].toString()
        : '';
      pins.push(
        <TextInput
          key={id}
          ref={ref => (this.textInputsRefs[id] = ref)}
          onChangeText={text => this.handleEdit(text, id)}
          onFocus={() => this.isFocus(id)}
          value={value}
          style={[codePinStyles.pin, pinStyle]}
          returnKeyType={'done'}
          autoCapitalize={'sentences'}
          autoCorrect={false}
          autoFocus={id === 0 && this.props.autoFocusFirst}
          onKeyPress={this.onKeyPress}
          underlineColorAndroid={'transparent'}
          {...props}
        />
      );
    }

    const error = this.state.error ? (
      <Text style={[codePinStyles.error, errorStyle]}>{this.state.error}</Text>
    ) : null;

    return (
      <View style={[codePinStyles.container, containerStyle]}>
        <Text style={[codePinStyles.text, textStyle]}>{text}</Text>

        {error}

        <View style={[codePinStyles.containerPin, containerPinStyle]}>
          {pins}
        </View>
      </View>
    );
  }
}

CodePin.propTypes = {
  code: PropTypes.string,
  success: PropTypes.func.isRequired,
  number: PropTypes.number,
  checkPinCode: PropTypes.func,
  autoFocusFirst: PropTypes.bool,
  obfuscation: PropTypes.bool,
  pinStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  containerPinStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  errorStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number])
};

CodePin.defaultProps = {
  code: '',
  number: 4,
  checkPinCode: null,
  autoFocusFirst: true,
  obfuscation: false,
  text: 'Pin code',
  error: 'Bad pin code.',
  pinStyle: {},
  containerPinStyle: {},
  containerStyle: {},
  textStyle: {},
  errorStyle: {}
};

export default CodePin;
