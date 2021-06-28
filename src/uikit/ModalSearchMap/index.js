import React, {useEffect} from 'react';
import {StyleSheet, Modal, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Config from 'react-native-config';
import Axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Flex from '../../styles/Flex';
import {Text, View, SearchInput, Button, ListLocation} from '..';
import {Color} from '../../styles/Color';
import {LOCATION} from '../../constants';
import {
  searchMap,
  setMapType,
  setMarker,
  setRegion,
  setSelectedDestination,
  setSelectedPickup,
} from '../../redux/Map/actions';
import {useForm} from '../../utils';
import {setModalVisible} from '../../redux/SearchType/actions';

const ModalSearchMap = ({visible, onClose, onSelectMap, mapRef}) => {
  const dispatch = useDispatch();
  const {region} = useSelector(state => state.mapReducer);
  const {type} = useSelector(state => state.searchTypeReducer);

  useEffect(() => {}, []);

  const handleLocationSelect = async data => {
    const convertID = await Axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?placeid=${data?.place_id}&key=${Config.GMAP_API_KEY}`,
    );

    const {main_text, secondary_text} = data?.structured_formatting;
    const geometry = convertID?.data?.result?.geometry?.location;
    const latitude = geometry?.lat;
    const longitude = geometry?.lng;

    dispatch(setMapType('normal'));

    mapRef.current.animateToRegion({
      ...LOCATION.INITIAL_REGION,
      latitude,
      longitude,
    });
    dispatch(
      setMarker({
        latitude,
        longitude,
      }),
    );
    dispatch(
      setRegion({
        ...LOCATION.INITIAL_REGION,
        latitude,
        longitude,
      }),
    );
    if (type === 'pickup') {
      dispatch(
        setSelectedPickup({
          latitude,
          longitude,
          main_text,
          secondary_text,
        }),
      );
    } else {
      dispatch(
        setSelectedDestination({
          latitude,
          longitude,
          main_text,
          secondary_text,
        }),
      );
    }

    onClose && onClose();
  };

  const handleViaMap = () => {
    onSelectMap && onSelectMap();
    dispatch(setMapType('vice-versa'));
    dispatch(setModalVisible(false));
  };

  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.container}>
        <View padding={16}>
          <View style={[Flex.rowCenter]}>
            <TouchableOpacity onPress={() => onClose && onClose()}>
              <Icon name="close" size={24} />
            </TouchableOpacity>
            <View marginRight={4} />
            <Text size={20} fontWeight="bold">
              Set {type} location
            </Text>
          </View>
          <View marginBottom={20} />
          <SearchInput />
          <View style={styles.buttonWrapper} marginTop={16}>
            <Button
              onPress={handleViaMap}
              type="icon"
              iconName="map"
              label="Pilih lewat peta"
            />
          </View>
        </View>
        <View style={styles.separator} />
        <ListLocation onItemSelect={handleLocationSelect} />
      </View>
    </Modal>
  );
};

export default ModalSearchMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
  },
  buttonWrapper: {
    alignItems: 'flex-start',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: Color.GREY,
  },
});
