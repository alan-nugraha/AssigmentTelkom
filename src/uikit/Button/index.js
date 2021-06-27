import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, View} from '..';
import {Color} from '../../styles/Color';
import Flex from '../../styles/Flex';

const Button = ({type, iconName, label, onPress}) => {
  if (type === 'icon') {
    return (
      <TouchableOpacity
        onPress={() => onPress && onPress()}
        style={[Flex.rowCenter, styles.container]}>
        <View marginRight={4}>
          <Icon size={16} name={iconName} color={Color.PRIMARY} />
        </View>
        <Text size={12}>{label}</Text>
      </TouchableOpacity>
    );
  }

  if (type === 'ghost') {
    return (
      <TouchableOpacity
        onPress={() => onPress && onPress()}
        style={styles.ghostContainer}>
        <Text size={12} color={Color.PRIMARY} fontWeight="bold">
          {label}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={() => onPress && onPress()}
      style={styles.normalContainer}>
      <Text size={14} fontWeight="bold" color={Color.WHITE}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Color.GREY,
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 16,
  },
  ghostContainer: {
    paddingHorizontal: 16,
    paddingVertical: 2,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: Color.PRIMARY,
  },
  normalContainer: {
    backgroundColor: Color.PRIMARY,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});
