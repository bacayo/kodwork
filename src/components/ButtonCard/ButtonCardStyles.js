import { StyleSheet } from 'react-native';
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
  btn_display_none: {
    flex: 1,
    borderRadius: 5,
    padding: 5,
    margin: 5,
    display: 'none',
  },
  title: {
    color: Colors.task_background_color,
    textAlign: 'center',
    padding: 5,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
