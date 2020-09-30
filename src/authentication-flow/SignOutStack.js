import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LogInForm from '../screens/LogInForm';

const Stack = createStackNavigator();

export default function SignOutStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={LogInForm} />
    </Stack.Navigator>
  );
}
