import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.task_background_color,
    borderWidth: 1,
    borderColor: '#babcbe',
    margin: 8,
    padding: 5,
    borderRadius: 5,
  },
  title: {
    color: Colors.title_color,
    fontSize: 24,
    fontWeight: '700',
    padding: 2,
  },
  company_name: {
    fontSize: 18,
    color: Colors.title_color,
    fontWeight: '400',
    padding: 2,
  },
  location: {
    fontWeight: '700',
    color: Colors.task_background_color,
    backgroundColor: Colors.secondary_color,
    borderRadius: 5,
    alignSelf: 'flex-start',
    padding: 5,
  },
  level: {
    color: Colors.secondary_color,
    fontWeight: '700',
    alignSelf: 'flex-end',
    marginRight: 5,
    fontSize: 16,
  },
});
