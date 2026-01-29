import { StyleSheet, View } from 'react-native'
// import React from 'react'
import FoodLogo from '../assets/FoodLogo'

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text>IntroScreen</Text> */}
      {/* <Image source={FoodLogo} style={styles.image} /> */}
      <View style={styles.image}>
        <FoodLogo width={150} height={150} />
      </View>
    </View>
  );
}

export default IntroScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});