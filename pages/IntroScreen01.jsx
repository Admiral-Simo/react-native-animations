import {View, Text, TouchableOpacity} from 'react-native';
import Artwork01 from '../components/artwork/Artwork01';
import {SafeAreaView} from 'react-native-safe-area-context';
import {INTRO_SCREEN_01} from '../utils.constants';
import {useTheme} from '@react-navigation/native';
import ScreenIndicators from '../components/ScreenIndicators';
import PrimaryButton from '../components/PrimaryButton';
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';

const IntroScreen01 = ({navigation}) => {
  const theme = useTheme();
  return (
    <SafeAreaView
      className="flex-1 px-4"
      style={{backgroundColor: theme.colors.card}}>
      <Animated.View
        entering={FadeInUp.duration(1000).springify()}
        className="items-center justify-center flex-1">
        <Artwork01 width={300} height={300} />
      </Animated.View>
      <Animated.Text
        entering={FadeInDown.duration(1000).springify()}
        style={{color: theme.colors.text}}
        className="text-4xl font-bold text-black">
        {INTRO_SCREEN_01.title}
      </Animated.Text>
      <Animated.Text
        entering={FadeInDown.delay(100).duration(1000).springify()}
        style={{color: theme.colors.text}}
        className="mt-3 opacity-50">
        {INTRO_SCREEN_01.description}
      </Animated.Text>
      <Animated.View
        entering={FadeInDown.delay(200).duration(1000).springify()}>
        <ScreenIndicators count={2} activeIndex={0} />
      </Animated.View>
      <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="items-center mt-6 mb-3">
        <PrimaryButton
          label="Next"
          onPress={() => navigation.replace('IntroScreen02')}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

export default IntroScreen01;
