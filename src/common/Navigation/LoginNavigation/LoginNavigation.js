import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../../pages/Login/Login';
import Register from '../../../pages/Register/Register';
import { TextInput,Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const Stack = createStackNavigator();

export default function LoginNavigation() {
  return (
    
  
         
        	<Stack.Navigator>
            	<Stack.Screen name="login" component={Login} />
            	<Stack.Screen name="register" component={Register} />
            </Stack.Navigator>
     	
  
    
  )
}
