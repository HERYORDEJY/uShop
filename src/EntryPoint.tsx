/* @flow weak */

const { connectToDevTools } = require('react-devtools-core');
const config = { host: 'localhost', port: 8081 };
connectToDevTools(config);

import React from 'react';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { setCustomText, setCustomTextInput } from 'react-native-global-props';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
//
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store } from './redux/store';
import { persistor } from './redux/store';
import DrawerNavigation from './navigation/drawer';
// import StackNavigation from './navigation/StackNavigation'

let customFonts = {
  // Lato: require('./assets/fonts/Lato-Regular.ttf'),
  Lato: require('./assets/fonts/Lato-Regular.ttf'),
  'Lato-Italic': require('./assets/fonts/Lato-Italic.ttf'),
  'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
  'Lato-Thin': require('./assets/fonts/Lato-Thin.ttf'),
  Nunito: require('./assets/fonts/Nunito-Regular.ttf'),
};

SplashScreen.preventAutoHideAsync()
  .then((result) =>
    console.log(`Splashscreen preventAutoHideAsync() succeeded: ${result}`),
  )
  .catch(console.warn);

export interface Props {}

export interface State {
  customTextProps: object;
  fontLoaded: boolean;
}

export default class EntryPoint extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      fontLoaded: false,
      customTextProps: {
        style: {
          fontFamily: 'Lato',
        },
      },
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    await setCustomText(this.state.customTextProps);
    await setCustomTextInput(this.state.customTextProps);
    this.setState({ fontLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
    console.disableYellowBox = true;
  }

  render() {
    if (this.state.fontLoaded) {
      return (
        <>
          {/* <StatusBar backgroundColor={light} barStyle={'dark-content'} /> */}
          <Provider store={store}>
            <PersistGate loading={false} persistor={persistor}>
              <NavigationContainer>
                <DrawerNavigation />
              </NavigationContainer>
            </PersistGate>
          </Provider>
        </>
      );
    } else {
      return <AppLoading />;
    }
  }
}
