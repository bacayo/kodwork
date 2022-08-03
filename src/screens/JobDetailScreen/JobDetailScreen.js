import {View} from 'react-native';
import React, {useEffect} from 'react';

import JobDetail from '../../components/JobDetail';
import {FlatList} from 'react-native-gesture-handler';

import {useDispatch, useSelector} from 'react-redux';
import {listJobByIdAsync} from '../../api';

const JobDetailScreen = props => {
  const dispatch = useDispatch();

  const id = props.route.params.id;

  const {item} = useSelector(state => state.listJobByIdSlice);

  useEffect(() => {
    dispatch(listJobByIdAsync(id));
  }, [id, dispatch]);

  const renderJob = ({job}) => {
    <JobDetail job={job} />;
  };

  console.log(item);

  return (
    <View>
      <FlatList renderItem={renderJob} data={item} />
    </View>
  );
};

export default JobDetailScreen;
