import { StyleSheet, View } from 'react-native';
import React from 'react';
import UserAvatar from '../components/UserAvatar';
import BackButton from '../components/BackButton';
import { s } from 'react-native-size-matters';
import SocialSection from '../components/SocialSection';

const ContactUsScreen = () => {
  return (
    <>
      <View style={styles.head}>
        <BackButton />
        <UserAvatar />
      </View>
      <SocialSection />
    </>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: s(16),
  },
});
