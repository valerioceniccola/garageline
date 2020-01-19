import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';
import { ThemeProvider, Header, ListItem, FullTheme } from "react-native-elements";
import colors from './constants/Colors';

const theme = {
  colors,
  ListItem: {
    containerStyle: {
      backgroundColor: colors.grey0
    },
    titleStyle: {
      color: 'white'
    },
    subtitleStyle: {
      color: colors.primary,
    },
    rightIcon: {
      color: colors.primary
    }
  },
  Header: {
    containerStyle: {
      backgroundColor: colors.grey0
    },
    statusBarProps: {
      barStyle: 'light-content'
    }
  },
  Input: {
    labelStyle: {
      color: colors.grey2
    },
    inputStyle: {
      color: 'white'
    }
  }
};

export default function App(props) {

  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <ThemeProvider theme={theme}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </ThemeProvider>
    );
  }

}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
