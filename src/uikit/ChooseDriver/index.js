import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, Button} from '..';
import {LOCATION} from '../../constants';
import {setMapType, setRegion} from '../../redux/Map/actions';
import {Color} from '../../styles/Color';
import Flex from '../../styles/Flex';

const DRIVER_LIST = [
  {
    title: 'GoRide',
    person: 1,
    price: '18.0000',
    duration: '1 - 5 mins',
  },
  {
    title: 'GoCar',
    person: 1,
    price: '28.0000',
    duration: '3 - 7 mins',
  },
  {
    title: 'GoCar (L)',
    person: 1,
    price: '32.0000',
    duration: '3 - 6 mins',
  },
];

const ChooseDriver = ({onOrder}) => {
  const dispatch = useDispatch();
  const {selectedPickup} = useSelector(state => state.mapReducer);
  const navigation = useNavigation();
  const [choosedDriverIndex, setChoosedDriverIndex] = useState(0);

  return (
    <View>
      <View paddingX={16} paddingY={12} style={[Flex.rowCenterBetween]}>
        <TouchableOpacity
          onPress={() => {
            dispatch(setMapType('normal'));
          }}
          activeOpacity={0.8}
          style={styles.btnWhite}>
          <Icon name="arrow-left" size={24} />
        </TouchableOpacity>
      </View>
      <View paddingTop={20} style={styles.driverListContainer}>
        <ScrollView>
          {DRIVER_LIST.map((item, index) => (
            <View
              paddingX={20}
              paddingY={12}
              key={item?.title}
              color={choosedDriverIndex === index ? Color.GREEN : Color.WHITE}
              style={[Flex.rowCenterBetween]}>
              <View>
                <Text size={14} fontWeight="bold">
                  {item?.title}
                </Text>
                <Text>{item?.person} person</Text>
              </View>
              <View>
                <Text size={14} fontWeight="bold">
                  Rp{item?.price}
                </Text>
                <Text>{item?.duration}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <View padding={20} style={styles.btnConfirmation}>
        <View style={[Flex.rowCenter, styles.containerPayment]}>
          <Image
            style={styles.image}
            source={require('../../assets/icons-LinkAja.png')}
          />
          <Text style={styles.textPayment}>LinkAja</Text>
        </View>
        <Button
          onPress={() => {
            dispatch(setMapType('send-active'));
            dispatch(
              setRegion({
                ...LOCATION.DELTA_ZOOM_OUT,
                latitude: selectedPickup?.latitude,
                longitude: selectedPickup?.longitude,
              }),
            );
            onOrder && onOrder();
          }}
          label="Order GoRide"
          total="Rp18.000"
        />
      </View>
    </View>
  );
};

export default ChooseDriver;

const styles = StyleSheet.create({
  btnWhite: {
    height: 40,
    width: 40,
    backgroundColor: Color.WHITE,
    borderRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  driverListContainer: {
    height: 200,
    backgroundColor: Color.WHITE,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
  },
  btnConfirmation: {
    backgroundColor: Color.WHITE,
    elevation: 10,
    marginTop: -4,
  },
  image: {
    height: 30,
    width: 30,
  },
  containerPayment: {
    marginBottom: 20,
  },
  textPayment: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
});
