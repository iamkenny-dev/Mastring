import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import UserAvatar from '../components/UserAvatar';
import BackButton from '../components/BackButton';
import { s } from 'react-native-size-matters';
import SocialSection from '../components/SocialSection';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { Text } from 'react-native-svg';

const ContactUsScreen = () => {
  return (
    <View style={{ marginTop: s(10), paddingHorizontal: s(17) }}>
      <View style={styles.head}>
        <BackButton />
        <UserAvatar />
      </View>
      <View style={styles.socialContainer}>
        <Text>Social Media Platforms</Text>
        <SocialSection
          icon={<Ionicons name="logo-whatsapp" size={s(24)} color="#25D366" />}
          title={'Whatsapp'}
        />
        <SocialSection />
        <SocialSection />
        <SocialSection />
        <SocialSection />
      </View>
    </View>
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
