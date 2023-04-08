import {StyleSheet, Text, StatusBar,useColorScheme} from 'react-native';
import React, { useMemo } from 'react';
import {NavigationContainer, DefaultTheme,DarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './pages/IntroScreen01';
import IntroScreen01 from './pages/IntroScreen01';
import IntroScreen02 from './pages/IntroScreen02';
import LoginScreen from './pages/LoginScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const App = () => {
  const colorScheme = useColorScheme();
  const theme = useMemo(
    () =>
      !(colorScheme === "dark")
        ? {
            ...DarkTheme,
            colors: {
              ...DarkTheme.colors,
              primary: "#fff",
            },
          }
        : {
            ...DefaultTheme,
            colors: {
              ...DefaultTheme.colors,
              primary: "#000",
            },
          },
    [colorScheme]
  );
  return (
    <SafeAreaProvider className="flex-1">
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          initialRouteName="IntroScreen01"
          screenOptions={{headerShown: false, animation: 'fade'}}>
          <Stack.Screen name="IntroScreen01" component={IntroScreen01} />
          <Stack.Screen name="IntroScreen02" component={IntroScreen02} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar backgroundColor="black" barStyle="light-content" />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
