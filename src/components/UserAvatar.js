import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters';

const UserAvatar = () => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrOy5z90iLbiRND-3MHN7sCb7pV45Db0wY9g&s',
        }}
        style={styles.avatar}
      />
    </View>
  );
}

export default UserAvatar

const styles = StyleSheet.create({
    avatar: {
        width: s(50),
        height: s(50),
        borderRadius: 25,
      },
})