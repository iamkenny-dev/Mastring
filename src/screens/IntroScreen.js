import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';
// import React from 'react'
import FoodLogo from '../assets/FoodLogo';
import SunScreen from '../assets/SunScreen';


const IntroScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FoodLogo />
      </View>
      <View style={styles.sunScreenContainer}>  
        <SunScreen />
      </View>
    </SafeAreaView>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    // backgroundColor: 'blue',
    alignItems: 'center', // horizontal center
    justifyContent: 'center', // vertical center
  },
  sunScreenContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    // backgroundColor: 'red',
    // width: '100%',
  },
});
