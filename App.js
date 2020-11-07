/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Navigation from './src/navigation';
import colors from './src/helper/colors';
import { Provider } from "react-redux";
import store from './src/redux/store';


const App = () => {
  return (
    < >
      <StatusBar translucent={false} backgroundColor={colors.APPCOLOR} barStyle="light-content" />
     <Provider store={store} >
        <Navigation/> 
     </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'red',
  },
  
});

export default App;
