import * as React from 'react';
import { StyleSheet, View } from 'react-native';
// import React from 'react'
import FoodLogo from '../assets/FoodLogo';

const IntroScreen = () => {
  return (
    <View style={styles.container}>
        <FoodLogo />
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'red',
    alignItems: 'center', // horizontal center
    justifyContent: 'center', // vertical center
  },
});

