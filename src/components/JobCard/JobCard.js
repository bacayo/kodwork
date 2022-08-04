import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import styles from './JobCardStyles';

const JobCard = ({ job }) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('JobDetailScreen', {
      name: job.name,
      companyName: job.company.short_name,
      location: job.locations[0].name,
      levelName: job.levels[0].name,
      contents: job.contents,
      id: job.id,
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.title}>{job.name}</Text>
        <Text style={styles.company_name}>{job.company.short_name}</Text>
        <Text style={styles.location}>
          {job.locations && job.locations.length > 0
            ? job.locations[0].name
            : 'Unknown Location'}
        </Text>
        <Text style={styles.level}>{job.levels[0].name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JobCard;
