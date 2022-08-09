import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './HomeScreenStyles';
import JobCard from '../../components/JobCard';
import { listJobsAsync } from '../../api';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);

  const { items } = useSelector(state => state.listJobsSlice);

  useEffect(() => {
    // !isLoading && dispatch(listJobsAsync(page));
    dispatch(listJobsAsync(page));
  }, [page, dispatch]);

  const renderJobs = ({ item }) => <JobCard job={item} />;

  const renderNextPage = () => {
    setPage(page + 1);
  };

  const renderPrevScreen = () => {
    setPage(page - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.changePage}>
        <TouchableOpacity onPress={renderPrevScreen}>
          <Text style={styles.prevPage}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={renderNextPage}>
          <Text style={styles.nextPage}>Next</Text>
        </TouchableOpacity>
      </View>
      <FlatList renderItem={renderJobs} data={items} />
    </View>
  );
};

export default HomeScreen;
