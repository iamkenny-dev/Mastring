import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import UserAvatar from '../components/UserAvatar';
import BackButton from '../components/BackButton';
import { s, vs } from 'react-native-size-matters';
import SocialSection from '../components/SocialSection';
import Ionicons from 'react-native-vector-icons/Ionicons';


const ContactUsScreen = () => {
  return (
    <View style={{ marginTop: s(10), paddingHorizontal: s(17) }}>
      <View style={styles.head}>
        <BackButton />
        <UserAvatar />
      </View>

      <Text style={styles.screenTitle}>Contact Us</Text>

      <View style={styles.socialContainer}>
        <Text style={styles.socialTitle}>Social Media Platforms</Text>
        <SocialSection
          icon={<Ionicons name="logo-whatsapp" size={s(24)} color="#1077AF" />}
          title={'Whatsapp'}
        />
        <SocialSection
          icon={<Ionicons name="close-outline" size={s(24)} color="#1077AF" />}
          title={'X'}
        />
        <SocialSection
          icon={<Ionicons name="logo-instagram" size={s(24)} color="#1077AF" />}
          title={'Instagram'}
        />
        <SocialSection
          icon={<Ionicons name="logo-snapchat" size={s(24)} color="#1077AF" />}
          title={'Snapchat'}
        />
        <SocialSection
          icon={<Ionicons name="logo-facebook" size={s(24)} color="#1077AF" />}
          title={'Facebook'}
        />
      </View>
    </View>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    // padding: s(16),
  },
  socialContainer: {
    backgroundColor: '#F5F5FA',
    borderRadius: s(14),
    paddingHorizontal: s(18),
    paddingVertical: s(15),
    marginTop: vs(22),
  },
  socialTitle: {
    fontSize: s(16),
    fontWeight: 'semibold',
  },
  screenTitle: {
    fontSize: s(30),
    fontWeight: 'semibold',
    marginTop: vs(20),
    marginStart: s(19),
  },
});
