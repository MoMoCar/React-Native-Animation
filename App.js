import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home'
import BottomSheetExample from './src/screens/BottomSheetExample';
import BasicExample from './src/screens/BasicExample';

const Stack = createNativeStackNavigator();

export default function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Home Screen */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home Page', headerShown: false }}
        />
        {/* BottomSheet Animation */}
        <Stack.Screen 
          name="BottomSheetExample" 
          component={BottomSheetExample} 
          options={{ title: 'Detail Page', headerShown: false }} 
        />
        {/* Basic Example */}
        <Stack.Screen 
          name="BasicExample" 
          component={BasicExample} 
          options={{ title: 'BasicExample', headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}