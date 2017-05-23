import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { TextInput, View, Text } from 'react-native';

import { codePinStyles } from './pin-code-style';

class CodePin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
      code: new Array(props.number).fill(''),
      edit: 0
    };

    this.textInputsRefs = [];
  }

  clean = () => {
    this.setState({
      code: new Array(this.props.number).fill(''),
      edit: 0
    });
    this.focus(0);
  };

  focus = id => {
    this.textInputsRefs[id].focus();
  };

  isFocus = id => {
    let newCode = this.state.code.slice();

    for (let i = 0; i < newCode.length; i++)
      if (i >= id) newCode[i] = '';

    this.setState({
      code: newCode,
      edit: id
    });
  };

  handleEdit = (number, id) => {
    let newCode = this.state.code.slice();
    newCode[id] = number;

    // User filling the last pin ?
    if (id === this.props.number - 1) {
      // But it's different than code
      if (this.props.code !== newCode.join('')) {
        this.focus(0);

        this.setState({
          error: this.props.error,
          code: new Array(this.props.number).fill(''),
          edit: 0
        });

        return;
      } else {
        this.setState({
          error: '',
          code: newCode,
          edit: this.state.edit
        });

        this.props.success();
      }

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
  };

  render() {
    const {
      text,
      number,
      success,
      pinStyle,
      textStyle,
      errorStyle,
      containerStyle,
      containerPinStyle,
      ...props
    } = this.props;

    pins = [];

    for (let index = 0; index < number; index++) {
      const id = index;
      pins.push(
        <TextInput
          key={id}
          ref={ref => (this.textInputsRefs[id] = ref)}
          onChangeText={text => this.handleEdit(text, id)}
          onFocus={() => this.isFocus(id)}
          value={this.state.code[id] ? this.state.code[id].toString() : ''}
          style={[codePinStyles.pin, pinStyle]}
          returnKeyType={'done'}
          autoCapitalize={'sentences'}
          autoCorrect={false}
          {...props}
        />
      );
    }

    const error = this.state.error
      ? <Text style={[codePinStyles.error, errorStyle]}>
          {this.state.error}
        </Text>
      : null;

    return (
      <View style={[codePinStyles.container, containerStyle]}>

        <Text style={[codePinStyles.text, textStyle]}>
          {text}
        </Text>

        {error}

        <View style={[codePinStyles.containerPin, containerPinStyle]}>

          {pins}

        </View>

      </View>
    );
  }
}

CodePin.propTypes = {
  code: PropTypes.string.isRequired,
  success: PropTypes.func.isRequired,
  number: PropTypes.number,
  pinStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  containerPinStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  errorStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number])
};

CodePin.defaultProps = {
  number: 4,
  text: 'Pin code',
  error: 'Bad pin code.',
  pinStyle: {},
  containerPinStyle: {},
  containerStyle: {},
  textStyle: {},
  errorStyle: {}
};

export default CodePin;
