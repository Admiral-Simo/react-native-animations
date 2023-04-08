import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

import {TouchableOpacity, Text} from 'react-native';

function Box() {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: offset.value
    };
  });

  const handlePress = () => {
    // Animate the offset value to a new random value over 1 second with linear easing
    offset.value = withTiming(Math.random(), {
      duration: 1000,
      easing: Easing.linear,
    });
  };

  return (
    <>
      <Animated.View
        className="bg-black rounded-lg w-52 h-52"
        style={animatedStyles}
      />
      <TouchableOpacity
        className="px-5 py-2 bg-purple-500 rounded-lg"
        onPress={handlePress}>
        <Text className="text-white">someWorklet</Text>
      </TouchableOpacity>
    </>
  );
}

export default Box;
