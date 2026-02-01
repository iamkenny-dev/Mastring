import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, Text } from 'react-native';
// import React from 'react'
import FoodLogo from '../assets/FoodLogo';

const IntroScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FoodLogo />
        <Text> Intro Screen </Text>
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
    backgroundColor: 'red',
    alignItems: 'center', // horizontal center
    justifyContent: 'center', // vertical center
  },
});
