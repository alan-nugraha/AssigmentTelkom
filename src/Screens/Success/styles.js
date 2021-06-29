import {StyleSheet} from 'react-native';
import {Color} from '../../styles/Color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
  },
  containerIcon: {
    height: 50,
    width: 50,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: Color.ORANGE2,
  },
  image: {
    height: 40,
    width: 40,
  },
  mainContainer: {
    padding: '5%',
  },
  infoPayment: {
    borderWidth: 1,
    borderColor: Color.GREY,
    padding: '5%',
    backgroundColor: Color.WHITE3,
    marginTop: 20,
  },
  textPayment: {
    color: Color.GREY2,
    marginBottom: 15,
  },
  infoPrice: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  textQuestion: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 20,
  },
  containerBtn: {
    marginTop: 30,
  },
  textThanks: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
