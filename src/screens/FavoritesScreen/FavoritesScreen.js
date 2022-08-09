import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import JobCard from '../../components/JobCard';
import { removeFavorites } from '../../context/jobs/listJobByIdSlice';
import { useNavigation } from '@react-navigation/native';

const FavoritesScreen = () => {
  const { favoriteJobs } = useSelector(state => state.listJobByIdSlice);

  const dispatch = useDispatch();

  const removeJob = () => {
    dispatch(removeFavorites());
  };
  const navigation = useNavigation();

  const renderFavoriteJobs = ({ item }) => (
    <JobCard job={item} visible={true} handleAction={removeJob} />
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>HomeScreen</Text>
      </TouchableOpacity>
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
