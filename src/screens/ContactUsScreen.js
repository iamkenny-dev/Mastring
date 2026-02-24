import { StyleSheet, View } from 'react-native';
import React from 'react';
import UserAvatar from '../components/UserAvatar';
import BackButton from '../components/BackButton';
import { s } from 'react-native-size-matters';
import SocialSection from '../components/SocialSection';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ContactUsScreen = () => {
  return (
    <>
      <View style={styles.head}>
        <BackButton />
        <UserAvatar />
      </View>
      <View style={styles.socialContainer}>
        <SocialSection icon={<Ionicons name="chevron-back" size={24} color="black" />} title={"WhatSapp"} />
        <SocialSection />
        <SocialSection />
        <SocialSection />
        <SocialSection />
      </View>
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
  socialContainer: {
    backgroundColor: '#F5F5FA',
    borderRadius: s(14),
    paddingHorizontal: s(18),
    paddingVertical: s(15),
  },
});
