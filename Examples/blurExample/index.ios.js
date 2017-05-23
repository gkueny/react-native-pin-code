import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  AppRegistry,
  StyleSheet,
  Dimensions,
  Text,
  View
} from 'react-native';

import CodePin from './pin-code/pin-code';
const { BlurView } = require('react-native-blur');

const { height, width } = Dimensions.get('window');

export default class blurExample extends Component {
  constructor() {
    super();

    this.state = {
      displayCodePin: true,
      success: ''
    };
  }

  onSuccess = () => {
    this.ref.clean();

    this.setState({
      displayCodePin: false,
      success: 'Okeyyyyy !'
    });
  };

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.success}>
          {this.state.success}
        </Text>

        {this.state.displayCodePin
          ? <BlurView blurType="dark" blurAmount={10} style={styles.blur}>

              <KeyboardAvoidingView
                behavior={'position'}
                contentContainerStyle={styles.avoidingView}
              >
                <CodePin
                  ref={ref => (this.ref = ref)}
                  code="290317"
                  number={6}
                  success={this.onSuccess}
                  containerStyle={styles.containerCodePin}
                  pinStyle={styles.pinStyle}
                  textStyle={{ fontSize: 12 }}
                  text={'Protected area'}
                  errorStyle={{ fontSize: 10 }}
                  error={'Look at the code ;)'}
                  keyboardType="numeric"
                />
              </KeyboardAvoidingView>

            </BlurView>
          : null}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  blur: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    width: width,
    height: height
  },
  avoidingView: {
    borderRadius: 10,
    height: 150,
    width: width - 30
  },
  containerCodePin: {
    borderRadius: 10
  },
  pinStyle: {
    marginLeft: 5,
    marginRight: 5
  },
  success: {
    fontSize: 20,
    color: 'green',
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('blurExample', () => blurExample);
