import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppMainNavigator from '../AppMainNavigator';

const Stack = createStackNavigator();

export default function SignInStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="MainApp" component={AppMainNavigator} />
    </Stack.Navigator>
  );
}
