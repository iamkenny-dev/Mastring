import { TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';
import SendIcon from '../assets/SendIcon';

const SendButton = () => {
  return (
    <TouchableOpacity style={styles.sendcircle}>
      <SendIcon />
    </TouchableOpacity>
  );
};

export default SendButton;

const styles = StyleSheet.create({
  sendcircle: {
    display: 'flex',
    height: s(46),
    width: s(46),
    borderRadius: s(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1077AF',
  },
});
