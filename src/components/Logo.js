import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import normzer from '../utils/normalizer';

const _Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: normzer(250), height: normzer(250) }}
        resizeMode={'contain'}
        source={require('../assets/images/logi.png')}
      />
    </View>
  );
};

export default _Logo;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
