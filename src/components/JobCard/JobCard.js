import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import styles from './JobCardStyles';

const JobCard = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('JobDetailScreen');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.title}>Job title</Text>
        <Text style={styles.company_name}>Company Name</Text>
        <Text style={styles.location}>Job Location</Text>
        <Text style={styles.level}>Job Level</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JobCard;
