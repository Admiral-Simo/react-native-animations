import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import Chrono from '../components/Chrono';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';

const HomeScreen = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      isStarted && setCurrentTime(prev => prev + 1000);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [isStarted]);

  const reset = () => {
    setCurrentTime(0);
    setIsStarted(false);
  };

  return (
    <View className="flex-1 bg-black">
      <View className="items-center justify-center mt-36">
        <TouchableOpacity
          onPress={() => setIsStarted(prev => !prev)}
          activeOpacity={0.7}
          className="items-center justify-center bg-white rounded-full w-44 h-44">
          {currentTime === 0 ? (
            <Text className="text-5xl text-black font-rubikBold">RUN</Text>
          ) : (
            <Text className="text-5xl text-black font-rubikBold">Split</Text>
          )}
          <TouchableOpacity
            onPress={reset}
            className="absolute bottom-0 right-0 bg-purple-500 rounded-full">
            <MaterialCommunityIcons name="restart" size={32} />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <Text className="mt-10 text-center text-white text-7xl font-rubikLight">
        {moment(currentTime).format('mm:ss')}
      </Text>
      <StatusBar backgroundColor="black" barStyle="light-content" />
    </View>
  );
};

export default HomeScreen;
