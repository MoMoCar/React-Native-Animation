import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Scenes
import Home from './src/screens/Home'
import BottomSheetExample from './src/screens/BottomSheetExample';
import BasicExample from './src/screens/BasicExample';
import MovableSquare from './src/screens/MovableSquare';
import ScrollView from './src/screens/ScrollView';
import InterpolateColor from './src/screens/InterpolateColor';

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

        {/* Movable Square */}
        <Stack.Screen
          name="MovableSquare"
          component={MovableSquare}
          options={{ title: 'MovableSquare', headerShown: false }}
        />
        {/* ScroolView Example */}
        <Stack.Screen
          name="ScrollView"
          component={ScrollView}
          options={{ title: 'ScrollView', headerShown: false }}
        />

        {/* Interpolate Color Example */}
        <Stack.Screen
          name="InterpolateColor"
          component={InterpolateColor}
          options={{ title: 'InterpolateColor', headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}