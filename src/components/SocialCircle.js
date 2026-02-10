import { TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';
import SocialIcon from '../assets/SocialIcon';

const SocialCircle = () => {
  return (
    <TouchableOpacity style={styles.socialcircle}>
      <SocialIcon />
    </TouchableOpacity>
  );
};

export default SocialCircle;

const styles = StyleSheet.create({
  socialcircle: {
    display: 'flex',
    height: s(46),
    width: s(46),
    borderRadius: s(40),
    outlineColor: '#E4E6E8',
    outlineWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
