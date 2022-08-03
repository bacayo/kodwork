import {View, Text} from 'react-native';
import React from 'react';

import styles from './JobDetailStyles';
import ButtonCard from '../ButtonCard';
import Colors from '../../constants/Colors';

const JobDetail = ({job}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{job.company.name}</Text>
        <Text style={styles.title}>123213213</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.info}>Locations:</Text>
          <Text style={styles.info_title}>{job.locations}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.info}>Job Level: </Text>
          <Text style={styles.info_title}>{job.levels[0].name}</Text>
        </View>
      </View>
      <Text style={styles.job_detail_header}>Job Detail</Text>
      <View style={styles.innerContainer}>
        <Text style={styles.job_description}>{job.contents}</Text>
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
  );
};

export default JobDetail;
