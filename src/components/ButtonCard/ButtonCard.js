import {TouchableOpacity, Text} from 'react-native';
import React from 'react';

import styles from './ButtonCardStyles';

const Button = ({button_title}) => {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.title}>{button_title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
