import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BackButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Ionicons name="chevron-back" size={s(16)} color="black" />
    </TouchableOpacity>
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
