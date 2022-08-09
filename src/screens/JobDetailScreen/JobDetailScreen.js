import { View, Text, Dimensions, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import ButtonCard from '../../components/ButtonCard';
import Colors from '../../constants/Colors';

import styles from './JobDetailStyles';

import RenderHTML from 'react-native-render-html';

import { useDispatch, useSelector } from 'react-redux';
import { listJobByIdAsync } from '../../api';

import { addToFavorites } from '../../context/jobs/listJobByIdSlice';

const JobDetailScreen = props => {
  const width = Dimensions.get('window').width;

  const dispatch = useDispatch();
  const id = props.route.params.id;
  const { item, isLoading, favoriteJobs } = useSelector(
    state => state.listJobByIdSlice,
  );

  useEffect(() => {
    dispatch(listJobByIdAsync(id));
  }, [id, dispatch, favoriteJobs]);

  const source = {
    html: item?.contents,
  };

  const handleAddToFavorites = () => {
    dispatch(addToFavorites());
  };

  if (item !== undefined && !isLoading) {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>{item.company.name}</Text>
            <View style={styles.infoContainer}>
              <Text style={styles.info}>Locations:</Text>
              <Text style={styles.info_title}>{item.locations[0].name}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.info}>Job Level: </Text>
              <Text style={styles.info_title}>{item.levels[0].name}</Text>
            </View>
          </View>
          <Text style={styles.job_detail_header}>Job Detail</Text>
          <View style={styles.innerContainer}>
            {/* <Text style={styles.job_description}>{item.contents}</Text> */}
            <RenderHTML source={source} contentWidth={width} />
          </View>
          <View style={styles.footer}>
            <ButtonCard button_title="Submit" name={'submit'} visible />
            <ButtonCard
              button_title="Favorite Job"
              name={'heart'}
              fill={Colors.primary_color}
              onPress={handleAddToFavorites}
              visible
            />
          </View>
        </View>
      </ScrollView>
    );
  }
};
export default JobDetailScreen;
