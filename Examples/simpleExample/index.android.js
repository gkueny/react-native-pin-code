import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  AppRegistry,
  StyleSheet,
  Dimensions,
  Text,
  View
} from 'react-native';

import CodePin from 'react-native-pin-code';

const {height, width} = Dimensions.get('window');


export default class simpleExample extends Component {

  constructor() {
    super();

    this.state = {
      displayCodePin : true,
      success        : ''
    }
  }

  onSuccess = () => {

    this.ref.focus(1);

    this.setState({
      displayCodePin : false,
      success        : 'A success message :)'
    });

  }

  render() {

    return (
      <View style={styles.container}>

       <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
          Press Cmd+R to reload,
          Cmd+D or shake for dev menu
        </Text>   
        <Text style={styles.instructions}> 
          {this.state.success} 
        </Text>

       <KeyboardAvoidingView behavior={'position'} keyboardVerticalOffset={-30} contentContainerStyle={styles.avoidingView}>
          <CodePin 
            ref={ref => this.ref = ref}
            code="CODE"
            success={this.onSuccess}            
          />
        </KeyboardAvoidingView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex            : 1,
    justifyContent  : 'center',
    alignItems      : 'center',
    backgroundColor : '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  blur: {
    position        : 'absolute',
    justifyContent  : 'center',
    alignItems      : 'center',
    top             : 0,
    left            : 0,
    width           : width,
    height          : height
  },
  avoidingView: {
    borderRadius  : 10,
    height        : 150,
    marginTop     : 50,
    width         : width - 30,
  },
  containerCodePin: {
    borderRadius: 10
  },
  success: {
    fontSize    : 20,
    color       : 'green',
    textAlign   : 'center',
  },
});

AppRegistry.registerComponent('simpleExample', () => simpleExample);
