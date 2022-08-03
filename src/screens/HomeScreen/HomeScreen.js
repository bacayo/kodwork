import {View} from 'react-native';
import React, {useEffect, useState} from 'react';

import styles from './HomeScreenStyles';
import JobCard from '../../components/JobCard';
import {useDispatch, useSelector} from 'react-redux';
import {listJobsAsync} from '../../api';
import {FlatList} from 'react-native-gesture-handler';

const HomeScreen = () => {
  useEffect(() => {
    !isLoading && dispatch(listJobsAsync(page));
  }, [isLoading, page, dispatch]);

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const {items, isLoading} = useSelector(state => state.listJobsSlice);

  const renderJobs = ({item}) => <JobCard job={item} />;

  return (
    <View style={styles.container}>
      <FlatList renderItem={renderJobs} data={items} />
    </View>
  );
};

export default HomeScreen;
