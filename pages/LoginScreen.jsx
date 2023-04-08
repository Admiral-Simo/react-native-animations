import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Artwork03 from '../components/artwork/Artwork03';
import {LOG_IN_SCREEN} from '../utils.constants';
import PrimaryButton from '../components/PrimaryButton';
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';

const height = Dimensions.get('screen').height;

const LoginScreen = ({navigation}) => {
  const theme = useTheme();
  return (
    <KeyboardAvoidingView
      behavior="position"
      className="flex-1"
      style={{backgroundColor: theme.colors.card}}>
      <SafeAreaView
        className="flex-1 px-4"
        style={{backgroundColor: theme.colors.card, minHeight: height - 100}}>
        <Animated.View
          entering={FadeInUp.duration(1000).springify()}
          className="flex-row items-center justify-between py-4">
          <TouchableOpacity onPress={() => navigation.replace('IntroScreen02')}>
            <Icons name="arrow-back-ios" size={24} color={theme.colors.text} />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          entering={FadeInUp.delay(200).duration(1000).springify()}
          className="items-center justify-center flex-1">
          <Artwork03 width={240} height={240} />
        </Animated.View>
        <Animated.Text
          entering={FadeInDown.duration(1000).springify()}
          style={{color: theme.colors.text}}
          className="text-4xl font-bold text-black">
          {LOG_IN_SCREEN.title}
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(100).duration(1000).springify()}
          style={{color: theme.colors.text}}
          className="mt-3 opacity-50">
          {LOG_IN_SCREEN.description}
        </Animated.Text>
        <View className="items-center mt-6 mb-3">
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            className="relative w-full mb-3">
            <TextInput
              placeholder="Your Email"
              className="w-full px-5 py-2 pl-12 font-semibold rounded-lg"
              style={{
                color: theme.colors.text,
                backgroundColor: theme.colors.background,
              }}
              placeholderTextColor={theme.colors.border}
            />
            <View className="absolute top-0 bottom-0 left-3">
              <View className="items-center justify-center h-full opacity-50">
                <Icons name="email" size={24} color={theme.colors.text} />
              </View>
            </View>
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}
            className="relative w-full mb-3">
            <TextInput
              placeholder="Your Password"
              className="w-full px-5 py-2 pl-12 font-semibold rounded-lg"
              style={{
                color: theme.colors.text,
                backgroundColor: theme.colors.background,
              }}
              placeholderTextColor={theme.colors.border}
            />
            <View className="absolute top-0 bottom-0 left-3">
              <View className="items-center justify-center h-full opacity-50">
                <Icons name="lock" size={24} color={theme.colors.text} />
              </View>
            </View>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}>
            <PrimaryButton
              label="Log In"
              onPress={() => navigation.navigate('LoginScreen')}
            />
          </Animated.View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
