import React, {useState, useContext} from 'react';
import axios from 'axios';

const AuthenticationContext = React.createContext(null);
const AuthenticationContextUpdate = React.createContext(null);

/**
 * Custom hook to get the methods which can be use to update the context information
 * returns an object withe functions login, logout.
 */
export function useAuthUpdate() {
  return useContext(AuthenticationContextUpdate);
}

/**
 * Custom hook to get access to the content of information mantained by the context
 */
export function useUserInfo() {
  return useContext(AuthenticationContext);
}

/**
 * The context component wrapper that provides access to data mantained by the context
 * @param {Component } children components
 */
export function UserAuthenticationProvider({children}) {
  const [user, setUser] = useState(null);

  /**
   * This function is responsible for starting a session in firebase with email and password
   * the onAuthStateChanged has the resposibility to update the logged user info
   * returns: -true if successful
              -1 on wrong credentials
              -2 on connection timeout
  */
  function login(loginDoc) {
    console.log('\nLog In\n');
    axios
      .post('http://192.168.1.53:3000/sign_in', loginDoc)
      .then((res) => {
        console.log(res);
        setUser(loginDoc.email);
      })
      .catch((err) => console.log('Axios login error: ' + err));
  }

  /**
   * This function is responsible for ending the session in firebase
   * the onAuthStateChanged has the resposibility to update the logged user info (null after logout action)
   */
  function logout() {
    console.log('\nLog Out\n');
  }

  return (
    <AuthenticationContext.Provider value={user}>
      <AuthenticationContextUpdate.Provider value={{login, logout}}>
        {children}
      </AuthenticationContextUpdate.Provider>
    </AuthenticationContext.Provider>
  );
}
