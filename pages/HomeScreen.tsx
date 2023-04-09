import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import Chrono from '../components/Chrono';

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-black">
      <View className="items-center justify-center mt-36">
        <TouchableOpacity
          activeOpacity={0.7}
          className="items-center justify-center bg-white rounded-full w-44 h-44">
          <Text className="text-5xl text-black">RUN</Text>
        </TouchableOpacity>
      </View>
      <Text className='mt-10 text-center text-white text-7xl'>00:00:00</Text>
      <StatusBar backgroundColor="black" barStyle="light-content" />
    </View>
  );
};

export default HomeScreen;
