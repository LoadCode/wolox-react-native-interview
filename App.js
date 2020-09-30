/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, SafeAreaView} from 'react-native';
import {UserAuthenticationProvider} from './src/context/AuthenticationContext';
import AuthNavigator from './src/authentication-flow/AuthNavigator';

function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <UserAuthenticationProvider>
          <AuthNavigator />
        </UserAuthenticationProvider>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
