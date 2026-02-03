import { StyleSheet, View } from 'react-native';
import React from 'react';
import UserAvatar from '../components/UserAvatar';
import BackButton from '../components/BackButton'

const ContactUsScreen = () => {
  return (
    <View style={styles.avatar}>
      <UserAvatar />
      <BackButton />
    </View>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  avatar: {
    // marginTop: 50,
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
