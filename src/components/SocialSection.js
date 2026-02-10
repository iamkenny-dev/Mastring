import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SendButton from './SendButton';
import SocialCircle from './SocialCircle';
import { s, vs } from 'react-native-size-matters';

const SocialSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <SendButton />
        <Text style={styles.text}>Whatsapp</Text>
      </View>
      <SocialCircle />
    </View>
  );
};

export default SocialSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E6E8',
    paddingVertical: vs(15),
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 18,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
});
