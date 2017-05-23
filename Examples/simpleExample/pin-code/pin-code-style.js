import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

export const codePinStyles = StyleSheet.create({
  container: {
    height          : 150,
    width           : width - 30,
    backgroundColor : '#FFF'
  },
  containerPin: {
    width           : width - 30,
    height          : 40,
    flexDirection   : 'row',
    justifyContent  : 'space-around',
    alignItems      : 'center',
    marginTop       : 20,
  },
  pin: {
    backgroundColor : '#F0F0F0',
    textAlign       : 'center',
    flex            : 1,
    marginLeft      : 20,
    marginRight     : 20,
    borderRadius    : 5,
    shadowColor     : '#000000',
    shadowOffset    : {
      width  : 1,
      height : 1
    },
    shadowRadius  : 5,
    shadowOpacity : 0.4
  },
  text: {
    textAlign   : 'center', 
    color       : 'gray', 
    fontSize    : 20, 
    marginTop   : 30
  },
  error: {
    textAlign   : 'center', 
    color       : 'red', 
    paddingTop  : 10
  }
});


