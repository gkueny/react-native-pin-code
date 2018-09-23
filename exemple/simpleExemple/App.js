import React from 'react';
import { StyleSheet, View } from 'react-native';

import CodePin from './lib/pin-code';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => (
  <View style={styles.container}>
    <CodePin code="1234" />
  </View>
);

export default App;
