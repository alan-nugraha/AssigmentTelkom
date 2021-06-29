import {CommonActions} from '@react-navigation/native';
import React from 'react';
import {Text, View, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button} from '../../uikit';
import Flex from '../../styles/Flex';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Rating} from 'react-native-ratings';
import styles from './styles';

const Success = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={[Flex.row]}>
          <View style={styles.containerIcon}>
            <Icon name="motorbike" size={30} color={'white'} />
          </View>
          <Text style={styles.textThanks}>Terima Kasih!</Text>
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
