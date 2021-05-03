/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import Navigation from './src/navigation';
import { Provider } from "react-redux";
import store from './src/redux/store';
import SplashScreen from 'react-native-splash-screen'
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <SafeAreaView style={styles.safeAreaView} edges={['top']}>
      <StatusBar backgroundColor="#3f51b5" />
      <Provider store={store} >
        <Navigation />
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#3f51b5'
  },

});

export default App;
