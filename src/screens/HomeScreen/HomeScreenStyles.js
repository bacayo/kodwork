import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.primary_color,
    flex: 1,
  },
  nextPage: {
    fontFamily: 'Roboto-Bold',
    marginHorizontal: 10,
    color: Colors.secondary_color,
  },
  prevPage: {
    // textAlign: 'left',
    marginHorizontal: 10,
    fontFamily: 'Roboto-Bold',
    color: Colors.secondary_color,
  },
  changePage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
