import React, {useEffect, useRef, useState} from 'react';
import {StatusBar, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {LOCATION} from '../../constants';
import {
  setRegion,
  setSelectedDestination,
  setSelectedPickup,
} from '../../redux/Map/actions';
import {setModalVisible} from '../../redux/SearchType/actions';
import {Color} from '../../styles/Color';
import {
  Button,
  ChooseDriverBottomSheet,
  ConfirmationBottomSheet,
  ModalSearchMap,
  Text,
} from '../../uikit';
import {toMyPosition} from '../../utils/Locations';
import {requestLocPermission} from '../../utils/Permissions';
import Axios from 'axios';
import styles from './styles';
import Config from 'react-native-config';

function MapsScreen(props) {
  const {navigation} = props;
  const dispatch = useDispatch();
  const {type} = useSelector(state => state.searchTypeReducer);
  const {region, marker, selectedDestination, selectedPickup, mapType} =
    useSelector(state => state.mapReducer);
  const {modalVisible} = useSelector(state => state.searchTypeReducer);
  const [mapList, setMapList] = useState([]);
  const [isSuccess, setSuccess] = useState(false);

  const mapRef = useRef(null);

  useEffect(() => {
    if (mapType === 'send') {
      setMapList([
        {...selectedPickup, type: 'pickup'},
        {...selectedDestination, type: 'destination'},
      ]);
    }
  }, [mapType]);

  useEffect(() => {
    requestLocPermission()
      .then(permission => {
        if (permission) {
          toMyPosition(mapRef, dispatch);
          dispatch(setModalVisible(true));
        } else {
          navigation.goBack();
        }
      })
      .catch(err => {
        console.error(err);
        navigation.goBack();
      });
    return () => {
      mapType !== 'send-active' ? dispatch({type: 'DELETE_STATE'}) : null;
    };
  }, []);

  const onRegionChangeComplete = async val => {
    console.log('akwoekaowe')
    if (mapType === 'vice-versa') {
      const convertLatLng = await Axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${val?.latitude},${val?.longitude}&key=${Config.GMAP_API_KEY}`,
      );
      const currentLocation = convertLatLng?.data?.results[0];
      const {lat: latitude, lng: longitude} =
        currentLocation?.geometry?.location;
      if (type === 'pickup') {
        dispatch(
          setSelectedPickup({
            latitude,
            longitude,
            main_text: currentLocation?.formatted_address,
            secondary_text: '',
          }),
        );
      } else if (type === 'destination') {
        dispatch(
          setSelectedDestination({
            latitude,
            longitude,
            main_text: currentLocation?.formatted_address,
            secondary_text: '',
          }),
        );
      }
    }
  };

  return (
    <View style={styles.map}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={region}
        provider={PROVIDER_GOOGLE}
        onRegionChangeComplete={onRegionChangeComplete}>
        {mapType === 'send-active' ? (
          <Marker coordinate={isSuccess ? selectedDestination : selectedPickup}>
            <Icon name={'bike'} size={40} color={Color.RED} />
            <View style={styles.locationDash} />
          </Marker>
        ) : (
          <View />
        )}
        {mapType === 'send' || mapType === 'send-active' ? (
          <>
            {mapList.map(item => (
              <Marker key={item?.type} coordinate={item}>
                <Icon
                  name={item?.type === 'pickup' ? 'arrow-up-circle' : 'disc'}
                  size={40}
                  color={item?.type === 'pickup' ? Color.PRIMARY : Color.ORANGE}
                />
                <View style={styles.locationDash} />
              </Marker>
            ))}
            <MapViewDirections
              origin={mapList[0]}
              destination={mapList[1]}
              apikey={'AIzaSyDnNvDFPC-zgjggGXYNoQR3yyZ-92UZ4LM'} // insert your API Key here
              strokeWidth={2}
              strokeColor={Color.PRIMARY}
            />
          </>
        ) : mapType === 'vice-versa' ? (
          <View />
        ) : (
          <Marker coordinate={marker}>
            <Icon
              name={type === 'pickup' ? 'arrow-up-circle' : 'disc'}
              size={40}
              color={type === 'pickup' ? Color.PRIMARY : Color.ORANGE}
            />
            <View style={styles.locationDash} />
          </Marker>
        )}
      </MapView>
      {mapType === 'vice-versa' ? (
        <View style={styles.markerFixed}>
          <Icon
            name={type === 'pickup' ? 'arrow-up-circle' : 'disc'}
            size={40}
            color={type === 'pickup' ? Color.PRIMARY : Color.ORANGE}
          />
          <View style={styles.locationDash} />
        </View>
      ) : (
        <View />
      )}
      {mapType === 'send' ? (
        <ChooseDriverBottomSheet
          onOrder={async () => {
            setTimeout(() => {
              setSuccess(true);
              dispatch(
                setRegion({
                  ...LOCATION.DELTA_ZOOM_OUT,
                  latitude: selectedDestination?.latitude,
                  longitude: selectedDestination?.longitude,
                }),
              );
              setTimeout(() => {
                navigation.replace('Success');
              }, 1000);
            }, 9000);
          }}
        />
      ) : mapType === 'send-active' ? (
        <View>
          <Button label="Perjalanan Selesai" />
        </View>
      ) : selectedDestination || selectedPickup || mapType === 'vice-versa' ? (
        <ConfirmationBottomSheet mapRef={mapRef} />
      ) : (
        <Button
          label="show modal search map"
          onPress={() => dispatch(setModalVisible(true))}
        />
      )}
      <ModalSearchMap
        visible={modalVisible}
        onClose={() => dispatch(setModalVisible(false))}
        mapRef={mapRef}
      />
    </View>
  );
}

export default MapsScreen;
