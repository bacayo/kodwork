import {View, StyleSheet} from 'react-native';
import React from 'react';

import JobCard from '../../components/JobCard';
import ButtonCard from '../../components/ButtonCard';

const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      {/* <JobCard /> */}
      <View style={styles.btn}>
        <ButtonCard button_title={'Remove'} name="heart" fill={'#fff'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    height: 50,
  },
});

export default FavoritesScreen;
