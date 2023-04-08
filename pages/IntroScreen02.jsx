import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {INTRO_SCREEN_02} from '../utils.constants';
import {useTheme} from '@react-navigation/native';
import ScreenIndicators from '../components/ScreenIndicators';
import PrimaryButton from '../components/PrimaryButton';
import Artwork02 from '../components/artwork/Artwork02';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';

const IntroScreen02 = ({navigation}) => {
  const theme = useTheme();
  return (
    <SafeAreaView
      className="flex-1 px-4"
      style={{backgroundColor: theme.colors.card}}>
      <Animated.View
        entering={FadeInUp.duration(1000).springify()}
        className="flex-row items-center justify-between py-4">
        <TouchableOpacity onPress={() => navigation.replace('IntroScreen01')}>
          <Icons name="arrow-back-ios" size={24} color={theme.colors.text} />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        entering={FadeInUp.delay(200).duration(1000).springify()}
        className="items-center justify-center flex-1">
        <Artwork02 width={300} height={300} />
      </Animated.View>
      <Animated.Text
        entering={FadeInDown.duration(1000).springify()}
        style={{color: theme.colors.text}}
        className="text-4xl font-bold text-black">
        {INTRO_SCREEN_02.title}
      </Animated.Text>
      <Animated.Text
        entering={FadeInDown.delay(100).duration(1000).springify()}
        style={{color: theme.colors.text}}
        className="mt-3 opacity-50">
        {INTRO_SCREEN_02.description}
      </Animated.Text>
      <Animated.View
        entering={FadeInDown.delay(200).duration(1000).springify()}>
        <ScreenIndicators count={2} activeIndex={1} />
      </Animated.View>
      <Animated.View
        entering={FadeInDown.delay(400).duration(1000).springify()}
        className="items-center mt-6 mb-3">
        <PrimaryButton
          label="Next"
          onPress={() => navigation.replace('LoginScreen')}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

export default IntroScreen02;
