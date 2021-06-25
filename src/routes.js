import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Maps} from './Screens/';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Maps"
        component={Maps}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routes;
