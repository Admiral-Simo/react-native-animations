import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSharedValue} from 'react-native-reanimated';
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';

const image = {
  uri: 'https://images.pexels.com/photos/1226302/pexels-photo-1226302.jpeg?auto=compress&cs=tinysrgb&w=600',
};

const App = () => {
  const sharedVal = useSharedValue(0);
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const countNow = setInterval(() => {
      setNow(new Date());
    }, 1000 * 60);
    countNow();
  }, []);
  return (
    <ImageBackground source={image} resizeMode="cover" className="flex-1">
      <View className="flex flex-col items-center gap-3 mt-3 mb-6">
        <Ionicons name="ios-lock-closed" size={20} color="white" />
        <Text className="text-xl text-center text-white">
          {moment(new Date()).format('dddd, DD MMMM')}
        </Text>
        <Text className="font-bold text-center text-white text-8xl">
          {moment(new Date()).format('HH:MM')}
        </Text>
      </View>

      {/* Notifications */}
      <ScrollView className="px-2">
        <View className="relative">
          <View className="flex-row items-center p-2 space-x-3 bg-black rounded-lg opacity-70">
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/124/124034.png',
              }}
              className="w-10 h-10 rounded-lg"
            />
            <View className="justify-between">
              <Text className="font-bold text-white">Whatsapp</Text>
              <Text className="text-white">Hatim: Wa Fin</Text>
            </View>
          </View>
          <Text className="absolute top-0 right-0 z-10 text-white">
            3 min ago
          </Text>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="black" barStyle="light-content" />
    </ImageBackground>
  );
};

export default App;
