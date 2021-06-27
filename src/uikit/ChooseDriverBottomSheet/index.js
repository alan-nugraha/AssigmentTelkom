import React from 'react';
import {StyleSheet} from 'react-native';
import {AddressBox, Text, View, ChooseDriver} from '../';

const ChooseDriverBottomSheet = ({onOrder}) => {
  return (
    <View style={styles.container}>
      <View paddingTop={20} paddingX={20}>
        <AddressBox />
      </View>
      <View>
        <ChooseDriver onOrder={onOrder} />
      </View>
    </View>
  );
};

export default ChooseDriverBottomSheet;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
  },
});
