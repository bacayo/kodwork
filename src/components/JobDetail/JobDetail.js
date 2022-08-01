import {View, Text} from 'react-native';
import React from 'react';

import styles from './JobDetailStyles';
import ButtonCard from '../ButtonCard';

const JobDetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Job Title</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.info}>Locations:</Text>
          <Text style={styles.info_title}> Job Location</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.info}>Job Level: </Text>
          <Text style={styles.info_title}>Job Level</Text>
        </View>
      </View>
      <Text style={styles.job_detail_header}>Job Detail</Text>
      <View style={styles.innerContainer}>
        <Text style={styles.job_description}>
          Non adipisicing aliqua tempor ex culpa voluptate mollit. Elit Lorem
          consectetur do ea enim in id ullamco cillum sit culpa in cupidatat
          minim. Quis incididunt in cupidatat est fugiat mollit ullamco ad. Nisi
          reprehenderit id minim quis quis occaecat ea consequat.
        </Text>
      </View>
      <View style={styles.footer}>
        <ButtonCard button_title="Submit" />
        <ButtonCard button_title="Favorite Job" />
      </View>
    </View>
  );
};

export default JobDetail;
