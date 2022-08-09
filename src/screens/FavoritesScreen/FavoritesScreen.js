import { View, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import JobCard from '../../components/JobCard';
import { removeFavorites } from '../../context/jobs/listJobByIdSlice';

const FavoritesScreen = () => {
  const { favoriteJobs } = useSelector(state => state.listJobByIdSlice);

  const dispatch = useDispatch();

  const removeJob = () => {
    dispatch(removeFavorites());
  };

  const renderFavoriteJobs = ({ item }) => (
    <JobCard job={item} visible={true} handleAction={removeJob} />
  );

  return (
    <View style={styles.container}>
      <FlatList renderItem={renderFavoriteJobs} data={favoriteJobs} />
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
