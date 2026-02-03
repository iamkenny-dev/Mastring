import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';
// import Entypo from '@expo/vector-icons/Entypo';
// import { Ionicons, MaterialIcons } from '@expo/vector-icons';
// import Ionicons from 'react-native-vector-icons/Ionicons';

const BackButton = () => {
  return (
    <View style={styles.container}>
      {/* <Ionicons name="chevron-left" size={24} color="black" /> */}
      {/* <Entypo name="chevron-left" size={12} color="black" /> */}
      <Text>BackButton</Text>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    height: s(32),
    width: s(32),
    borderRadius: s(16),
    backgroundColor: '#ECF0F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
