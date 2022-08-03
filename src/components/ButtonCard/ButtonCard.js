import {TouchableOpacity, Text, View} from 'react-native';
import React from 'react';

import styles from './ButtonCardStyles';
import SVGIcons from '../Icon/SVGIcons';

const ButtonCard = ({button_title, name, fill}) => {
  return (
    <TouchableOpacity style={styles.btn}>
      <View style={styles.innerContainer}>
        <SVGIcons
          stroke={'white'}
          name={name}
          width={24}
          height={24}
          fill={fill}
        />
        <Text style={styles.title}>{button_title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCard;
