import React from 'react';
import {useUserInfo} from '../context/AuthenticationContext';
import SignInStack from './SignInStack';
import SignOutStack from './SignOutStack';

export default function AuthNavigator() {
  const user = useUserInfo();

  return user ? <SignInStack /> : <SignOutStack />;
}
