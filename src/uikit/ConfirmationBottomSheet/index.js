import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Button, InputNotes, Text, View} from '..';
import {LOCATION} from '../../constants';
import {setMapType, setRegion, setSearchInput} from '../../redux/Map/actions';
import {setModalVisible, setSearchType} from '../../redux/SearchType/actions';
import {Color} from '../../styles/Color';
import Flex from '../../styles/Flex';

const ConfirmationBottomSheet = ({mapRef}) => {
  const dispatch = useDispatch();
  const {type} = useSelector(state => state.searchTypeReducer);
  const {selectedPickup, selectedDestination, searchInput, mapType} =
    useSelector(state => state.mapReducer);
  const navigation = useNavigation();

  const handleConfirm = () => {
    if (type === 'pickup') {
      if (selectedDestination) {
        dispatch(setMapType('send'));
      } else {
        dispatch(setSearchType('destination'));
        dispatch(setModalVisible(true));
      }
      dispatch(
        setSearchInput({
          ...searchInput,
          pickup: selectedPickup?.main_text,
        }),
      );
      dispatch(
        setRegion({
          ...LOCATION.DELTA_ZOOM_OUT,
          latitude: selectedPickup?.latitude,
          longitude: selectedPickup?.longitude,
        }),
      );
    } else {
      if (selectedPickup) {
        dispatch(setMapType('send'));
      } else {
        dispatch(setSearchType('pickup'));
        dispatch(setModalVisible(true));
      }
      dispatch(
        setSearchInput({
          ...searchInput,
          destination: selectedDestination?.main_text,
        }),
      );
      dispatch(
        setRegion({
          ...LOCATION.DELTA_ZOOM_OUT,
          latitude: selectedDestination?.latitude,
          longitude: selectedDestination?.longitude,
        }),
      );
    }
  };

  return (
    <View style={styles.container}>
      <View paddingX={16} paddingY={12} style={[Flex.rowCenterBetween]}>
        <TouchableOpacity
          onPress={() => {
            dispatch({type: 'DELETE_STATE'});
            navigation.goBack();
          }}
          activeOpacity={0.8}
          style={styles.btnWhite}>
          <Icon name="arrow-left" size={24} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.btnWhite}>
          <Icon name="google-nearby" size={24} />
        </TouchableOpacity>
      </View>
      <View padding={16} style={styles.bottomContainer}>
        <View marginBottom={16} style={[Flex.rowCenterBetween]}>
          <Text size={16} fontWeight="bold">
            Set {type} location
          </Text>
          <Button
            onPress={() => dispatch(setModalVisible(true))}
            label="Edit"
            type="ghost"
          />
        </View>
        <View marginBottom={16} style={[Flex.row]}>
          <View marginTop={-6} marginRight={8}>
            {type === 'pickup' ? (
              <Icon name="arrow-up-circle" size={40} color={Color.PRIMARY} />
            ) : (
              <Icon name="disc" size={48} color={Color.ORANGE} />
            )}
          </View>
          <View style={[Flex.flex1]}>
            <Text size={14} fontWeight="bold">
              {type === 'pickup'
                ? selectedPickup?.main_text
                : selectedDestination?.main_text}
            </Text>
            <View marginBottom={4} />
            <Text>
              {type === 'pickup'
                ? selectedPickup?.secondary_text
                : selectedDestination?.secondary_text}
            </Text>
          </View>
        </View>
        <View marginBottom={16}>
          <InputNotes />
        </View>
        <Button
          onPress={() => {
            if (mapType === 'vice-versa') {
              if (
                (type === 'destination' && selectedDestination) ||
                (type === 'pickup' && selectedPickup)
              ) {
                handleConfirm();
              }
            } else {
              handleConfirm();
            }
          }}
          label={`Set ${type} location`}
        />
      </View>
    </View>
  );
};

export default ConfirmationBottomSheet;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 999,
    bottom: 0,
    width: '100%',
  },
  bottomContainer: {
    backgroundColor: Color.WHITE,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  btnWhite: {
    height: 40,
    width: 40,
    backgroundColor: Color.WHITE,
    borderRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
});
