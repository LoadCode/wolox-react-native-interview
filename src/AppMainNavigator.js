import React from 'react';
import {Text, View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Library from './screens/Library';
import Wishlist from './screens/Wishlist';
import AddNew from './screens/AddNew';
import Settings from './screens/Settings';
import Rentals from './screens/Rentals';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from './config/constants';

const Tab = createMaterialBottomTabNavigator();

export default function AppMainNavigator() {
  return (
    <Tab.Navigator barStyle={{backgroundColor: COLORS.PRIMARY}}>
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: ({color}) => (
            <Ionicons name="library" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarLabel: 'Wishlist',
          tabBarIcon: ({color}) => (
            <Ionicons name="heart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="AddNew"
        component={AddNew}
        options={{
          tabBarLabel: 'AddNew',
          tabBarIcon: ({color}) => (
            <Ionicons name="add-circle" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Rentals"
        component={Rentals}
        options={{
          tabBarLabel: 'Rentals',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="shopping-cart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color}) => (
            <Ionicons name="settings-sharp" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
