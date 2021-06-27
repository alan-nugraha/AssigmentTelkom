import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Color} from '../../styles/Color';

const IconInput = () => {
  return (
    <View style={styles.container}>
      <Icon name="arrow-up-circle" color={Color.PRIMARY} size={24} />
      <View style={styles.separator} />
      <View style={styles.iconDiscWrapper}>
        <Icon name="disc" color={Color.ORANGE} size={30} />
      </View>
    </View>
  );
};

export default IconInput;

const styles = StyleSheet.create({
  container: {
    width: 26,
  },
  separator: {
    height: 14,
    borderWidth: 1,
    borderColor: Color.GREY,
    borderStyle: 'dashed',
    borderRadius: 1,
    width: 1,
    alignSelf: 'center',
    marginRight: 2,
    marginVertical: 2,
  },
  iconDiscWrapper: {
    marginLeft: -3,
    marginTop: -3,
  },
});
