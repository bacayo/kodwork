import { View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './HomeScreenStyles';
import JobCard from '../../components/JobCard';
import { listJobsAsync } from '../../api';

const HomeScreen = () => {
  useEffect(() => {
    !isLoading && dispatch(listJobsAsync(page));
  }, [isLoading, page, dispatch]);
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useState(1);

  const { items, isLoading } = useSelector(state => state.listJobsSlice);

  const renderJobs = ({ item }) => <JobCard job={item} />;

  return (
    <View style={styles.container}>
      <FlatList renderItem={renderJobs} data={items} />
    </View>
  );
};

export default HomeScreen;
