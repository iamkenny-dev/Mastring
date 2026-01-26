import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
import FoodLogo from '../assets/FoodLogo'

const IntroScreen = () => {
  return (
    <View>
      {/* <Text>IntroScreen</Text> */}
      {/* <Image source={FoodLogo} style={styles.image} /> */}
      <FoodLogo style={styles.image} />
    </View>
  )
}

export default IntroScreen

const styles = StyleSheet.create({
    image: {
        width: 20,
        height: 20,
    }
})