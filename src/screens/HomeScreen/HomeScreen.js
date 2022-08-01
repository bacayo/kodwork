import {View} from 'react-native';
import React from 'react';

import styles from './HomeScreenStyles';
import JobCard from '../../components/JobCard';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <JobCard />
    </View>
  );
};

export default HomeScreen;
