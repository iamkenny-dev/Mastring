import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SendButton from './SendButton';
// import SocialCircle from './SocialCircle';
import { s, vs } from 'react-native-size-matters';

const SocialSection = ({ title, icon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* <SocialCircle /> */}
        {icon}
      </View>
      <Text style={styles.text}>{title}</Text>
      <SendButton />
    </View>
  );
};

export default SocialSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
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
    marginStart: s(14),
    flex: 1,
    fontSize: 12,
    fontWeight: '500',
    color: '#808383',
  },
});
