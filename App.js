/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import LoginNavigation from './src/common/Navigation/LoginNavigation/LoginNavigation';
import { NavigationContainer } from '@react-navigation/native';

function App() {

  return (
  
    <NavigationContainer>
        <LoginNavigation/>
    </NavigationContainer>
  
  
  );
}

export default App;
