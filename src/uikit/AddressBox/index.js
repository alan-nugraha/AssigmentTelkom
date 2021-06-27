import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {IconInput, Text, View, Button} from '..';
import {setModalVisible} from '../../redux/SearchType/actions';
import {Color} from '../../styles/Color';
import Flex from '../../styles/Flex';

const AddressBox = () => {
  const dispatch = useDispatch();
  const {selectedDestination, selectedPickup} = useSelector(
    state => state.mapReducer,
  );
  return (
    <View
      paddingY={12}
      paddingLeft={8}
      paddingRight={16}
      style={[Flex.rowCenter, styles.container]}>
      <View style={[Flex.flex1]}>
        <View style={[Flex.rowCenter]}>
          <Icon name="arrow-up-circle" size={18} color={Color.PRIMARY} />
          <View marginRight={6} />
          <Text numberOfLines={1}>{selectedPickup?.main_text}</Text>
        </View>
        <View marginLeft={16} style={styles.separator} marginY={8} />
        <View style={[Flex.rowCenter]}>
          <Icon name="disc" size={20} color={Color.ORANGE} />
          <View marginRight={4} />
          <Text numberOfLines={1}>{selectedDestination?.main_text}</Text>
        </View>
      </View>
      <View marginX={12} />
      <Button
        onPress={() => dispatch(setModalVisible(true))}
        type="ghost"
        label="Edit"
      />
    </View>
  );
};

export default AddressBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    borderRadius: 20,
    elevation: 4,
  },
  separator: {
    height: 1,
    backgroundColor: Color.GREY,
  },
});
