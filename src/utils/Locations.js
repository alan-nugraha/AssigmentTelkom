import {Alert} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoder';
import LocationServicesDialogBox from 'react-native-android-location-services-dialog-box';

// constants
import {LOCATION} from '../constants';
import {setMarker, setRegion} from '../redux/Map/actions';

export const getAddressLocation = (
  latitude,
  longitude,
  setLocation,
  setCompleteLoc,
) => {
  Geocoder.geocodePosition({
    lat: -7.7970459,
    lng: 110.370468,
  }).then(res => {
    if (res.length) {
      console.log('res geocode', res);
      // setLocation(res[0].formattedAddress);
      // setCompleteLoc(res);
    }
  });
  // .catch(() => setLocation('Tidak mendapatkan alamat'));
};

export const toMyPosition = (mapRef, dispatch, setLocation, setCompleteLoc) => {
  Geolocation.getCurrentPosition(
    info => {
      const {latitude, longitude} = info.coords;
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
      // getAddressLocation(latitude, longitude, setLocation, setCompleteLoc);
    },
    error => console.log(error),
    {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 10000,
      distanceFilter: 2000,
    },
  );
};

export const goToAddAddressPage = navigation => {
  LocationServicesDialogBox.checkLocationServicesIsEnabled({
    message:
      "<h2 style='color: #0af13e'>Aktifkan GPS?</h2>Aplikasi Gojek memerlukan Anda untuk mengaktifkan<br/><br/>GPS, Wi-Fi, dan jaringan seluler untuk mendapatkan lokasi<br/><br/><a href='#'>Learn more</a>",
    ok: 'YES',
    cancel: 'NO',
    enableHighAccuracy: true, // true => GPS AND NETWORK PROVIDER, false => GPS OR NETWORK PROVIDER
    showDialog: true, // false => Opens the Location access page directly
    openLocationServices: true, // false => Directly catch method is called if location services are turned off
    preventOutSideTouch: false, // true => To prevent the location services window from closing when it is clicked outside
    preventBackClick: false, // true => To prevent the location services popup from closing when it is clicked back button
    providerListener: false, // true ==> Trigger locationProviderStatusChange listener when the location state changes
  })
    .then(() => {
      navigation.navigate('Maps'); // success => {alreadyEnabled: false, enabled: true, status: "enabled"}
    })
    .catch(() => {
      Alert.alert('GPS tidak bisa digunakan');
    });
};
