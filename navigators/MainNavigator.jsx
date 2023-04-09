import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroScreen01 from '../pages/OnBoarding/IntroScreen01';
import IntroScreen02 from '../pages/OnBoarding/IntroScreen02';
import LoginScreen from '../pages/OnBoarding/LoginScreen';
import HomeScreen from '../pages/HomeScreen';
import {useSelector} from 'react-redux';
import {selectIsRegistered} from '../redux/features/userSlice';

const Stack = createNativeStackNavigator();

const MainNavigator = ({theme}) => {
  const registered = useSelector(selectIsRegistered);

  if (registered) {
    return (
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{headerShown: false, animation: 'fade'}}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName="IntroScreen01"
        screenOptions={{headerShown: false, animation: 'fade'}}>
        <Stack.Screen name="IntroScreen01" component={IntroScreen01} />
        <Stack.Screen name="IntroScreen02" component={IntroScreen02} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
