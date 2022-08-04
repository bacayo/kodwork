import {View, Text, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import ButtonCard from '../../components/ButtonCard';
import Colors from '../../constants/Colors';

// import JobDetail from '../../components/JobDetail';
// import JobCard from '../../components/JobCard';
import styles from './JobDetailStyles';

import RenderHTML from 'react-native-render-html';

import {useDispatch, useSelector} from 'react-redux';
import {listJobByIdAsync} from '../../api';
import {ScrollView} from 'react-native-gesture-handler';

const JobDetailScreen = props => {
  useEffect(() => {
    dispatch(listJobByIdAsync(id));
  }, [dispatch, isLoading, id]);

  const width = Dimensions.get('window').width;

  const dispatch = useDispatch();
  const id = props.route.params.id;
  const {item, isLoading} = useSelector(state => state.listJobByIdSlice);

  const source = {
    html: item?.contents,
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
            <ButtonCard button_title="Submit" name={'submit'} />
            <ButtonCard
              button_title="Favorite Job"
              name={'heart'}
              fill={Colors.primary_color}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
};
export default JobDetailScreen;
