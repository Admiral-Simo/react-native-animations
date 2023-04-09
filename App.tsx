import {StatusBar, useColorScheme} from 'react-native';
import React, {useMemo} from 'react';
import {DefaultTheme, DarkTheme} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import store from './redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import MainNavigator from './navigators/MainNavigator';

let persistor = persistStore(store);

const App = () => {
  const colorScheme = useColorScheme();
  const theme = useMemo(
    () =>
      colorScheme === 'dark'
        ? {
            ...DarkTheme,
            colors: {
              ...DarkTheme.colors,
              primary: '#fff',
            },
          }
        : {
            ...DefaultTheme,
            colors: {
              ...DefaultTheme.colors,
              primary: '#000',
            },
          },
    [colorScheme],
  );
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider className="flex-1">
          <MainNavigator theme={theme} />
          <StatusBar backgroundColor="white" barStyle="dark-content" />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
