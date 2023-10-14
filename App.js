
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen01 from './demo/Screen01';
import Screen02 from './demo/Screen02';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState,useRef } from 'react';
export default function App() {
  
    const Stack = createNativeStackNavigator();
    
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
            name='Screen01'
            component={Screen01}
          />
          <Stack.Screen
            name='Screen02'
            component={Screen02} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}