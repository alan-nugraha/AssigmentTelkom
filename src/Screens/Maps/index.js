import React, {useState} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import styles from './styles';
import marker from '../../assets/icons-marker.png';

const latitudeDelta = 0.025;
const longitudeDelta = 0.025;

function MapsScreen(props) {
  const [region, setRegion] = useState(regionLocation);

  const regionLocation = {
    latitudeDelta,
    longitudeDelta,
    latitude: 25.1948475,
    longitude: 55.2682899,
  };

  const onRegionChange = param => {
    setRegion(param);
  };

  return (
    <View style={styles.map}>
      <MapView
        style={styles.map}
        initialRegion={regionLocation}
        onRegionChangeComplete={param => onRegionChange(param)}
        provider={PROVIDER_GOOGLE}
        region={region}
      />
      <View style={styles.markerFixed}>
        <Image style={styles.marker} source={marker} />
      </View>
      <SafeAreaView style={styles.footer}>
        <Text style={styles.region}>{JSON.stringify(region, null, 2)}</Text>
      </SafeAreaView>
    </View>
  );
}

export default MapsScreen;
