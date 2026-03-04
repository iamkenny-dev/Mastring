import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import { VideoIcon } from '../assets/icons';

const MediationCard = () => {
  return (
    <ImageBackground
      source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMNz3oPbmjIhlJ2LBcSgETPr2CouHvwLjNKg&s',
      }}
      style={styles.imageContainer}
      imageStyle={styles.image}
    >
      <View style={styles.overlay} />
      <View style={styles.liveBadge}>
        <Text style={styles.liveText}>Live</Text>
      </View>

      <View style={styles.cardContent}>
        <Text style={styles.title}>Meditations</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <VideoIcon />
          <Text style={styles.dateText}>31st Jan - 09:00 am</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default MediationCard;

const styles = StyleSheet.create({
  imageContainer: {
    height: vs(161),
    width: s(166),
    borderRadius: s(12),
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.7,
  },
  cardContent: {
    position: 'absolute',
    left: s(10),
    bottom: s(10),
  },
  title: {
    color: '#fff',
    fontSize: s(12),
    fontWeight: 'semibold',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
  },
  dateText: {
    fontSize: s(12),
    color: '#fff',
    marginStart: s(7),
  },
  liveBadge: {
    backgroundColor: '#E41111',
    height: vs(22),
    width: s(39),
    borderRadius: s(90),
    position: 'absolute',
    top: vs(7),
    right: s(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  liveText: {
    fontSize: s(11),
    fontWeight: 'semibold',
    color: '#ffffff',
  },
});
