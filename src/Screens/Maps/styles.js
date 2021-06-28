import {StyleSheet} from 'react-native';
import {Color} from '../../styles/Color';

export default StyleSheet.create({
  map: {
    flex: 1,
    marginTop: 24,
  },
  footer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    bottom: 0,
    position: 'absolute',
    width: '100%',
  },
  region: {
    color: '#fff',
    lineHeight: 20,
    margin: 20,
  },
  locationDash: {
    height: 16,
    width: 2,
    backgroundColor: 'black',
    alignSelf: 'center',
    marginTop: -8,
  },
  markerFixed: {
    left: '50%',
    marginLeft: -24,
    marginTop: -48,
    position: 'absolute',
    top: '50%',
  },
  marker: {
    height: 48,
    width: 48,
  },
  containerBtn: {
    backgroundColor: Color.WHITE,
    padding: '5%',
  },
  driverContainer: {
    height: 150,
    backgroundColor: Color.WHITE,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
  },
  InfoDriver: {
    padding: '5%',
  },
});
