import {CommonActions} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button} from '../../uikit';

const Success = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <View>
      <Text>SUCCESS</Text>
      <Button
        onPress={() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'Home'}],
            }),
          );
          dispatch({type: 'DELETE_STATE'});
        }}
        label="OK"
      />
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({});
