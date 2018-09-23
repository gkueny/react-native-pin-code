import React from 'react';
import { Text } from 'react-native';
import { PropTypes } from 'prop-types';

const Pin = ({ value }) => <Text>{value}</Text>;

Pin.propTypes = {
  value: PropTypes.string,
};

Pin.defaultProps = {
  value: '',
};

export default Pin;
