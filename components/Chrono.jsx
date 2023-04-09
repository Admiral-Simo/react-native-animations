import React, {useState, useEffect} from 'react';
import {View, Text, TextInput} from 'react-native';
import moment from 'moment';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Chrono = ({minutes}) => {
  const [remainingTime, setRemainingTime] = useState(
    moment.duration(minutes, 'minutes').asMilliseconds(),
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(prevRemainingTime => {
        const updatedRemainingTime = moment
          .duration(prevRemainingTime)
          .subtract(1, 'second');
        return updatedRemainingTime.asMilliseconds();
      });
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    setRemainingTime(moment.duration(minutes, 'minutes'));
  }, [minutes]);

  return (
    <Text className="mt-4 text-6xl font-bold text-center text-white">
      {moment(remainingTime).format('mm:ss')}
    </Text>
  );
};

export default Chrono;
