import {View, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

const ScreenIndicators = ({count, activeIndex}) => {
  const theme = useTheme();
  return (
    <View className="flex-row items-center justify-center gap-2">
      {[...new Array(count)].map((item, i) => (
        <View
          key={item}
          className="w-2 h-2 rounded-full"
          style={{
            backgroundColor:
              i === activeIndex ? theme.colors.primary : theme.colors.border,
          }}></View>
      ))}
    </View>
  );
};

export default ScreenIndicators;
