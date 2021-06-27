import {PermissionsAndroid} from 'react-native';

export const requestLocPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Gojek',
        message:
          'Kami ingin mengetahui lokasi Anda ' +
          'Jadi kami bisa melayani Anda dengan baik.',
      },
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (err) {
    return false;
  }
};
