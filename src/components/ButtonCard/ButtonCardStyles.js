import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  btn: {
    backgroundColor: Colors.secondary_color,
    // maxWidth: '50%',
    flex: 1,
    borderRadius: 5,
    padding: 5,
    margin: 5,
  },
  title: {
    color: Colors.task_background_color,
    textAlign: 'center',
    padding: 5,
  },
});
