import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.primary_color,
    margin: 5,
  },
  header: {
    backgroundColor: Colors.primary_color,
  },
  title: {
    // fontWeight: '700',
    fontFamily: 'Roboto-Bold',
    fontSize: 24,
    color: Colors.title_color,
  },
  infoContainer: {
    flexDirection: 'row',
  },
  info: {
    color: Colors.secondary_color,
    // fontWeight: '700',
    fontFamily: 'Roboto-Bold',
  },
  info_title: {
    color: Colors.title_color,
    // fontWeight: '700',
    fontFamily: 'Roboto-Bold',
  },
  job_detail_header: {
    textAlign: 'center',
    fontSize: 24,
    // fontWeight: '700',
    color: Colors.title_color,
    fontFamily: 'Roboto-Bold',
  },
  innerContainer: {
    backgroundColor: Colors.task_background_color,
  },
  job_description: {
    color: Colors.title_color,
  },
  footer: {
    flexDirection: 'row',
  },
});
