import {TouchableOpacity, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

const PrimaryButton = ({onPress, label}) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      className="items-center justify-center py-3 rounded-full px-7"
      style={{backgroundColor: theme.colors.primary}}
      onPress={onPress}>
      <Text className="font-semibold" style={{color: theme.colors.background}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
