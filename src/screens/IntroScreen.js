import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, StyleSheet, View } from 'react-native';
// import React from 'react'
import FoodLogo from '../assets/FoodLogo';
import SunScreen from '../assets/SunScreen';
import { useNavigation } from '@react-navigation/native';



const IntroScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FoodLogo />
      </View>

      {/* <View style={styles.containerButton}>
        <Text style={styles.text}>Intro Screen</Text>
        <Button
          title="Go to Home Screen"
          onPress={() => navigation.navigate('HomeScreen')}
        />
      </View> */}
      <Button
              title="Go to Home Screen"
              onPress={() => navigation.navigate('HomeScreen')}
            />
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
  // containerButton: {
  //   // flex: 1,
  //   // backgroundColor: 'gold',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // text: {
  //   fontSize: 30,
  // },
});
