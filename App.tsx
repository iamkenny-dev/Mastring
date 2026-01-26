import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IntroScreen from './src/screens/IntroScreen'

const App = () => {
  return (
    <View>
      <Text style={styles.text}>App</Text>
      <IntroScreen />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
})