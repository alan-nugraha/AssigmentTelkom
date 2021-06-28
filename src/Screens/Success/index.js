import {CommonActions} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button} from '../../uikit';
import Flex from '../../styles/Flex';
import {Color} from '../../styles/Color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Rating, AirbnbRating} from 'react-native-ratings';

const Success = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={[Flex.row]}>
          <View style={styles.containerIcon}>
            <Icon name="motorbike" size={30} color={'white'} />
          </View>
          <Text style={{marginLeft: 10, fontSize: 16, fontWeight: 'bold'}}>
            Terima Kasih!
          </Text>
        </View>
        <View style={styles.infoPayment}>
          <Text style={styles.textPayment}>Dibayar pakai LinkAja</Text>
          <View style={[Flex.rowCenter]}>
            <Image
              style={styles.image}
              source={require('../../assets/icons-LinkAja.png')}
            />
            <Text style={styles.infoPrice}>Rp 18.000</Text>
          </View>
        </View>
        <View style={Flex.alignCenter}>
          <Text style={styles.textQuestion}>Bagaimana customer Anda?</Text>
          <Rating type="star" ratingCount={5} imageSize={40} />
        </View>
        <View style={styles.containerBtn}>
          <Button
            onPress={() => {
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{name: 'Home'}],
                }),
              );
              dispatch({type: 'DELETE_STATE'});
            }}
            label="Selesai"
          />
        </View>
      </View>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
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
});
