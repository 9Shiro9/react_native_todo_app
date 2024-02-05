import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import Header from './components/Header';
import AppNavigator from './navigation/AppNavigator';
import {colors} from "./constant/colors"

const App: React.FC = () => {
  return (
    <React.Fragment>
      <View style={styles.statusBarBackground} />
      <Header />
      <AppNavigator />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  statusBarBackground: {
    height: Platform.OS === 'ios' ? 60 : 0,
    backgroundColor: colors.statusBar_bgcolor,
  },
});

export default App;
