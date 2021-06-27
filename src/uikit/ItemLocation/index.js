import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, View} from '..';
import {Color} from '../../styles/Color';
import Flex from '../../styles/Flex';

const ItemLocation = ({data, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress && onPress(data)}
      style={[Flex.row, styles.container]}>
      <View paddingTop={6} style={[Flex.alignCenter]}>
        <Icon name="map-marker" size={20} color={Color.GREY} />
        <Text size={10}>20.6 km</Text>
      </View>
      <View marginLeft={8} style={styles.rightContainer}>
        <Text size={14} fontWeight="bold">
          {data?.structured_formatting?.main_text}
        </Text>
        <View marginBottom={4} />
        <Text size={12}>{data?.structured_formatting?.secondary_text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(ItemLocation);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  rightContainer: {
    flex: 1,
  },
  separator: {
    width: '100%',
    height: 0.3,
    backgroundColor: Color.GREY,
  },
});
