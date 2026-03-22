// import { StyleSheet } from 'react-native';
import React from 'react';
// import IntroScreen from './src/screens/IntroScreen'
// import ContactUsScreen from './src/screens/ContactUsScreen';
// import HomeScreen from './src/screens/HomeScreen';
// import PaymentScreen from './src/screens/PaymentScreen';
// import { createStaticNavigation } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import MainStackNavigator from './src/navigation/MainStackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './src/navigation/BottomTabs';

const App = () => {
  return (
    // <IntroScreen />
    // <ContactUsScreen />
    // <HomeScreen />
    // <PaymentScreen />
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default App;

// const styles = StyleSheet.create({

// })
